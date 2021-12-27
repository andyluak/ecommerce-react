import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

export default function PreviewCollectionComponent({ title, items }) {
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
