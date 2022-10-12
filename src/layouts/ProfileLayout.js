import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, Link, useNavigate } from "react-router-dom"
import '../styles/profile/ProfileLayout.css'
    
export default function ProfileLayout() {
    const {fontColor,bcgColor} = useSelector(state=>state.color)
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const isLogged = () => !user.name && navigate("/")

    return (
        <div className="layout-profile-container"
            style={{ backgroundColor: bcgColor }}
            onLoad={isLogged}>
            <div className="layout-profile-content">
                <div
                    className="layout-profile-nav"
                    style={{borderColor:fontColor}}>
                    <Link
                        to="/dashboard"
                        className="profile-link"
                        style={{color:fontColor}}
                    >My Profile</Link>
                    <Link to="recipes"
                        className="profile-link"
                        style={{ color: fontColor }}>Recipies</Link>
                    {user.role === "admin" ?
                    <Link to="control-panel"
                    className="profile-link"
                    style={{color:fontColor}}>Control Panel</Link>
                :null}
                </div>
                <div className="layout-profile-main">
                <Outlet />
                </div>
            </div>
        </div>
    )
}