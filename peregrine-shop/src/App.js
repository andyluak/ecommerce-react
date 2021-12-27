import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp';
import Header from './components/Header/Header';
import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if( userAuth ) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot( snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						}
					});
				});
			}
			this.setState({ currentUser: userAuth });
		});

	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/signin" element={<SignInSignUp />} />
				</Routes>
			</div>
		);
	}
}

export default App;
