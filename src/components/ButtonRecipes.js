import '../styles/ButtonRecipes.css'

const Button = ({btnColor= 'btn-recipes', children, handleClick, typeButton}) => {
    return (
        <button type={typeButton} className={'btn-recipes'} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;