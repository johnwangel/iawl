import { useState, useEffect, useRef } from 'react';

import { SONGS, PHOTOS, DIFFERENT, FAMILIAR, QUOTES, PLOT, CREATIVES, CAST, CHARACTERS } from '../helpers/lists.jsx'

import LOGO from '../assets/iawl_logo.jpg'
//import REEL from '../assets/iawl_reel.mp4'

import '../styles/home.scss'
import '../styles/headings.scss'
import '../styles/audio.scss'
import '../styles/footer.scss'
import '../styles/photos.scss'
import '../styles/quotes.scss'
import '../styles/lists.scss'

export function Main(props){

	const vcomponents = [
		{ name: 'about', comp: About },
		{ name: 'music', comp: Music },
		{ name: 'Media', comp: Media },
		{ name: 'creative', comp: Creative }
	]

	return <div className='app-main'>
					<Snowflakes />
					<Hero />
					<div className='op-container main'>
						<Controls list={ vcomponents} />
					</div>
					<Footer />
				 </div>
}

function Controls(props){
	const [currentPage, setCurrentPage] = useState(0)
	const CurrentComponent = props.list[currentPage].comp;
	return  <div className='op-container controls'>
						<div className='controls-container'>
						<div className='button-container'>
							{ props.list.map((b,i)=><Button key={i} id={i} name={b.name} active={currentPage==i} click={setCurrentPage} />)}
					  </div>
					  <CurrentComponent { ...props.list[currentPage].propList } />
					</div>
				</div>
}

export function Button(props){
	return <div className={`button${props.active?' active':''}`} onClick={()=>props.click(props.id)} >{props.name}</div>
}

export function Hero(props){
			return		<div className='op-container full'>
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
								<div><i>It's A Wonderful Life</i> is based on the story 'The Greatest Gift' by Philip Van Doren Stern.
						   'The Greatest Gift' is used by permission of The Greatest Gift Corporation.</div>
							</div>
					</div>
}


function Videos(props){
 const vcomponents = [
		{ name: 'sizzle reel', comp: Video, propList: { title: 'Sizzle Reel', src: 'https://www.youtube.com/embed/GBO5AVAd9gI?si=NtBZxcLRVvcndeJP'} },
		{ name: 'promo reel', comp: Video, propList:  { title: 'Promo Reel', src: 'https://www.youtube.com/embed/8fkg26pBR14?si=kDBGQlmFUDbtFtTR?autoplay=1'}},
	]
	return <Controls list={ vcomponents} />
}

function About(props){
 const vcomponents = [
		{ name: "Note", comp: Note },
		{ name: "Concept", comp: Concept },
		{ name: "Story", comp: PLOT },
		{ name: "Cast", comp: Characters },
	]
	return <Controls list={ vcomponents} />
}

function Music(props){
 const vcomponents = [
 	  { name: "Note", comp: MusicNotes },
		{ name: "Audio", comp: Player },
	]
	return <Controls list={ vcomponents} />
}

function Media(props){
	 const vcomponents = [
		{ name: 'Videos', comp: Videos },
		{ name: 'Photos', comp: Photos  },
	]
	return <Controls list={ vcomponents} />
}

function Creative(props){
 const vcomponents = [
		{ name: "Writers", comp: Writers },
		{ name: "Cast", comp: Cast },

	]
	return <div className='op-container note'> <Controls list={ vcomponents} /> </div>
}

export function Writers(){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Writing Team</div>
							<div className='body'>
								<div className='column'>
									{ CREATIVES.map(p=><ListItem key={Math.random()} item={p} />  )}
									<PhotoInline item={ { file: 'OrpheumMarquee.jpg' } } />
								</div>
							</div>
						</div>
					</div>
}

export function Note(props){
		return	<div className='op-container note'>
						<div className='op-text-body'>
							<div className='header1'>Author&rsquo;s Note</div>
							<div className='header2'>John Atkins</div>
							<div className='body'>
								<div className='column'>
									<PhotoInline item={PHOTOS.find(p=>p.id===23)} />
									<p>A friend of mine once theorized that there are two kinds of people in this world—those who prefer Miracle on 34th Street, and those who prefer It's a Wonderful Life. I believe there is room for both, but I am firmly in the camp of the latter. </p>
									<div className='text-quote'>
										<div className='quote'>This adaptation, featuring music by Andrew Abrams and book and lyrics by John Atkins, doesn’t merely transpose Frank Capra’s beloved film to the stage—it reimagines it with a theatrical flourish all its own.</div>
										<div className='attr'>- BROADWAY WORLD</div>
									</div>
									<p>I first discovered It's a Wonderful Life in my teens. It was in the days when the film was shown continuously on all the cable networks, so after I had watched it once through, I flipped to another station and watched it again, and then I watched it again. The triumphant joy of that final scene is what ultimately drew me in. George Bailey hasn't overcome his difficulties—he's still in hot water over the supposed mishandling of funds—but even before the town comes to his rescue, he has realized that despite his tribulations, his life’s value is in all the loving relationships that have gone into the creation of his own identity—he is not alone. This a story that has stuck with me over the years like very few others. In some ways, I think we all feel like George Bailey at some point, and his epiphany at the end of the film is an inspiration for those darker times.</p>
									<div className='text-quote dark'>
										<div className='quote'>More than just a seasonal treat, it’s a reminder of musical theater’s unique ability to make the familiar feel fresh and the old feel new again</div>
										<div className='attr'>- BROADWAY WORLD</div>
									</div>
									<p>In the course of developing this piece, I believe Andy and I have managed to find a way to make the story a reflection of our own worldview, while maintaining the heart of the story we all love. We have unapologetically presented the world as we would like to see it. Not without its flaws and adversity, but with the ability to transcend by embracing people for who they are and their own intrinsic value. At the same time, we have tried to include all the iconic characters and moments we’ve come to love, compressed into a 2-1/2-hour musical journey that will take you through the gamut of human emotions. And you are sure to come to the inevitable conclusion: it really is a Wonderful Life.</p>
								</div>
							</div>
						</div>
					</div>
}

