import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector';

import PreviewCollectionComponent from '../../components/PreviewCollection/PreviewCollectionComponent'

const ShopPage = ({ collections }) => {
	return (
		<div>
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <PreviewCollectionComponent key={id} {...otherCollectionProps} />
			})}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);