import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

export function Media(props){
	return<div>
			<nav className='button-container'>
				<NavLink to='/main/media/videos' className='button'>Videos</NavLink>
				<NavLink to='/main/media/photos' className='button'>Photos</NavLink>
			</nav>
			<Outlet />
		</div>
}

export function Videos(props){
 const vcomponents = [
		{ name: 'sizzle reel', comp: Video, propList: { title: 'Sizzle Reel', src: 'https://www.youtube.com/embed/GBO5AVAd9gI?si=NtBZxcLRVvcndeJP'} },
		{ name: 'promo reel', comp: Video, propList:  { title: 'Promo Reel', src: 'https://www.youtube.com/embed/8fkg26pBR14?si=kDBGQlmFUDbtFtTR?autoplay=1'}},
	]
	return <div>
			<nav className='button-container'>
				<NavLink to='/main/media/videos/sizzle' className='button'>Sizzle Reel</NavLink>
				<NavLink to='/main/media/videos/promo' className='button'>Promo Reel</NavLink>
			</nav>
			<Outlet />
		</div>
}

export function Video(props){
	const src = `https://www.youtube.com/embed/${props.id}`
	return <div className='op-container note'>
					<div className='op-text-body'>
						{/*<div className='header1'>{props.title}</div>*/}
							<div className='video-container'>
										<iframe 
											src={src}
											title="YouTube video player" 
											frameBorder="0" 
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
											referrerPolicy="strict-origin-when-cross-origin" 
											allowFullScreen>
										</iframe>
							</div>
						</div>
					</div>
}

