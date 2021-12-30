import React from 'react'
import './checkout.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'


const CheckoutPage = ({ cartItems, cartTotal }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{ cartItems.length !== 0 ? cartItems.map(( cartItem ) => {
				return (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				)
			}) : <div className="empty-message">Your cart is empty</div> }
			<div className="total">
				<span>TOTAL: ${cartTotal}</span>
			</div>
			<div className="test-warning">
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/{new Date().getFullYear()+ 1} - CVV: 123
			</div>
			<StripeCheckoutButton price={cartTotal} />
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);
