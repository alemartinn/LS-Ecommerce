import Form from "./Form";
import GoogleForm from "./GoogleForm";


const FormSignIn = () => {
    
    const modelSignIn = [
        {name:'email', type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password', type: 'password', required: 'required', autoComplete: 'on'}
    ]
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputs = Array.from(e.target)
        inputs= inputs.filter((input) => input.name)

        let dataUser = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{})
        console.log(dataUser)
    };
    
    return ( 
        <>
            <Form modelForm={modelSignIn} handleSubmit={handleSubmit} Title={'Sign In'}/>
            <GoogleForm/>
        </>
     );
}
 
export default FormSignIn;