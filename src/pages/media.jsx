import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

import { QUOTES } from '../helpers/lists.jsx'


export function Media(props){
	return <>
			<nav className='button-container'>
				<NavLink to='/main/media/photos' className='button'>Photos</NavLink>
				<NavLink to='/main/media/videos/promo' className='button'>Videos</NavLink>
				<NavLink to='/main/media/praise' className='button'>Quotes</NavLink>
			</nav>
			<Outlet />
		</>
}

export function Videos(props){
	return <>
			<nav className='button-container'>
				<NavLink to='/main/media/videos/promo' className='button'>Promo Reel</NavLink>
				<NavLink to='/main/media/videos/sizzle' className='button'>Sizzle Reel</NavLink>
			</nav>
			<Outlet />
		</>
}

export function Video(props){
	const src = `https://www.youtube.com/embed/${props.id}`
	return <div className='op-container note'>
					<div className='op-text-body'>
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

export function Quotes(props){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Critics</div>
							<div className='body'>
								<div className='column'>
									{ QUOTES.map((p,i)=><Quote key={Math.random()} item={p} id={i} />  )}
								</div>
							</div>
						</div>
					</div>
}

export function Quote(props){
		return <div className={`text-quote${(props.item.id%2==0)?' dark':''}`}>
							<div className='quote' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.item.quote) }} />
							<div className='attr'>- {props.item.source}</div>
						</div>
}
