import { useState, useEffect, useRef } from 'react';

import { SONGS, PHOTOS } from '../helpers/lists.jsx'

import LOGO from '../assets/iawl_logo.jpg'
//import REEL from '../assets/iawl_reel.mp4'

import '../styles/home.scss'
import '../styles/audio.scss'
import '../styles/footer.scss'
import '../styles/photos.scss'

export function Main(props){
	return <div className='app-main'>

					<Snowflakes />

					<div className='op-container full'>
							<div className='hero'>

								<div className='au-cont left'>
									<div className='super-title'> Music By:</div>
									<div className='author'>Andrew Abrams</div>
								</div>

								<div className='photo-group'>
									<img className='img-base' src='./assets/photos/logo_bg.png' />
									<img className='img-overlay' id='text1' src='./assets/photos/logo_text1.png' />
									<img className='img-overlay' id='text2' src='./assets/photos/logo_text2.png' />
									<img className='img-overlay' id='text3' src='./assets/photos/logo_text3.png' />
									<img className='img-overlay' id='text4' src='./assets/photos/logo_text4.png' />
									<img className='img-overlay' id='moon1' src='./assets/photos/logo_moon.png' />
								</div>


								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics By:</div>
									<div className='author'> John W. Atkins </div>
								</div>

							</div>
							
							<div className='authors'>

								<div className='au-cont left'>
									<div className='super-title'> Music:</div>
									<div className='author'>Andrew Abrams</div>
								</div>

								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics:</div>
									<div className='author'> John W. Atkins </div>
								</div>

							</div>
							<div className='ack'>
								<p><i>It's A Wonderful Life</i> is based on the story 'The Greatest Gift' by Philip Van Doren Stern.
						   'The Greatest Gift' is used by permission of The Greatest Gift Corporation.</p>
							</div>
					</div>

					<div className='op-container video' >
						<Video src='https://www.youtube.com/embed/GBO5AVAd9gI?si=NtBZxcLRVvcndeJP'/>
					</div>

					<div className='op-container'><Controls /></div>

					<Quote quote=" . . . doesn&rsquo;t merely transpose Frank Capra's beloved film to the stage - it reimagines it with a theatrical flourish all its own." attr='Broadway World' />

					<Footer />

				 </div>
}

function Controls(props){
	const [active,changeActive] = useState(0)
	const buttons = ['About','Photos','Music','Videos']
	return  <div className='controls-container'>
						<div className='button-container'>
							{ buttons.map((b,i)=><Button key={i} id={i} name={b} active={active==i} click={changeActive} />)}
					  </div>
					  { active===0 ? <About /> : null }
						{ active===1 ? <Photos /> : null }
						{ active===2 ? <Music /> : null }
						{ active===3 ? <Videos /> : null }
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
						{ PHOTOS.map(p=><Photo key={Math.random()} item={p} />  )}
					</div>
}

function Photo(props){
	return <div className='photo'>
					<img src={`/assets/photos/${props.item.file}`} />
					<div className='caption'>{props.item.caption}</div>
				</div>
}

function Music(props){
	const [activeSong, changeActive] = useState(null);

	const info =  (activeSong) ? SONGS[activeSong-1] : null
	const song = (info) ? info.name : ''
	const img = (info) ? `/assets/photos/${info.img}.jpg` : ''

	return	<div className={`audio-container${activeSong?' noscroll':''}`}>

						{SONGS.map((s,i)=><AudioPlayer key={i} playing={(i==activeSong-1)?true:false} id={i+1} item={s} change={changeActive} />)}
						
						<div className={`audio-overlay${activeSong?'':' hidden'}`}>
							<div className='song-image-container'><img className='song-image' src={img} /></div>		
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
	return <Sizzle src='https://www.youtube.com/embed/8fkg26pBR14?si=kDBGQlmFUDbtFtTR?autoplay=1'/>
}

function About(props){
	return	<div className='about-container'>
						<div className='description'>
							<div className='headline'>The Beloved Christmas-Film Classic</div>
							<div className='headline'>Brought to Life Onstage</div>
							<p>All the characters you know and love are here &ndash; GEORGE and MARY BAILEY, 
								   BERT and ERNIE, SAM WAINWRIGHT. POTTER, the villain you love to hate. 
								   And of couse CLARENCE the Angel. You'll experience all the cherished moments of JOY and HEARTBREAK. 
								   The iconic one-liners. Plus a lot of new surprises that only live theater can provide.</p>
							<p>With an exciting new musical score that celebrates the music of the era. 
								 And a crowd-pleasing finale that might just become a Christmas standard of its own.</p>
							<p><i>It's a Wonderful Life</i> had its WORLD PREMIER in 2024, produced by the <a href='https://capitalcitytheatre.org/'>Captiol City Theatre</a> in Madison, Wisconsin. 
							   Featuring a knockout cast, the show had audiences on their feet and begging for a return to make this show
							   a new holiday tradition.</p>
							<div className='headline'>The Creators</div>
							<p>ANDREW ABRAMS (Music)</p>
							<p>JOHN ATKINS (Book & Lyrics)</p>
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


function Video(props){
	return <div className='video-container'>
							<iframe 
								src={props.src}
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								referrerPolicy="strict-origin-when-cross-origin" 
								allowFullScreen>
							</iframe>
				</div>
}

function Footer(props){
	return <div className='footer'></div>
}