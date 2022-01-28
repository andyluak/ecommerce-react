import React, {useState} from 'react';

import './styles.scss';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import TextareaInput from '../../components/TextareaInput/TextareaInput';


const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		alert( 'Thank you for your message! We will get back to you as soon as possible.' );
		// Set all states to empty
		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');
	}
	return (
		<div className="contact-form">
			<h1>Get in touch ! </h1>
			<span>Feel free to shoot a message , we are more than happy to hear from you</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="firstName"
					type="text"
					value={firstName}
					handleChange={(e) => setFirstName(e.target.value)}
					label="First Name"
				/>
				<FormInput
					name="lastName"
					type="text"
					value={lastName}
					handleChange={(e) => setLastName(e.target.value)}
					label="Last Name"
				/>
				<TextareaInput
					name="message"
					value={message}
					handleChange={(e) => setMessage(e.target.value)}
					label="Message"
				/>
				<FormInput
					name="email"
					type="email"
					handleChange={(e) => setEmail(e.target.value)}
					value={email}
					label="Email"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Submit</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default Contact;
