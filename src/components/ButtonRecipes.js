import '../styles/ButtonRecipes.css'

const ButtonRecipes = ({btnColor= 'btn-recipes', children, category, changeCategorySelected}) => {

    return (
        <button type='button' className={btnColor} onClick={() => changeCategorySelected(category)}>
            {children}
        </button>
    );
}

export default ButtonRecipes;