import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'

import './Directory.scss'
import MenuItemComponent from '../MenuItem/MenuItemComponent'
const DirectoryComponent = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItemComponent key={id} {...otherSectionProps} />
			})}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
  });

export default connect(mapStateToProps)(DirectoryComponent);