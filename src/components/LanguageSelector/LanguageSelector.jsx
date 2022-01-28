import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (event) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<div className="language-selector">
			<label>
				<select onChange={changeLanguage} style={{padding: "0.5rem", border: '0'}}>
					<option value="en">🇬🇧</option>
					<option value="ro">🇷🇴</option>
				</select>
			</label>
		</div>
	);
};

export default LanguageSelector;
