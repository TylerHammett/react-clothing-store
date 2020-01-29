import React from 'react';
import Button from '../button/Button.component';
import FormInput from '../formInput/FormInput.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './SignUp.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(err) {
            console.log(err);
        }
    }

    handleChange = evt => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="signUp">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} 
                    handleChange={this.handleChange} label="Display name" isrequired />
                    <FormInput type="email" name="email" value={email} 
                    handleChange={this.handleChange} label="Email" isrequired />
                    <FormInput type="password" name="password" value={password} 
                    handleChange={this.handleChange} label="Password" isrequired />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} 
                    handleChange={this.handleChange} label="Confirm password" isrequired />
                    <Button type="submit">SIGN UP</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;