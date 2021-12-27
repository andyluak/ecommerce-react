import React from 'react'
import './checkout.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

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
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);