import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

import { auth } from '../../firebase/firebase.utils'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = ({ currentUser, hidden }) => {
	const { t } = useTranslation();
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				{' '}
				<Logo className="logo" />{' '}
			</Link>
			<div className="options">
				<LanguageSelector />
				<Link className="option" to="/shop">
					{t("shop.label")}
				</Link>
				<Link className="option" to="/contact">
					{t("contact.label")}
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						{t("signOut.label")}
					</div>
				) : (
					<Link className="option" to="/signin">
						{t("signIn.label")}
					</Link>
				)}
				<CartIcon />

			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
