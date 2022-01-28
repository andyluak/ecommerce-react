import React, {Suspense} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './i18n';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp';
import CheckoutPage from './pages/checkout/checkout';
import Contact from './pages/contact/contact';
import Header from './components/Header/Header';

import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Suspense fallback={null}>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/shop/*" element={<ShopPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						exact
						path="/signin"
						element={
							this.props.currentUser ? (
								<Navigate to="/" />
							) : (
								<SignInSignUp />
							)
						}
					/>
					<Route path="/checkout" element={<CheckoutPage />} />
				</Routes>
				</Suspense>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
