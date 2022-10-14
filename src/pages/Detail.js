import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import { useGetNotApprovedRecipeMutation, useGetOneRecipeQuery } from '../features/recipes/recipesApi'
import '../styles/Detail.css'
export default function Detail() {
    const token = localStorage.getItem("token")
    const [recipe, setRecipe] = useState({})
    const { user } = useSelector(state => state.user)
    const { fontColor, bcgColor, thirdColor } = useSelector(state => state.color)
    const [getNotAproved] = useGetNotApprovedRecipeMutation()
    const {id} = useParams();
    const {data:recipeRes,error} = useGetOneRecipeQuery(id)
    const navigate = useNavigate()


    
    useEffect(() => {
        recipeRes&&setRecipe(recipeRes)
        if (user.role && error) {
            user.role === "admin"&& getNotAproved({ id, token })
            .unwrap().then(res => { res.success ? setRecipe(res.response) : navigate('/') })
            .catch(err=>navigate("/"))
        } else if (error && user.role !== "admin") {
            navigate("/")
        }
            
    },[user,error,recipeRes])
    const printRecipe = (item) => (
        <article className='detail-modal'
            style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div className='detail-top'>
                <h2 className='detail-title'>{item.title}</h2>
            </div>
            <div className='detail-sub-description'>
                <p className='detail-subtitle'>Category: {item.category}</p>
                <p className='detail-description'>Description: {item.description}</p>
            </div>
            <div className='detail-info'>
                <div className='detail-sub-info'>
                <p className='detail-info-p'>
                    <span
                        style={{ fontWeight: "bold" }}
                    >Allergens: </span>
                    {item.allergens.map(item => item)}
                </p>
                <p className='detail-info-p'>
                    <span style={{ fontWeight: "bold" }}>
                        Time: </span>
                    {item.preptime} min</p>
                <p className='detail-info-p'>
                    <span style={{ fontWeight: "bold" }}>
                        Calories: </span>
                    {item.calories}</p>
                </div>
                <div className="detail-ingredients">
                <p
                    className='detail-info-p'
                    style={{ fontWeight: "bold"}}>
                    Ingredients:
                </p>
                    {item.ingredients.map((item, index) => (
                    <div className='detail-table'
                        key={index}
                        style={{ background: index % 2 ? "none":thirdColor }}>
                        <span className='detail-info-p'>
                            {item.quantity} </span>
                        <span className='detail-info-p'>
                            {item.name}</span>
                    </div>
                ))}
                </div>
            </div>
        </article>
    )

    return (
        <main className='detail-main'
            style={{ backgroundColor: bcgColor, color: fontColor }}>
            <div className='detail-content'>
                <div className='detail-banner'>
                    <img className='detail-banner-img' src={recipe.image} alt={recipe.title} />
                </div>
                {recipe.title && printRecipe(recipe)}
                <Comments id={id} />
            </div>
        </main>
    )
}