function Concept(props){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Concept</div>
							<div className='body'>
								<div className='column'>
									<p>We wanted to maintain the original time and place. But at the same time, we also wanted to reflect who we are today. That wasn't so hard to do, because this story was always ahead of its time in some ways. Frank Capra, the original scriptwriter, always envisioned American society in terms of what it could and should be, rather than strictly what it is. In film after film, such as Mr. Smith Goes to Washington and Meet John Doe, he portrayed an America that tended toward greed and corruption, and gave us a common-man hero who combats villainy through integrity and individualism. That was perhaps not exactly how Americans tended to see themselves coming out of the Great Depression, but it’s a theme that certainly carried through into the turbulent 60s, when our nation began to see the value in the diversity of people and ideas that was always there, bubbling under the surface.</p>
									<div className='text-quote dark'>
										<div className='quote'>This production demonstrates that&nbsp;<i>It’s a Wonderful Life: A New Musical</i>, with its sophisticated score, emotional depth, and uniformly strong performances, deserves to become a holiday perennial.</div>
										<div className='attr'>- BROADWAY WORLD</div>
									</div>
									<p>The themes of family bonds and faithful friends remains front and center. The core of this story will always be the importance of building relationships out of love and respect—the Golden Rule, if you will. And out of these themes we take a journey through the gamut of George’s tribulations and triumphs to ultimately experience that potent catharsis that brings us back to this story year after year. </p>
							</div>
						</div>
						</div>
						<Different />
						<Familiar />
					</div>
}

export function Quote(props){
	return  <div className='op-container'>
						<div className='quote'>&ldquo;{props.quote}&rdquo;</div>
						<div className='attr'>&ndash;&nbsp;{props.attr}</div>
					</div>
}

function MusicNotes(props){
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

function Player(props){
	const [activeSong, changeActive] = useState(null);

	const info =  (activeSong) ? SONGS[activeSong-1] : null
	const song = (info) ? info.name : ''
	const img = (info) ? `/assets/photos/${info.img}.jpg` : ''

	return	<div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>Audio Samples</div>
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

function Different(props){
	return <div className='op-container note'>
						<div className='op-text-body'>
							<div className='header1'>What's Different</div>
							<div className='body'>
								<div className='column'>
									{ DIFFERENT.map(p=><ListItem key={Math.random()} item={p} />  )}
								</div>
							</div>
						</div>
				</div>
}

function Familiar(props){
	return <div className='op-container note'>
					<div className='op-text-body'>
						<div className='header1'>What's Familiar</div>
						<div className='body'>
								<div className='column'>
									{ FAMILIAR.map(p=><ListItem key={Math.random()} item={p} />  )}
								</div>
							</div>
					</div>
	</div>
}


function Characters(props){
	return <div className='op-container note'>
					<div className='op-text-body'>
						<div className='header1'>Cast of Characters</div>
						<div className='body'>
								<div className='column'>
									{ CHARACTERS.map(p=><ListItem key={Math.random()} item={p} />  )}
								</div>
							</div>
					</div>
	</div>
}

function Cast(props){
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

function ListItem(props){
	return <div className='listItem'>
					<div className='listHead'>{props.item.head} {props.item.role ? <span className='role'>({props.item.role})</span> : null}</div>
					<div className='listDesc'>{props.item.desc}</div>
				 </div>

}

function CastItem(props){
	return <div className='castItem'>
					<div className='role'>{props.item.role}</div>
					<div className='dots'>&nbsp;</div>
					<div className='name'>{props.item.name}</div>
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
	return <div className='op-container note'>
					<div className='op-text-body'>
						<div className='header1'>{props.title}</div>
							<div className='video-container'>
										<iframe 
											src={props.src}
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

function PhotoInline(props){
		return <div className='photo-inline'>
					<img src={`/assets/photos/${props.item.file}`} />
				</div>
}

function Footer(props){
	return <div className='footer'></div>
}