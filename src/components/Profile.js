import React from 'react'
import '../styles/profile/MyProfile.css'



function Profile(props) {
    let item = props.userData

    return (
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

}

export default Profile