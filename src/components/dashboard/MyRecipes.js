import { Link, Outlet } from "react-router-dom"
export default function MyRecipes(props) {
    return (
        <div>
            <Link to="create">create a recipe</Link>
            <Link to="edit">edit a recipe</Link>
            <Outlet />
            <h3>Recipes...</h3>
        </div>
    )
}