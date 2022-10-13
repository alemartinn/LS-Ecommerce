import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import "../../styles/profile/ControlPanel.css"

export default function ControlPanel() {
    const {user} = useSelector(state=>state.user)
    const {fontColor} = useSelector(state=>state.color)
    const navigate = useNavigate()
    const isAdmin = () => user.role !== "admin" && navigate("/")
    return (
        <div className="control-panel-main"
            style={{ color: fontColor }}
            onLoad={isAdmin}>
            <p className="control-panel-title">Control Panel</p>
            <div className="control-panel-nav">
                <Link to="users"
                    className="control-panel-button"
                    style={{color:fontColor}}>Users</Link>
                <Link to="recipes"
                    className="control-panel-button"
                    style={{color:fontColor}}>Manage Recipes</Link>
            </div>
            <Outlet />
        </div>
    )
}