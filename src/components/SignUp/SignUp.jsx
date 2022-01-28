import React, { Component } from 'react'
import { withTranslation } from "react-i18next";

import './SignUp.scss'
import FormInput from '../../components/FormInput/FormInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import { auth, createUserProfile } from '../../firebase/firebase.utils'

class SignUp extends Component {
	constructor() {
		super()

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	}

	handleChange = (event) => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const { displayName, email, password, confirmPassword } = this.state
		if( password !== confirmPassword ) {
			alert('passwords do not match')
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfile(user, { displayName })

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		}catch(err) {
			console.log(err)
		}
	}
	render() {
		const { t } = this.props
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className="sign-up">
				<h2>{t("signIn.donotHaveAccount")}</h2>
				<span>{t("signIn.signUpWithEmail")}</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						handleChange={this.handleChange}
						label={t("form.firstName")}
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						handleChange={this.handleChange}
						label={t("form.email")}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						handleChange={this.handleChange}
						label={t("form.password")}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
						label={t("form.confirmPassword")}
						required
					/>
					<CustomButton type="submit"> {t("form.signUp")} </CustomButton>
				</form>
			</div>
		)
	}
}
export default withTranslation()(SignUp);