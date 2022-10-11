import { Outlet, Link } from "react-router-dom"
import '../styles/profile/ProfileLayout.css'
export default function ProfileLayout() {
    return (
        <div >
            <div className="layout-profile" style={{display:"flex"}}>
                <Link to="/dashboard" className="profile-link">My Profile</Link>
                <Link to="recipes" className="profile-link">Recipies</Link>
                <Link to="control-panel" className="profile-link">Control Panel</Link>
            </div>
            <Outlet/>
        </div>
        )
}