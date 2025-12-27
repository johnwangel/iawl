import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

import { SONGS } from '../helpers/lists.jsx'


export function Music(props){
	return <>
			<nav className='button-container'>
				<NavLink to='/main/music/notes' className='button'>Note</NavLink>
				<NavLink to='/main/music/audio' className='button'>Audio</NavLink>
			</nav>
			<Outlet />
		</>
}

export function MusicNotes(props){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Music</div>
							<div className='header2'>Andrew Abrams</div>
							<div className='body'>
								<div className='column'>
									<p>When I began writing the score for It’s a Wonderful Life: A New Musical, I knew it was essential to let the music reflect the eras through which the story moves. As George grows—aging, changing, and maturing—the musical language grows and matures with him. I wanted the score itself to chart that evolution.</p>
									<p>“Bedford Falls,” for example, carries hints of ragtime and early 20th-century popular music; “Doing the Charleston” propels us, singing and dancing, straight into the exuberance of the 1920s; and “You Can’t Keep the Bailey Boys Down” embraces the vibrant swing of the 1940s. All of this musical history culminates in “Pottersville,” which twists themes heard earlier in the show—shifting them into minor keys, disrupting rhythms, and layering everything with the smoky, late-1940s jazz-club atmosphere that defines that world.</p>
									<p>The show is written for a cast of 21, though larger companies will find it easy to expand. It can also be produced with fewer performers; however, because the piece includes several choral numbers, the music director will need to ensure that all vocal lines are fully covered.</p>
									<p>Our brilliant orchestrator, Evan Lange, has arranged the score for 24 musicians, including a lush section of 10 live string players. The orchestration can be reduced to 17 (with strings covered by a quartet and a Keyboard 2 string book), and I’m confident that producing companies can adapt the instrumentation further to suit their needs.</p>
								</div>
							</div>
						</div>
					</div>
}

export function Song(props){
	const [playing,changePlaying] = useState('off')
	return	<AudioPlayer key="1z" playing={playing=='on'} id={playing==='off'?'on':'off'} item={SONGS.find(s=>s.id==props.id)} change={changePlaying} />
}

export function Player(props){
	const [activeSong, changeActive] = useState(null);

	const info =  (activeSong) ? SONGS[activeSong-1] : null
	const song = (info) ? info.name : ''
	const img = (info) ? `/assets/photos/${info.img}.jpg` : ''

	return	<div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>Sample Tracks</div>
								<div className={`audio-container${activeSong?' noscroll':''}`}>
								{SONGS.map((s,i)=><AudioPlayer key={i} playing={(i==activeSong-1)?true:false} id={i+1} item={s} change={changeActive} />)}
								<div className={`audio-overlay${activeSong?'':' hidden'}`}>
									<div className='song-image-container'><img className='song-image' src={img} /></div>		
									<div className='song-title'>{song}</div>
									<div className='song-close' onClick={()=>changeActive(null)}>Stop</div>
								</div>
							</div>
						</div>
					</div>
}

export function AudioPlayer(props) {
	const [isPlaying,setIsPlaying] = useState(false)
  const audioRef = useRef(null);
  const src = `/assets/audio/${props.item.file}.mp3`

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