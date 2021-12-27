import React from 'react'
import { connect } from 'react-redux'
import withRouter from '../withRouter'

import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, router, dispatch }) => {
	const { navigate } = router
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => {
						return <CartItem key={cartItem.id} item={cartItem} />
					})
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					navigate('/checkout')
					dispatch(toggleCartHidden())
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	)
}

const mapPropsToState = ({ cart: { cartItems } }) => ({
	cartItems,
})

export default withRouter(connect(mapPropsToState)(CartDropdown))
