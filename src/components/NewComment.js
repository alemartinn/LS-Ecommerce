import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useCreateMutation } from '../features/comments/commentsApi'

export default function NewComment({id}) {
    const recipeID = id

    const divText = useRef(null)
    const [newcom] = useCreateMutation()
    const { user } = useSelector(state=>state.user)

    const sendComment = async()=>{
        let body ={message:divText.current.value,
            recipe:recipeID,
            user: user.id}
            await newcom(body)
    }
  return (
    <div>
        <input type="text"  ref={divText}></input>
        {/* <div onClick={()=>sendComment()}>Create</div> */}
        <button type='submit' onClick={()=>sendComment()}>creame</button>
    </div>
  )
}
