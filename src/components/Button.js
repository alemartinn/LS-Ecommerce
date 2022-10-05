import '../styles/Button.css'

const Button = ({children}) => {
    return (
        <button type="button" className="btn-main">
            {children}
        </button>
    );
}

export default Button;