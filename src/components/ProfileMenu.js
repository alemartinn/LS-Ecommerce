import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen,faArrowRotateLeft} from "@fortawesome/free-solid-svg-icons" 
import { useDispatch, useSelector } from "react-redux"
import { Link as LinkRouter } from "react-router-dom"
import { specifyModal,closeModal } from "../features/modal/modalSlice"
import { logOut } from "../features/user/userSlice"
import { useUserSignOutMutation } from "../features/actions/usersAPI"
import { openAlert, specifyMessage } from "../features/alert/alertSlice"
import "../styles/profile/ProfileMenu.css"
import Profile from "./Profile"

export default function ProfileMenu() {
    const { user } = useSelector(state=>state.user)
    const { fontColor, bcgColor } = useSelector(state=>state.color)
    const dispatch = useDispatch()
    const [signOut] = useUserSignOutMutation()
    const BackMenu = () => {
        return (
            <FontAwesomeIcon
            icon={faArrowRotateLeft}
                className="edit-profile-back"
                onClick={()=>dispatch(specifyModal({name:"profile"}))}
        />)
    }
    const signOutProps = {
        onClick: () => {
            const token = localStorage.getItem('token')
            signOut(token).unwrap().then((res) => {
                if (res.success) {
                    dispatch(logOut())
                }
                dispatch(specifyMessage(res.message))
                dispatch(openAlert(res.success))
                dispatch(closeModal())
            }).catch((err) => {
                dispatch(specifyMessage(err.data.message))
                dispatch(openAlert(false))
            })
        },
        type: "button"
    }
    const listOptions = [
        {
            name: "My Profile",
            Component: LinkRouter,
            props: {
                to: "/dashboard",
                onClick:()=>dispatch(closeModal())
            }
        },
        {
            name: "My Recipes",
            Component: LinkRouter,
            props: {
            to: "/dashboard/recipes",
            onClick:()=>dispatch(closeModal())
        }},
        {
            name: "New Recipe",
            Component: LinkRouter,
            props: {
            to: "/dashboard/recipes/create",
            onClick:()=>dispatch(closeModal())
        } },
        {
            name: "Log Out",
            Component: "button",
            props: signOutProps },
    ]
    const printOptions = (opt) => {
        return (
            <opt.Component
                className="profile-menu-opt"
                {...opt.props}
                style={{
                    color: fontColor
                }}
                key={opt.name}>
                {opt.name}
            </opt.Component>
        )
    }
    return (
        <div className="profile-menu-container" style={{backgroundColor:bcgColor}}>
            <div className="profile-menu-user">
                    <Profile  userData={user}/>
            </div>
            <div className="profile-menu-options">
                {listOptions.map(printOptions)}
            </div>
        </div>
    )
}