import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/actions/usersAPI";
import "../../styles/profile/UsersPanel.css"

export default function UsersPanel() {
    const token = localStorage.getItem("token")
    const { data: users } = useGetUsersQuery(token)
    const {fontColor, thirdColor} = useSelector(state=>state.color)
    const PrintUser = (user) => {
        return (
            <div className="users-panel-item"
                style={{ color: fontColor, backgroundColor: thirdColor }}
                key={user._id}>
                <p className="users-panel-name">
                    {user.name}{" "}{ user.lastname }</p>
                <Link to={`${user._id}`}
                    className="users-panel-email"
                    style={{color:fontColor}}>
                    {user.email}
                </Link>
            </div>
        )
    }
    return (
        <div className="users-panel-container">
            {users?.map(PrintUser)}
        </div>
    )
}