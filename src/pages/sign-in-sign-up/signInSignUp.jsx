import React from 'react';
import './signInSignUp.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInSignUp = () => {
	return (
		<div className="sign-in-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};
export default SignInSignUp;