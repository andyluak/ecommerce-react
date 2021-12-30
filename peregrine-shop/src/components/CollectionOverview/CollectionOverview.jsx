import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './CollectionOverview.scss';

import PreviewCollectionComponent from '../../components/PreviewCollection/PreviewCollectionComponent';

const CollectionOverview = ({ collections }) => {
	return (
		<div className='collection-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <PreviewCollectionComponent key={id} {...otherCollectionProps} />
			})}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);