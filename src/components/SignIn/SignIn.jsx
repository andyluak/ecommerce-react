import React from 'react'
import { withTranslation } from "react-i18next";

import './SignIn.scss'
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const {email, password} = this.state

		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({
				email: '',
				password: '',
			})
		}catch( err ) {
			console.log( err );
		}
		this.setState({
			email: '',
			password: '',
		})
	}

	handleChange = (event) => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="sign-in">
				<h2>{this.props.t("signIn.alreadyHaveAccount")}</h2>
				<span>{this.props.t("signIn.signInWithEmail")}</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label={this.props.t("form.email")}
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label={this.props.t("form.password")}
						required
						autoComplete="current-password"
					/>
					<div className="buttons">
						<CustomButton type="submit">
							{this.props.t("form.signIn")}
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>
							{this.props.t("form.signInWithGoogle")}
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default withTranslation()(SignIn)
