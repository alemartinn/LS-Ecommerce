import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import '../styles/form/ButtonGoogle.css'
import { useUserSignInMutation } from '../features/actions/usersAPI';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/user/userSlice'
import { closeModal } from '../features/modal/modalSlice'
import { specifyMessage, openAlert} from '../features/alert/alertSlice'

const GoogleForm = () => {

    const buttonDiv = useRef(null);

    const [userSignIn] = useUserSignInMutation()
    const dispatch = useDispatch()
    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential); 
        let dataFromGoogle={
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        };
        userSignIn(dataFromGoogle).unwrap().then(res => {
            if (res.success) {
                dispatch(setCredentials(res.response))
                dispatch(closeModal())
            }
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
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