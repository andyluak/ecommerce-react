import React from 'react'
import withRouter from '../withRouter';
import './MenuItem.scss'

const MenuItemComponent = ({ title, imageUrl, size, router, linkUrl }) => {
	const {navigate }= router;
	return (
		<div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItemComponent);
