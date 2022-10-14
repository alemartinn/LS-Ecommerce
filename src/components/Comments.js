import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {  useAllCommentQuery, useCreateMutation } from '../features/comments/commentsApi'
import '../styles/Comments.css'


export default function Comments({id}) {
const divText = useRef(null)
const [showComment,setShowCommment] = useState(false)
const {data} = useAllCommentQuery(id)
const [comment,setComment] = useState()
const { bcgColor, fontColor } = useSelector(state => state.color);
useEffect(()=>{
    if(data){
        console.log(data.response)
        setComment(data.response)
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
        <div className='btn'>
            <button className='btn-main ' onClick={()=>click()}>Comments</button>
        </div>
        <div className='comment-boxcomment'>
            {showComment ? 
            <div>
                { comment?.map(item =>printComment(item))}
                {/* NEW COMMENT  */}
                <div className='comment-createcomment'>
                    <div className='btn'>

                    <button className='btn-main'  type='submit' onClick={()=>sendComment()}>Post comment</button>
                    </div>
                    <input className='inputForm-input'  type="text"  ref={divText}></input>
                    
                </div>
            </div>  : null }
        </div>
        {/* <NewComment getAllComment={getAllComment} id={id}/> */}
            
        
    </div>
  )
}
