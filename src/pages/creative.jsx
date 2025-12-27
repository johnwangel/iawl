import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

import { CREATIVES, CAST } from '../helpers/lists.jsx'
import { ListItem, CastItem } from './lists.jsx'
import { PhotoInline } from './photos.jsx'

export function Creative(props){
	return <>
			<nav className='button-container'>
				<NavLink to='/main/creative/writers' className='button'>Writers</NavLink>
				<NavLink to='/main/creative/cast' className='button'>Cast</NavLink>
			</nav>
			<Outlet />
		</>
}

export function Writers(){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Writing Team</div>
							<div className='body'>
								<div className='column'>
									{ CREATIVES.map(p=><ListItem key={Math.random()} item={p} />  )}
									<PhotoInline file='OrpheumMarquee.jpg' />
								</div>
							</div>
						</div>
					</div>
}


export function OriginalCast(props){
	return <div className='op-container note'>
					<div className='op-text-body'>
						<div className='header1'>Principal Cast</div>
						<div className='header2'>November 22&ndash;December 1, 2024</div>
						<p><i>World Premier Produced by Capital City Theatre &ndash; Madison, Wisconsin</i></p>

						<div className='body'>
								<div className='column'>
									{ CAST.map(p=><CastItem key={Math.random()} item={p} />  )}
								</div>
							</div>
							<p><i>* Concert Staging (November 16, 2025)</i></p>
					</div>

	</div>
}