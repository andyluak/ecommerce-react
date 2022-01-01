import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview'
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends React.Component {

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		return (
			<div className="shop-page">
				<Routes>
					<Route path="/" element={<CollectionOverviewContainer/>} />
					<Route path={`:collectionId`} element={<CollectionPageContainer />} />
				</Routes>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
