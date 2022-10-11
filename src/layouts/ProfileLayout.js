import { Outlet, Link } from "react-router-dom"
export default function ProfileLayout() {
    return (
        <>
            <h2>profileLayout</h2>
            <Link to="/dashboard">My Profile</Link>
            <Link to="recipes">Recipies</Link>
            <Link to="control-panel">Control Panel</Link>
            <Outlet/>
        </>
        )
}