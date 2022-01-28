import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import TextareaInput from '../../components/TextareaInput/TextareaInput';

const Contact = () => {
	const { t } = useTranslation();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(t('contact.formSend'));
		// Set all states to empty
		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');
	};
	return (
		<div className="contact-form">
			<h1>{t('contact.header')}</h1>
			<span>{t('form.message')}</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="firstName"
					type="text"
					value={firstName}
					handleChange={(e) => setFirstName(e.target.value)}
					label={t('form.firstName')}
				/>
				<FormInput
					name="lastName"
					type="text"
					value={lastName}
					handleChange={(e) => setLastName(e.target.value)}
					label={t('form.lastName')}
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
					label={t('form.email')}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">
						{t('form.submit')}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default Contact;
