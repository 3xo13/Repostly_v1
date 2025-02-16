"use client"
import React from 'react'

const SimpleInput = ({id, label, value, setValue}) => {
	return (
		<div className='col gap-2'>
			<label htmlFor={id}>{label}</label>
			<input type="text" name={id} id={id} className='w-full bg-gray-200 rounded-sm px-3 py-2' 
			value={value}
			onChange={e => setValue(e.target.value)}/>
		</div>
	)
}

export default SimpleInput