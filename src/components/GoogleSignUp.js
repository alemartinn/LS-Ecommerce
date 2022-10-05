import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';

const SignUpGoogle = () => {

    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential); 

        let dataFromGoogle={
            name: userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            role: 'user',
            from: 'google'
        }
        console.log(dataFromGoogle);
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
        <div>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default SignUpGoogle;