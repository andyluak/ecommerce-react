const INITIAL_STATE = {
	sections: [
		{
			title: {
				en: 'hats',
				ro: 'palarii'
			},
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: {
				en: 'jackets',
				ro: 'jackete'
			},
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets',
		},
		{
			title: {
				en: 'sneakers',
				ro: 'papuci'
			},
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers',
		},
		{
			title: {
				en: 'womens',
				ro: 'femei'
			},
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens',
		},
		{
			title: {
				en: 'mens',
				ro: 'barbati'
			},
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export default directoryReducer;
