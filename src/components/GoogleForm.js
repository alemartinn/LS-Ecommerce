import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';

const GoogleForm = () => {

    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential); 
        let dataFromGoogle={
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        };
        
        try{
            console.log('sending data from google')
            console.log(dataFromGoogle)
        } catch(error){
            console.log(error)
        }
        //newUser(data)
    };

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium" }
        );
    },[])

    return (  
        <div>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default GoogleForm;