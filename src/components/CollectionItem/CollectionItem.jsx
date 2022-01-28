import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CustomButton from '../CustomButton/CustomButton';
import { useTranslation } from "react-i18next";

import './collection-item.scss';

const CollectionItem = ( {item, addItem} ) => {
	const {name, price, imageUrl } = item;
	const {t} = useTranslation();
	return (
	<div className="collection-item">

		<div className="image" style={{ backgroundImage: `url(${imageUrl})` }}/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">${price}</span>
		</div>
		<CustomButton onClick={() => addItem(item)} inverted>{t( "cart.addToCart" )}</CustomButton>
	</div>

	);
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);