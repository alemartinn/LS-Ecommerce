import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {  useAllCommentMutation, useCreateMutation } from '../features/comments/commentsApi'
import '../styles/Comments.css'


export default function Comments({id}) {

    const [showComment,setShowCommment] = useState(false);
    const [comment,setComment] = useState([]);
    const [newcom, {data: rescomment}] = useCreateMutation();
    
    const { bcgColor, fontColor } = useSelector(state => state.color);
    const { user } = useSelector(state=>state.user);
    const [getComments] = useAllCommentMutation();
    const divText = useRef(null);
    
    useEffect(()=>{
            getComments(id).unwrap().then(res=> 
                setComment(res.response)
                ).catch( err => {})

    },[rescomment]);

    const printComment = (item)=>(
        <div className='comment-container' key={item._id}>
            <div className='comment-profile' >
                <div>
                    <img className='comment-img' src={item.user.photo} alt={'userPhoto'}/>
                </div>
                <h2>{item.user.name}</h2>
            </div>
            <div className='comment-message' >
                <p className='comment-message-p'>{item.message}</p>
            </div>
        </div>
    );

    const click = ()=>{
        setShowCommment(!showComment)
    };

    const sendComment = async()=>{
        let body ={message:divText.current.value,
            recipe:id,
            user: user.id}
            await newcom(body)
    };


  return ( 
    <div className='comment-main' style={{backgroundColor: bcgColor, color: fontColor}}>
        <h2 className='comment-title'>Comments: ({comment?.length})</h2>
        <div className='btn'>
            {
                comment && <button className='btn-main ' onClick={()=>click()}>{(showComment? "Show" : "Hide") + " Comments" }</button>
            }
        </div>
        {
            showComment 
            ?  
            <div className='comment-boxcomment'>
                { comment?.map(item =>printComment(item))}
                
            </div>  
            : 
            null 
        }
        <div className='comment-createcomment'>
            <div className='btn'>
                <button className='btn-main' type='submit' onClick={()=>sendComment()}>Post a comment</button>
            </div>
            <input className='inputForm-input' type="text" ref={divText} style={{backgroundColor: bcgColor, color: fontColor}} placeholder={'Leave your comment here!'}></input>
        </div>
    </div>
  )
}