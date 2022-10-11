import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import '../styles/form/ButtonGoogle.css'
import { useUserSignUpMutation } from "../features/actions/usersAPI"
import { useDispatch } from "react-redux"
import { openAlert, specifyMessage } from "../features/alert/alertSlice"

const SignUpGoogle = () => {

    const buttonDiv = useRef(null);
    const dispatch = useDispatch()
    const [userSignUp] = useUserSignUpMutation()

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
        userSignUp(dataFromGoogle).unwrap().then(res => {
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "672542229320-98ea5mfnf8del0uobqtpn42f25av1n2t.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "filled_blue", size: "medium" }
        );
    },)

    return (  
        <div className='googleSign-buttonGoogle'>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default SignUpGoogle;