import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/profile/MyProfile.css'
import Profile from '../Profile'
import Button from '../Button'
import InputForm from '../InputForm'
import { useState } from 'react'
import { useEditUserMutation } from '../../features/actions/usersAPI'

export default function MyProfile(props) {
    const { user } = useSelector(state=>state.user)
    let [editedUser] = useEditUserMutation(user)

    const basicModelForm = [
        {
            label: "Name",
            input: {
                name: 'name',
                key: 'name',
                type: 'text',
                required: 'required',
                defaultValue:user.name,
                autoComplete: 'off'
            }
        },
        {
            label: "Last Name",
            input: {
                name: 'lastname',
                key: 'lastname',
                type: 'text',
                required: 'required',
                defaultValue:user.lastname,
                autoComplete: 'off'
            }
        },
        {
            label: "Photo",
            input: {
                name: 'photo',
                key: 'photo',
                type: 'url',
                required: 'required',
                defaultValue:user.photo,
                autoComplete: 'off'
            }
        },
    ]
    const [open, setOpen] = useState(false)
    const { fontColor, light } = useSelector(state => state.color)
    
    const saveUser=(e) => {
        e.preventDefault()
        let inputsForm = Array.from(e.target)
        inputsForm = inputsForm.filter(element => element.name)
        let dataUser = inputsForm.reduce((values,input) => {
            values[input.name] = input.value
            return values
        },{})
        editedUser({
            id: user.id, 
            data:  dataUser
        })
    }
    const renderEdit=(e) => {
        e.preventDefault()
        if (!open) {
            setOpen(true)
        } else if(open){
            setOpen(false)
        }
        
    }

    
    return (
        <div className='my-profile-container'>
        {open? null : <Profile userData={user} />}
            {open? 
            <form onSubmit={saveUser} className="edit-profile-form">
                {basicModelForm.map((props) =>
                    <InputForm {...props}
                    style={{ color: fontColor }} />)}
                <Button >
                    Save
                </Button>
            </form> : null }
            <>
                <button  className='btn-main' onClick={renderEdit}> {!open? 'Edit Profile' : 'Close Edit'} </ button> 
            </>
        </div>
    )
}
