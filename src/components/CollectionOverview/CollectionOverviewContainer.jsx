import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selector'
import { compose } from 'redux';
import WithSpinner from '../../components/withSpinner/withSpinner'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
})

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;