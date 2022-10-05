import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import '../styles/form/ButtonGoogle.css'

const SignUpGoogle = () => {

    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential); 

        let dataFromGoogle={
            name: userObject.given_name,
            lastname: userObject.family_name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            role: 'user',
            from: 'google'
        }
        console.log('Sending data from Google...', dataFromGoogle);
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "672542229320-98ea5mfnf8del0uobqtpn42f25av1n2t.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "outline", size: "large" }  // customization attributes
        );
    },)

    return (  
        <div className='googleSign-buttonGoogle'>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default SignUpGoogle;