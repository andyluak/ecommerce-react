import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import withRouter from '../../components/withRouter';
import { useTranslation } from "react-i18next";

import './collection.scss';

const CollectionPage = ({collection}) => {
	const {t} = useTranslation();
	const {title, items} = collection;

	return (
		<div className="collection-page">
			<h1>{t(`directory.${title.toLowerCase()}`)}</h1>
			<div className="items">
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({

	collection: selectCollection(ownProps.router.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
