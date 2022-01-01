import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import WithSpinner from '../../components/withSpinner/withSpinner'

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'
import CollectionPage from '../collection/collection'

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
class ShopPage extends React.Component {

	state = {
		loading: true,
	}
	unsubscribeFromSnapshot = null

	componentDidMount() {
		const { updateCollections } = this.props
		const collectionRef = firestore.collection('collections')
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
				updateCollections(collectionsMap)
				this.setState({ loading: false })
			},
		)
	}

	render() {
		const { loading } = this.state
		return (
			<div className="shop-page">
				<Routes>
					<Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} />} />
					<Route path={`:collectionId`} element={<CollectionPageWithSpinner isLoading={loading}/>} />
				</Routes>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
