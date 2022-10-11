import { Link, Outlet } from "react-router-dom";
export default function ControlPanel(props) {
    return (
        <div>
            <p>Control Panel</p>
            <Link to="users">Users</Link>
            <Link to="recipes">Manage Recipes</Link>
            <Outlet />
        </div>
    )
}