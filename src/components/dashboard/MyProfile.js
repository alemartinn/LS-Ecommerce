import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/profile/MyProfile.css'

export default function MyProfile() {
    const { user } = useSelector(state=>state.user)
    const profile = (item) =>(
        <div className='profile-container'>
            <img className='profile-img' src={item.photo}/>
            <div className='profile-info'>
                <p><span className='profile-bold'>Name:</span> {item.name}</p>
                <p><span className='profile-bold'>LastName:</span> {item.lastname}</p>
                <p><span className='profile-bold'>Email:</span> {item.email}</p>
                <p><span className='profile-bold'>Role:</span> {item.role}</p>
            </div>
        </div>
    )
  return (
    <div>
        {profile(user)}
    </div>
  )
}
