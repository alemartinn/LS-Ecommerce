import { useParams } from "react-router-dom"
export default function UserPanel() {
    const {id} = useParams()
    return (
        <div>
            <p>edit an user...</p>
            <p>{id}</p>
        </div>
    )
}