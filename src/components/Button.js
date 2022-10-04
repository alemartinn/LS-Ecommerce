import styled from "styled-components";

const Button = ({children, fontcolor, bcgcolor}) => {
    return (
        <StyledButton bcgcolor={bcgcolor} fontcolor={fontcolor} >
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    margin: 2vh 0;
    background-color: ${props => props.bcgcolor};
    color: ${props => props.fontcolor};
    cursor: pointer;
    border: 1px solid var(--third-color);
    border-radius: 20px;
    height: 48px;
    padding: 0 3vh;
    font-size: 20px;
    
    &:hover {
        box-shadow: 0px 0px 3px 1px ${props=>props.bcgcolor};
    }
`

export default Button;