import React from 'react';
import {Route, Routes} from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../collection/collection';

const ShopPage = () => {

	return (
		<div className='shop-page'>
			<Routes>
				<Route path='/' element={<CollectionOverview />} />
				<Route path={`:collectionId`} element={<CollectionPage/>} />
			</Routes>

		</div>
	)
}

export default ShopPage;