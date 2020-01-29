import React from 'react';
import FormInput from '../formInput/FormInput.component';
import Button from '../button/Button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = evt => {
        const { value, name } = evt.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="email" value={this.state.email} 
                    handleChange={this.handleChange} isrequired label="Email" />
                    <FormInput type="password" name="password" value={this.state.password} 
                    handleChange={this.handleChange} isrequired label="Password" />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button isGoogleSignin onClick={signInWithGoogle}>Sign in with Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;