import React from 'react'
import './checkout.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

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
			{ cartItems.length != 0 ? cartItems.map(({imageUrl, name, quantity, price} ) => {
				return (
					<div className="checkout-item">
						<div className="image-container">
							<img src={imageUrl} alt="item" />
						</div>
						<span className="name">{name}</span>
						<span className="quantity">{quantity}</span>
						<span className="price">{price}</span>
						<div className="remove-button">
							<button>Remove</button>
						</div>
					</div>
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
