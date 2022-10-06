import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import '../styles/form/ButtonGoogle.css'

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
            console.log('Sending data from google', dataFromGoogle)
        } catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "283438616456-ur0q37dob9oe2npbk3pgqsjcetnk6chn.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "filled_blue", size: "medium"}
        );
    },[])

    return (  
        <div className='googleSign-buttonGoogle'>
            <div ref={buttonDiv}></div>
        </div>
    );
}

 
export default GoogleForm;