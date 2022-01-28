import React from 'react'

export default function TextareaInput({ handleChange, label, ...otherProps }) {
	return (
		<div className="group">
			<textarea className="form-input" onChange={handleChange} {...otherProps}> {otherProps.value} </textarea>
		</div>
	)
}
