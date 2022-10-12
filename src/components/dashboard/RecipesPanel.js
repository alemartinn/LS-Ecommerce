import { useDispatch, useSelector } from "react-redux"
import {
    useGetNotApprovedRecipesMutation,
    useRemoveRecipeMutation,
    useApproveRecipeMutation
} from "../../features/recipes/recipesApi"
import CardRecipe from "../CardRecipe"
import { specifyMessage, openAlert } from "../../features/alert/alertSlice"
import "../../styles/profile/RecipesPanel.css"
import {useEffect} from "react"

export default function RecipesPanel() {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const { fontColor, thirdColor } = useSelector(state => state.color)
    
    const [getNotApprovedRecipes,
        { data: recipeRes }] = useGetNotApprovedRecipesMutation()
    const [removeRecipe] = useRemoveRecipeMutation()
    const [approveRecipe] = useApproveRecipeMutation()

    function deleteRecipe(id) {
        removeRecipe({id,token}).unwrap()
        .then(res => {
            if (res.success) {
                getNotApprovedRecipes(token)
            }
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }

    function approve(id) {
        approveRecipe({id,token}).unwrap()
        .then(res => {
            if (res.success) {
                getNotApprovedRecipes(token)
            }
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }
    useEffect(() => {
        getNotApprovedRecipes(token)
    },[])
    function printRecipe(item) {
        return (
            <div className="recipes-panel-item" key={item._id}>
                <CardRecipe image={item.image} title={item.title} id={item._id} />
                <button type="button"
                    className="recipes-panel-btn-approve"
                    onClick={() => approve(item._id)}
                    style={{ color: fontColor, backgroundColor:thirdColor }}
                >APPROVE</button>
                <button
                    type="button"
                    className="recipes-panel-btn-delete"
                    onClick={() => deleteRecipe(item._id)}
                    style={{ color: fontColor }}
                >
                    DELETE
                </button>
            </div>
        )
    }
    
    return (
        <div className="recipes-panel-container">
            <p className="recipes-panel-title">recipes without approval...</p>
            {recipeRes?.map(printRecipe)}
        </div>
    )
}