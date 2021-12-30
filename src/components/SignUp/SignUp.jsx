import React, { Component } from 'react'

import './SignUp.scss'
import FormInput from '../../components/FormInput/FormInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import { auth, createUserProfile } from '../../firebase/firebase.utils'

export default class SignUp extends Component {
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
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className="sign-up">
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						handleChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit"> Sign Up </CustomButton>
				</form>
			</div>
		)
	}
}
