import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useGetUserQuery, useUpdateRoleMutation } from "../../features/actions/usersAPI"
import Button from "../Button"
import EditProfile from "./EditProfile"
import { specifyMessage,openAlert } from "../../features/alert/alertSlice"

export default function UserPanel() {
    const { id } = useParams()
    const token = localStorage.getItem("token")
    const [user,setUser] = useState({})
    const { data: userBase, isSuccess } = useGetUserQuery({id,token})
    const [selectRole, setSelectRole] = useState()
    const dispatch = useDispatch()
    const Profile = ({item}) =>(
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
    const [updateRole] = useUpdateRoleMutation()
    const submitRole = (e) => {
        e.preventDefault()
        updateRole({ id, role: selectRole, token }).unwrap()
        .then(res => {
            if (res.success) {
                setUser(res.response)
            }
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }
    useEffect(() => {
        if (isSuccess) {
            setUser(userBase)
        }
    },[isSuccess])
    return (
        <div>
            <p>edit this user...</p>
            {isSuccess ?
                <>
                    <EditProfile
                        user={user}
                        Children={() => <Profile item={user} />}
                    />
                    <form onSubmit={submitRole}>
                        <select defaultValue={userBase.role}
                            name="role"
                            onLoad={e => setSelectRole(e.target.value)}
                            onChange={e => setSelectRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <Button>
                            Save Role
                        </Button>
                    </form>
                </>
                : <p>user not found</p>
            }
        </div>
    )
}