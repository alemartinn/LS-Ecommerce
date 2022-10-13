import React from 'react'
import '../styles/profile/MyProfile.css'
import { useSelector } from 'react-redux'



function Profile(props) {
    let item = props.userData
    const { fontColor, bcgColor } = useSelector(state=>state.color)
    return (
        <div className='profile-container'>
            <img className='profile-img' src={item.photo}/>
            <div className='profile-info' style={{
                    color: fontColor
                }}>
                <p><span className='profile-bold'>Name:</span> {item.name}</p>
                <p><span className='profile-bold'>Last Name:</span> {item.lastname}</p>
                <p><span className='profile-bold'>Email:</span> {item.email}</p>
                <p><span className='profile-bold'>Role:</span> {item.role}</p>
            </div>
        </div>
    )

}

export default Profile