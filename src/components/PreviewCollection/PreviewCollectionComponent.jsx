import React from 'react'
import withRouter from '../withRouter';

import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'
import { useTranslation } from "react-i18next";

const PreviewCollectionComponent = ({ title, items, router }) =>{
	const {t} = useTranslation();
	return (
		<div className="collection-preview">
			<h1> {t(`directory.${title.toLowerCase()}`)} </h1>
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