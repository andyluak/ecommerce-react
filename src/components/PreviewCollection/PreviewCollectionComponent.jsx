import React from 'react'
import withRouter from '../withRouter';

import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const PreviewCollectionComponent = ({ title, items, router }) =>{

	return (
		<div className="collection-preview">
			<h1> {title.toUpperCase()} </h1>
			<div className="preview">
				{items
					.filter((item, id) => id < 4)
					.map((item) => {
						return <CollectionItem key={item.id} item={item} />
					})}
			</div>
		</div>
	)
}

export default withRouter(PreviewCollectionComponent);