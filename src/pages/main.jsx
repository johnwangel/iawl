import { useState } from 'react';

import LOGO from '../assets/iawl_logo.jpg'
//import REEL from '../assets/iawl_reel.mp4'

import P1 from '../assets/photos/photo1.jpg'
import P2 from '../assets/photos/photo2.jpg'
import P3 from '../assets/photos/photo3.jpg'
import P4 from '../assets/photos/photo4.jpg'
import P5 from '../assets/photos/photo5.jpg'

import S1 from '../assets/mp3/1-overture.mp3'
import S2 from '../assets/mp3/20-wings.mp3'
import S3 from '../assets/mp3/25-christmasday.mp3'

import '../styles/home.scss'
import '../styles/footer.scss'

const imgs = [P1,P2,P3,P4,P5]
const audio = [S1,S2,S3]

export function Main(props){
	return <div className='app-main'>

					<Snowflakes />

					<div className='op-container full'>
							<video className='video-container' controls poster={LOGO}>
							  <source src='' type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<div className='authors'>
								<div className='au-cont left'>
									<div className='super-title'> Music By:</div>
									<div className='author'>Andrew Abrams</div>
								</div>
								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics By:</div>
									<div className='author'> John Atkins </div>
								</div>
							</div>
							<div className='ack'>
								<i>It's A Wonderful Life</i> is based on the story 'The Greatest Gift' by Philip Van Doren Stern.
						   'The Greatest Gift' is used by permission of The Greatest Gift Corporation.
							</div>
					</div>

					<div className='op-container'><Controls /></div>

					<Quote quote=" . . . doesn&rsquo;t merely transpose Frank Capra's beloved film to the stage - it reimagines it with a theatrical flourish all its own." attr='Broadway World' />

					<Footer />

				 </div>
}


function Controls(props){
	const [active,changeActive] = useState(0)
	const buttons = ['Photos','Music','Videos','About']
	return  <div className='controls-container'>
						<div className='button-container'>
							{ buttons.map((b,i)=><Button key={i} id={i} name={b} active={active==i} click={changeActive} />)}
					  </div>
						{ active===0 ? <Photos /> : null }
						{ active===1 ? <Music /> : null }
						{ active===2 ? <Videos /> : null }
						{ active===3 ? <About /> : null }
					</div>
}

export function Button(props){
	return <div className={`button${props.active?' active':''}`} onClick={()=>props.click(props.id)} >{props.name}</div>
}

export function Quote(props){
	return  <div className='op-container'>
						<div className='quote'>&ldquo;{props.quote}&rdquo;</div>
						<div className='attr'>&ndash;&nbsp;{props.attr}</div>
					</div>
}

function Photos(props){
	return	<div className='photo-container'>
						{ imgs.map((n,i)=><Photo key={i} img={n} />) }
					</div>
}

function Photo(props){
	return <div className='photo'><img src={props.img} /></div>
}

function Music(props){
	return	<div className='audio-container'>
						<audio controls>
						  <source src={S1} type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
					</div>
}

function Videos(props){
	return <div className='videos-container'>Videos go here.</div>
}

function About(props){
	return	<div className='about-container'>
						<div className='description'>
							Show description goes here.
						</div>
					</div>
}

function Snowflakes(props){
	return 	<div className="snowflakes" aria-hidden="true">
						{ Array.from(Array(12).keys()).map(s=><Snowflake />) }
					</div>
}

function Snowflake(props){
	return <div className="snowflake">
					<div className="inner">❅</div>
				</div>
}

function Footer(props){
	return <div className='footer'></div>
}