import React from 'react';
import './Button.styles.scss';

const Button = ({children, isGoogleSignin, inverted, ...otherProps}) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} 
        {...otherProps}>{children}</button>
);

export default Button;