import React from 'react'
import withRouter from '../withRouter';
import './MenuItem.scss'
import { useTranslation } from "react-i18next";

const MenuItemComponent = ({ title, imageUrl, size, router, linkUrl }) => {
	const {navigate }= router;
	const { t, i18n } = useTranslation();
	return (
		<div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title[i18n.language].toUpperCase()}</h1>
				<span className="subtitle">{t("directory.callToAction")}</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItemComponent);
