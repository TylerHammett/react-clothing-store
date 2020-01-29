import React from 'react';
import SignIn from '../../components/signIn/SignIn.component';
import SignUp from '../../components/signUp/SignUp.component';
import './SignInAndUp.styles.scss';

const SignInAndUp = () => (
    <div className="signInAndUp">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndUp;