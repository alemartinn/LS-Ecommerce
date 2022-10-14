import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAllCommentMutation, useAllCommentQuery, useCreateMutation } from '../features/comments/commentsApi'
import '../styles/Comments.css'
import NewComment from './NewComment'
export default function Comments({id}) {

const divText = useRef(null)
const [showComment,setShowCommment] = useState(false)
const {data} = useAllCommentQuery()
const [comment,setComment] = useState()

useEffect(()=>{
    if(data){
        setComment(data)
    }
},[data])
const printComment = (item)=>(
    <div className='comment-container' key={item._id}>
        <div className='comment-profile' >
            <img className='comment-img' src={item.user.photo}/>
            <h2>{item.user.name}</h2>
        </div>
        <div className='comment-message' >
            <p className='comment-message-p'>{item.message}</p>
        </div>
    </div>
)
const click = ()=>{
    setShowCommment(!showComment)
}


    // NEW COMMENT
    const [newcom] = useCreateMutation()
    const { user } = useSelector(state=>state.user)
    const sendComment = async()=>{
        let body ={message:divText.current.value,
            recipe:id,
            user: user.id}
            await newcom(body)
    }


  return ( 
    <div className='comment-main'>
        {/* <h2 className='comment-title'>Comments</h2> */}
        <button className='comment-title' onClick={()=>click()}>Comments</button>
        <div className='comment-boxcomment'>
            {!showComment ? 
            <div>
                {comment?.map(item =>printComment(item))}
                {/* NEW COMMENT  */}
                <div className='comment-createcomment'>
                    <button className='create-comment buttoncomment'  type='submit' onClick={()=>sendComment()}>Create Comment</button>
                    <input className='create-comment'  type="text"  ref={divText}></input>
                </div>
            </div>  : null }
        </div>
        {/* <NewComment getAllComment={getAllComment} id={id}/> */}
            
        
    </div>
  )
}
