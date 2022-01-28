import React from 'react';
import './checkout.scss';
import { useTranslation } from 'react-i18next';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({ cartItems, cartTotal }) => {
	const { t } = useTranslation();
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>{t('checkout.product')}</span>
				</div>
				<div className="header-block">
					<span>{t('checkout.description')}</span>
				</div>
				<div className="header-block">
					<span>{t('checkout.quantity')}</span>
				</div>
				<div className="header-block">
					<span>{t('checkout.price')}</span>
				</div>
				<div className="header-block">
					<span>{t('checkout.remove')}</span>
				</div>
			</div>
			{cartItems.length !== 0 ? (
				cartItems.map((cartItem) => {
					return (
						<CheckoutItem key={cartItem.id} cartItem={cartItem} />
					);
				})
			) : (
				<div className="empty-message">Your cart is empty</div>
			)}
			<div className="total">
				<span>TOTAL: ${cartTotal}</span>
			</div>
			<div className="test-warning">
				*{t("checkout.testPay")}*
				<br />
				4242 4242 4242 4242 - Exp: 01/{new Date().getFullYear() + 1} -
				CVV: 123
			</div>
			<StripeCheckoutButton price={cartTotal} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
