import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useGetUserQuery, useUpdateRoleMutation, useRemoveUserMutation } from "../../features/actions/usersAPI"
import Button from "../Button"
import { specifyMessage, openAlert } from "../../features/alert/alertSlice"
import "../../styles/profile/UserPanel.css"
import Profile from "../Profile"

export default function UserPanel() {
    const { id } = useParams()
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [open,setOpen] = useState(false)
    const [selectRole, setSelectRole] = useState()
    const {fontColor, bcgColor} = useSelector(state=>state.color)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data: userBase, isSuccess } = useGetUserQuery({id,token})
    const [updateRole] = useUpdateRoleMutation()
    const [removeUser] = useRemoveUserMutation()


    
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
    const deleteUser = () => {
        removeUser({ id, token }).unwrap()
        .then(res => {
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
            if (res.success) {
                navigate("/dashboard/control-panel/users")
            }
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }

    useEffect(() => {
        if (isSuccess) {
            setUser(userBase)
        }
    }, [isSuccess])
    
    return (
        <div className="user-panel-container">
            <p className="user-panel-title">Title...</p>
            {isSuccess ?
                <>
                    <Profile userData={user} />
                    <form onSubmit={submitRole}
                        className="user-panel-form">
                        <select defaultValue={userBase.role}
                        className="user-panel-role"
                            name="role"
                            onLoad={e => setSelectRole(e.target.value)}
                            onChange={e => setSelectRole(e.target.value)}
                            style={{color:fontColor}}>
                            <option value="user"
                                style={{ backgroundColor: bcgColor }}
                            >User</option>
                            <option
                                value="admin"
                                style={{ backgroundColor: bcgColor }}
                            >Admin</option>
                        </select>
                        <Button>
                            Save Role
                        </Button>
                    </form>
                    <button
                        type="button"
                        className={`user-panel-btn-${open?"cancel":"delete"}`}
                        onClick={() => setOpen(!open)}
                        style={{ color: fontColor }}
                    >
                        {open? "CANCEL":"DELETE"}
                    </button>
                    {open ?
                        <>
                        <p style={{textAlign:"center"}}>Are you sure?</p>
                        <button
                            type="button"
                            className="user-panel-btn-delete"
                            onClick={deleteUser}
                            style={{color:fontColor}}
                        >
                            DELETE
                        </button>
                        </>:null}
                </>
                : <p>user not found</p>
            }
        </div>
    )
}