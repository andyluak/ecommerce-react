import React, { Component } from 'react';
import { SHOP_DATA } from './shop.data';

import PreviewCollectionComponent from '../../components/PreviewCollection/PreviewCollectionComponent';

export default class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...otherCollectionProps }) => {
					return (
						<PreviewCollectionComponent
							key={id}
							{...otherCollectionProps}
						/>
					);
				})}
			</div>
		);
	}
}
