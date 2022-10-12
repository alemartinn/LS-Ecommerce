import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/actions/usersAPI";

export default function UsersPanel() {
    const token = localStorage.getItem("token")
    const { data: users } = useGetUsersQuery(token)
    const PrintUser = (user) => {
        return (
            <Link to={`${user._id}`}
                key={user._id}>
                {user.name}{" "}{user.email}</Link>
        )
    }
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            {users?.map(PrintUser)}
        </div>
    )
}