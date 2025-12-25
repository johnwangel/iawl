import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

import { SONGS, PHOTOS, DIFFERENT, FAMILIAR, QUOTES, CREATIVES, CAST, CHARACTERS } from '../helpers/lists.jsx'

import LOGO from '../assets/iawl_logo.jpg'
import { Hero } from './hero.jsx'
import { Snowflakes } from './snow.jsx'

import '../styles/home.scss'
import '../styles/headings.scss'
import '../styles/audio.scss'
import '../styles/footer.scss'
import '../styles/photos.scss'
import '../styles/quotes.scss'
import '../styles/lists.scss'
import '../styles/buttons.scss'

export function Layout(props){
	return <div className='app-main'>
			<Outlet />
		   </div>
}


export function StaticPage(props){
		return <div>
					<Snowflakes />
					<Hero />
					<div className='op-container main'>
						<nav className="button-container">
							<NavLink to='/main/about/note' className='button'>About</NavLink>
							<NavLink to='/main/music/notes' className='button'>Music</NavLink>
							<NavLink to='/main/media/photos' className='button'>Media</NavLink>
							<NavLink to='/main/creative/writers' className='button'>Creative</NavLink>
						</nav>
						<Outlet />
					</div>
					<Footer />
				 </div>
}

function Footer(props){
	const year = new Date().getFullYear()
	return <div className='footer'>
					<div className='contact'>Contact Us: <a href="mailto:wonderfullifemusical@gmail.com">wonderfullifemusical@gmail.com</a></div>
					<div className='copyright'>&copy; {year} John Atkins</div>
				 </div>
}