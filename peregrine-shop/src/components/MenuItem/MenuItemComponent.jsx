import React from 'react';
import './MenuItem.scss';

export default function MenuItemComponent( { title, imageUrl, size } ) {
	return (
		<div className={`menu-item ${size}`} >
			<div className="background-image" style={{backgroundImage : `url(${imageUrl})`}}/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
}
