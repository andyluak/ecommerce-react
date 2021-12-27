import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" >
				{cartItems.length ? (
					cartItems.map(cartItem => {
						return <CartItem key={cartItem.id} item={cartItem} />
					})
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapPropsToState = ({ cart: { cartItems } }) => ({
	cartItems
})

export default connect(mapPropsToState)(CartDropdown);