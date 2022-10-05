import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import styled from 'styled-components';

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
    };

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "283438616456-ur0q37dob9oe2npbk3pgqsjcetnk6chn.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "large"}
        );
    },[])

    return (  
        <ButtonGoogle>
            <div ref={buttonDiv}></div>
        </ButtonGoogle>
    );
}

const ButtonGoogle = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
`
 
export default GoogleForm;