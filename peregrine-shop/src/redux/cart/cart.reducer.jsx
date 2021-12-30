import { CartActionTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			}
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload),
			}
		case CartActionTypes.REMOVE_QUANTITY:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload),
			}
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== payload.id
				),
			}
		default:
			return state
	}
}


export default cartReducer;