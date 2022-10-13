import { Link, Outlet, useNavigate } from "react-router-dom";
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
            <p className="control-panel-title">Box Panel</p>
            <div className="control-panel-nav">
                <Link to="create"
                    className="control-panel-button"
                    style={{color:fontColor}}>Add Box</Link>
                <Link to="edit"
                    className="control-panel-button"
                    style={{color:fontColor}}>Manage Boxes</Link>
            </div>
            <Outlet />
        </div>
    )
}