import '../styles/Button.css'

const Button = ({children}) => {
    return (
        <button type="submit" className="btn-main">
            {children}
        </button>
    );
}

export default Button;