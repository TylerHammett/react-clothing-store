import React from 'react';
import './Button.styles.scss';

const Button = ({children, isGoogleSignin, ...otherProps}) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} 
        {...otherProps}>{children}</button>
);

export default Button;