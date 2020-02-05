import React from 'react';
import Button from '../button/Button.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default CartDropdown;