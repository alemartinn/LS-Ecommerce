import React, { useState } from 'react';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';

const ShowForm = () => {

    const [showSignIn, setShowSignIn] = useState(true)

    const showSignUpForm = () => {
        setShowSignIn(false);
    }
    const showSignInForm = () => {
        setShowSignIn(true)
    }
    return (  
        <>
        {
            showSignIn
            ?
            <FormSignIn showSignUpForm={showSignUpForm} showSignIn={showSignIn}/>
            :
            <FormSignUp showSignInForm={showSignInForm} showSignIn={showSignIn}/>
        }
        </>
    );
}
 
export default ShowForm;