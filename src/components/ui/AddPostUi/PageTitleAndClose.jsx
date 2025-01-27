import Link from 'next/link'
import React from 'react'
import { SlClose } from 'react-icons/sl'

const PageTitleAndClose = ({title}) => {
	return (
		<div className='w-full row items-center justify-between px-5'>
			<h1 className="p-3 text-2xl font-medium text-head">
				{title}
			</h1>
			<Link href={"/dashboard"}>
				<button className='text-black font-bold hover:text-red-500'>
					<SlClose className='w-6 h-6' />
				</button>
			</Link>
		</div>
	)
}

export default PageTitleAndClose