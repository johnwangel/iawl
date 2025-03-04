import { useState, useEffect, useRef } from 'react';

import { SONGS } from '../helpers/lists.jsx'

import LOGO from '../assets/iawl_logo.jpg'
//import REEL from '../assets/iawl_reel.mp4'

import P1 from '../assets/photos/photo1.jpg'
import P2 from '../assets/photos/photo2.jpg'
import P3 from '../assets/photos/photo3.jpg'
import P4 from '../assets/photos/photo4.jpg'
import P5 from '../assets/photos/photo5.jpg'

import '../styles/home.scss'
import '../styles/audio.scss'
import '../styles/footer.scss'

const imgs = [P1,P2,P3,P4,P5]

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
	const [activeSong, changeActive] = useState(null);
	const song = (activeSong) ? SONGS[activeSong-1].name : ''

	return	<div className={`audio-container${activeSong?' noscroll':''}`}>

						{SONGS.map((s,i)=><AudioPlayer key={i} playing={(i==activeSong-1)?true:false} id={i+1} item={s} change={changeActive} />)}
						
						<div className={`audio-overlay${activeSong?'':' hidden'}`}>
							<div className='song-image'></div>		
							<div className='song-title'>{song}</div>
							<div className='song-close' onClick={()=>changeActive(null)}>Stop</div>
						</div>

					</div>
}

function AudioPlayer(props) {
	const [isPlaying,setIsPlaying] = useState(false)
  const audioRef = useRef(null);
  const src = `/assets/mp3/${props.item.file}.mp3`

  useEffect(() => {

    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    const handleTimeUpdate = () => {}
    const handleError = (error) => console.error("Audio error:", error);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('error', handleError);

    if (props.playing) audioRef.current.play()
    if (!props.playing) audioRef.current.pause()

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('error', handleError);
    };
  }, [src,props.playing]);



  // const togglePlay = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //   	props.change(props.id);
  //     audioRef.current.play();
  //   }
  // };

  return (
    <div className={`audio-player${props.playing?' active':''}`} onClick={()=>props.change(props.id)}>
      <audio ref={audioRef} src={src} />
      <div className={`audio-control ${props.playing ? 'pause' : 'play'}`} />
      <div className='audio-name'>{props.item.name}</div>
    </div>
  );
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
						{ Array.from(Array(12).keys()).map((s,i)=><Snowflake key={i} n={i+1} />) }
					</div>
}

function Snowflake(props){
	const size = props.n%4 ? 'small' : props.n%3 ? 'medium' : props.n%2 ? 'large' :  'extra-large'
	return <div className="snowflake">
					<div className={`inner ${size}`}>❅</div>
				</div>
}

function Footer(props){
	return <div className='footer'></div>
}