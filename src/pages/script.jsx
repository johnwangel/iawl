import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

import { Song } from './music.jsx'
import { SONGS } from '../helpers/lists.jsx'

export function Script(props){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>Script Excerpt</div>
							<Song id={17} />
							<div className='intro'>Following is an excerpt from Act 2, depicting the entire unborn-George/Pottersville sequence. To experience the entire musical scene of the scene, press the Play button above to hear the recording. <b>Please contact us if you would like a complementary spec script.</b></div>

								<div className='script'>
									<div className='scene'>SCENE 8 TRANSITION</div>
									<div className='setting'>A chanteuse appears in a soft lights, obscuring that it is Violet. Her hair, clothing, and makeup look cheap and vulgar.</div>
									<div className='character'>VIOLET</div>
									<div className='lyric'>
										I WANNA WALK EACH MIGHTY MILE
										<br/>OF THAT GREAT BIG CHINESE WALL
										<br/>- WITH YOU.
										<br/>
										<br/>I WANNA COUNT EACH IVORY STONE
										<br/>THAT MADE THE TAJ MAHAL
										<br/>- WITH YOU.
										<br/>
										<br/>A GIRL MUST BE CANNY,
										<br/>SHE CAN'T GO FOR ANYTHING SMALL.
										<br/>SHE HAS TO THINK BIG.
										<br/>I WANT SOMETHING BIG.
									</div>
									<div className='scene'>SCENE 8A: SAM'S BAR</div>

									<div className='setting'>The bar vaguely resembles Martini’s, but distinctly ramshackle and seedy. The tables are bare, no checkered tablecloths, no candles.</div>
									<div className='direction'>In the darkness of the bar, three men sit at a table, ogling Violet more than listening.</div>

									<div className='direction'>Nick is tending bar. George and Clarence enter.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Something's off. Martini's let this place go to the dogs.</div>
									<div className='instruction'>(to Nick)</div>
									<div className='dialog'>Where's Martini?</div>
									<div className='character'>NICK</div>
									<div className=''>You want a martini?</div>
									<div className='character'>GEORGE</div>
									<div className=''>No, I want to get my friend here a plate of pasta. He's not feeling too well.</div>
									<div className='character'>NICK</div>
									<div className=''>Look, fella, we serve hard drinks here for guys who want to get drunk fast.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Sure, sure. Easy, Nick.</div>
									<div className='character'>NICK</div>
									<div className='instruction'>(glaring)</div>
									<div className=''>You want a drink or don't you?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Double bourbon.</div>
									<div className='character'>NICK</div>
									<div className='instruction'>(to Clarence)</div>
									<div className=''>And you?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>It's been a while since I've had a drink. How about a flaming rum punch. No, not cold enough for that. Let see. Oh, yes! A mulled wine, heavy on the cinnamon, light on the cloves.</div>
									<div className='character'>NICK</div>
									<div className=''>Hard drinks, mister!</div>
									<div className='character'>GEORGE</div>
									<div className=''>It's okay. Give him the same as me.</div>
									<div className='character'>NICK</div>
									<div className='instruction'>(turns to make the drinks)</div>
									<div className=''>Fine.</div>
									<div className='character'>GEORGE</div>
									<div className=''>I've never seen Nick act that way. Must be having an off night.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>You'll see a lot of strange things from now on.</div>
									<div className='direction'>Nick rings up a sale and the register bell dings.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Oh joy. Someone just made it.</div>
									<div className='character'>NICK</div>
									<div className=''>Made what?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Every time you hear a bell ring, it means that some angel's just got his wings.</div>
									<div className='direction'>Nick gives him a funny look and steps away.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Maybe you shouldn't mention getting your wings around here.</div>
									<div className='direction'>Turning to notice Violet for the first time.</div>
									<div className=''>Hey, that's Violet! She should be on her way to New York.</div>
									<div className='direction'>Violet steps down from the stage and begins flirting with MAN 1, sitting in his lap.</div>
									
									<div className='character'>VIOLET</div>
									<div className='lyric'>
										THE ROME COLOSSEUM,
										<br/>THE LOUVRE MUSEUM,
										<br/>THERE'S SUCH A BIG WORLD TO EXPLORE.
										<br/>I HAVE TO THINK BIG.
										<br/>I WANT SOMETHING BIG.
									</div>

									<div className='direction'>MAN 2 angrily leaps up from his seat.</div>
									<div className='character'>MAN 2</div>
									<div className=''>Hey, get your hands off my girl.</div>
									<div className='character'>MAN 1</div>
									<div className='instruction'>(derisive laugh)</div>
									<div className=''>Violet Bick? She’s everybody's girl?</div>
									<div className='direction'>The two men lunge toward each other threateningly.</div>
									<div className='direction'>Sam enters, dressed in shirtsleeves and an apron. He steps between the two men.</div>
									<div className='character'>SAM</div>
									<div className=''>Sit down or take it outside, fellas!</div>
									<div className='direction'>The two men sit.</div>
									<div className='direction'>Sam roughly pulls Violet aside.</div>

									<div className=''>I warned you to keep it clean Vi. You want the cops in here again?</div>
									<div className='direction'>George rushes toward them.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Hee-haw! Sam, what the devil are you doing here?</div>
									<div className='character'>SAM</div>
									<div className=''>Hee-haw? Who's this clown?</div>
									<div className='character'>GEORGE</div>
									<div className=''>You're supposed to be in Europe.</div>
									<div className='character'>SAM</div>
									<div className=''>Oh sure. I'm missing high tea with the king.</div>
									<div className='direction'>The other patrons laugh.</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(wrapping his arm around Violet)</div>
									<div className=''>Hey, Vi, you all right?</div>
									<div className='character'>VIOLET</div>
									<div className=''>Hands off you creep!</div>
									<div className='direction'>Violet rushes off stage.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Hey Sam, what's with her?</div>
									<div className='character'>SAM</div>
									<div className=''>Do I know you?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Of course you know me. Your old pal George.</div>
									<div className='character'>SAM</div>
									<div className=''>Never seen you before - pal.</div>
									<div className='character'>GEORGE</div>
									<div className=''>What's the matter with you Sam? You me and Harry, we grew up together.</div>
									<div className='character'>SAM</div>
									<div className=''>Don't know any Harry either.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Sure you do. Harry Bailey?</div>
									<div className='character'>SAM</div>
									<div className=''>You knew Harry Bailey?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Of course, he's my kid brother.</div>
									<div className='character'>SAM</div>
									<div className=''>You think you're funny, wise guy? Who put you up to this?</div>
									<div className='instruction'>(furiously shouting at the bar patrons)</div>
									<div className=''>Who put him up to this? You don't think I've thought about Harry Bailey every day for the past 30 years?</div>
									<div className='instruction'>(to George)</div>
									<div className=''>Why don’t you get out of my bar!</div>
									<div className='character'>GEORGE</div>
									<div className=''>Your bar?</div>
									<div className='direction'>A grizzled man enters. It is Martini, but he is unshaven, dirty, dressed in rags.</div>
									<div className='character'>SAM</div>
									<div className=''>Hey, you! Diego! I warned you not to come begging in here.</div>
									<div className='direction'>Sam grabs Martini by the collar and begins to drag him toward the door.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Martini! Sam, this is Martini!</div>
									<div className='character'>SAM</div>
									<div className=''>So that's it. You're in with these damn immigrants?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Sam. . . you've never talked like that. That’s Martini. This is his restaurant!</div>
									<div className='character'>SAM</div>
									<div className=''>This is a dive bar, fella. My dive bar! And I want both of you out. Through the door or through the window!</div>
									<div className='character'>NICK</div>
									<div className='instruction'>(pointing at Clarence)</div>
									<div className=''>And take his pixie friend here with him!</div>
									<div className='direction'>Sam pushes George, Clarence, and Martini through the door.</div>

									<div className='scene'>SCENE 8B TRANSITION</div>
									<div className='direction'>Nick lays into the cash register bell.</div>
									<div className='character'>NICK</div>
									<div className=''>Hey! Get me! I'm giving out wings!</div>
									<div className='direction'>The front of the bar comes into view, revealing a neon sign that reads "Sam’s" instead of “Martini’s”.</div>
									<div className='direction'>George and Clarence slowly turn to see a giant neon sign that reads "Pottersville."</div>

									<div className='character'>MALE GHOSTS</div>
									<div className='lyric'>
										YOU'RE HERE IN THE DIRTY STREETS OF POTTERSVILLE,
										<br/>THE STENCH OF DESPONDENCE AND DECAY.
									</div>
									<div className='character'>FEMALE GHOSTS</div>
									<div className='lyric'>A SUBTLE SCENT OF SADNESS.</div>
									<div className='character'>MALE GHOSTS</div>
									<div className='lyric'>A CHILLING TRACE OF MADNESS.</div>
									<div className='character'>ALL</div>
									<div className='lyric'>THE END OF ANOTHER WEARY DAY.</div>

									<div className='scene'>SCENE 8B: POTTERSVILLE (FORMERLY BEDFORD FALLS)</div>
									<div className='direction'>George stands in front of the Building and Loan. The name has been chiseled away, and a cheap neon sign hangs below it reading "Girls. Girls. Girls."</div>
									<div className='character'>GEORGE</div>
									<div className=''>Where's the Building and Loan. What are you, some kind of hypnotist?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>No, no. I told you, I'm your guardian angel.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Why am I seeing all these crazy things?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>You were never born, George. You're nobody here.</div>
									<div className='character'>GEORGE</div>
									<div className=''>What do you mean, nobody? I'm George Bailey.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>There is no George Bailey. You have no driver's license, no 4-F card, no insurance policy . . .</div>
									
									<div className='character'>CHORUS</div>
									<div className='lyric'>
										WHEN PHANTOMS HAVE YOU FRIGHTENED
										<br/>I'M HERE TO FIGHT.
										<br/>I'M YOUR WHITE KNIGHT.
										<br/>YOUR WHITE KNIGHT.
									</div>

									<div className='direction'>George pokes into his waistcoat pocket. He sees a glimpse of Zuzu, but as he approaches she disappears into the crowd.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>They're not there, either.</div>
									<div className='character'>GEORGE</div>
									<div className=''>What?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Zuzu's petals.</div>
									<div className='character'>GEORGE</div>
									<div className=''>What have you done with my little girl's flower!</div>
									<div className='character'>CLARENCE</div>
									<div className=''>You've been given a great gift, George. A chance to see what the world would be like without you.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Cut it out! You're crazy! And you're driving me crazy!</div>
									<div className='direction'>George spots Ernie on the corner - a welcome figure in her familiar cabbie uniform.</div>
									<div className='character'>GEORGE</div>
									<div className=''>At last, someone sane. Hey, Ernie. I got some bad liquor or something. You know me, right? George Bailey. And you're Ernie Bishop. You live in Bailey Park.</div>
									<div className='character'>ERNIE</div>
									<div className=''>Look, buster, the name's Tina. And I never heard of no Bailey Park. I rent a one-room shack over in Potter's Field.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Potter's Field? You have a house. I helped build it. The Building and Loan financed it.</div>
									<div className='character'>ERNIE</div>
									<div className=''>What Building and Loan? I never seen you before in my life.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Doggone it, Ernie, don't you start too.</div>
									<div className='direction'>Bert enters, in a threadbare house dress - hair disheveled. Desperate and fragile, she appears to be on the verge of a breakdown.</div>
									<div className='character'>BERT</div>
									<div className=''>Have you seen my husband?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Bert!</div>
									<div className='character'>ERNIE</div>
									<div className='instruction'>(pointing at the bar)</div>
									<div className=''>He's inside, Miss Roberta, tighter than ever and throwing himself at that tramp Violet. When will you take my advice and cut him loose?</div>
									<div className='character'>BERT</div>
									<div className='instruction'>(to Ernie)</div>
									<div className=''>Please talk to him. Ask him to come home.</div>
									<div className='character'>GEORGE</div>
									<div className=''>You know me, right Bert?</div>
									<div className='instruction'>(Bert looks confused)</div>
									<div className=''>Say you know me. You two serenaded Mary and me with a ukulele on our wedding night.</div>
									<div className='direction'>George tries to put his arm on Bert's shoulder. As she recoils, we can sense a deep-seated fear.</div>
									<div className='direction'>Ernie pulls Bert back protectively.</div>
									<div className='character'>ERNIE</div>
									<div className=''>Ukulele?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Bert. Ernie. We've been pals since grade school. Sam and my kid brother Harry - we were inseparable.</div>
									<div className='character'>ERNIE</div>
									<div className=''>Harry Bailey?</div>
									<div className='character'>GEORGE</div>
									<div className=''>Sure. Harry. He'll be home for the parade tomorrow.</div>
									<div className='character'>ERNIE</div>
									<div className=''>Harry Bailey drowned, mister. I was there when they pulled him from the ice.</div>
									<div className='direction'>We see the spirit of Harry falling through the ice, and Sam futilely trying to save him.</div>
									<div className='direction'>George staggers, bewildered.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Now you've gone too far. My brother is down in Washington tonight accepting the Congressional Medal of Honor!</div>
									<div className='character'>ERNIE</div>
									<div className='instruction'>(gently leading Bert away)</div>
									<div className=''>Stay right here, pal. We're going to find you some help.</div>
									<div className='direction'>Bert and Ernie exit.</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(yelling after them)</div>
									<div className=''>Harry's a hero! He saved the lives of every man on that Navy transport.</div>
									<div className='direction'>Spirits of the men on the transport fall away one by one.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Every man on that transport died, George. Harry wasn't there to save them because you weren't there to save Harry.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Those two, they're like different people. What happened?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>The gang didn't come together to help Harry, so they never got together at all. Strange, how one man’s life touches so many others.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Stop this, you crazy fool. I'm going home to see my wife and kids. Alone!</div>
									<div className='direction'>George storms away.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>George, please, stay away from the Granville house.</div>
									<div className='instruction'>(looking toward heaven)</div>
									<div className=''>How'm I doing, Joseph?</div>
									<div className='instruction'>(a beat)</div>
									<div className=''>I did not have a drink!</div>

									<div className='scene'>SCENE 8C: GRANVILLE HOUSE EXTERIOR</div>
									<div className='character'>MEN</div>
									<div className='lyric'>THIS OLD HOUSE IS FORSAKEN.</div>
									<div className='character'>WOMEN</div>
									<div className='lyric'>NEVER MEANT TO LAST.</div>
									<div className='character'>ALL</div>
									<div className='lyric'>NOTHING HERE CAN AWAKEN.
										<br/>BURIED IN THE PAST.</div>
									<div className='character'>SAM</div>
									<div className=''>You say he was headed this way?</div>
									<div className='character'>BERT</div>
									<div className=''>I saw him running toward the Granville house.</div>
									<div className='character'>ERNIE</div>
									<div className=''>Says his name's Bailey. Maybe some relation to crazy old Billy Bailey?</div>
									<div className='character'>SAM</div>
									<div className='direction'>Billy's been in the asylum ever since his wife died. If you ask me, that's where this fella belongs.</div>
									<div className='scene'>SCENE 8D: GRANVILLE HOUSE INTERIOR</div>

									<div className='setting'>The house is a shell, its ceiling gaping to show the night stars. Shoved into one corner is the old steamer trunk, abandoned.</div>
									<div className='direction'>George runs through the house, crazed and breathless.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Mary! Pete! Janie! Zuzu! Where are you?</div>
									<div className='direction'>Ghostlike children walk slowly through the house, then disappear.</div>
									<div className='character'>PETE, JANIE, AND ZUZU</div>
								  <div className='lyric'>
										THIS OLD HOUSE.
										<br/>THIS OLD HOUSE.
										<br/>THIS OLD HOUSE.
									</div>
									<div className='character'>ALL KIDS</div>
									<div className='lyric'>THIS OLD HOUSE IS FORSAKEN.</div>
									<div className='direction'>Clarence suddenly appears.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>They're not here, George.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Mary! My kids! What have you done with them?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>You have no children. You were never born, so they weren't either.</div>
									<div className='character'>GEORGE</div>
									<div className=''>I don't know how you know these things, but tell me – where is Mary?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>You won't like it.</div>
									<div className='character'>CHORUS</div>
									<div className='lyric'>SHE -
										<br/>SHE NEVER OPENED HER EYES.
										<br/>SHE -
										<br/>SHE NEVER OPENED HER EYES.
									</div>
									<div className='direction'>At that moment, Mary appears, walking toward the house. She is hardly recognizable, dowdy, stooped, bespectacled, and decidedly more frail and timid.</div>
									<div className='direction'>George starts toward the door, but Clarence pulls him back.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Please, George. You'll frighten her.</div>
									<div className='direction'>George quietly watches.</div>
									<div className='direction'>Mary stops at the gate of the house, and gazes in as though in a dream.</div>
									<div className='character'>CHORUS</div>
									<div className='lyric'>SHE -
										<br/>SHE NEVER OPENED HER MIND.
										<br/>SHE -
										<br/>SHE NEVER OPENED HER MIND.
									</div>
									<div className='character'>CLARENCE</div>
									<div className=''>She comes this way every evening, after she closes up the library.</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(whispering)</div>
									<div className=''>Oh, Mary!</div>
									<div className='character'>CLARENCE</div>
									<div className=''>One thing never changed. She always loved this house. It was her dream. But she needed you there to complete the dream.</div>
									<div className='character'>CHORUS</div>
									<div className='lyric'>SHE -
										<br/>SHE NEVER OPENED HER HEART.
										<br/>SHE -
										<br/>SHE NEVER OPENED HER HEART.
									</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(to himself)</div>
									<div className=''>What have I done?</div>
									<div className='character'>CLARENCE</div>
									<div className=''>She never married. Never knew the wonder of those three beautiful children.</div>
									<div className='character'>GEORGE</div>
									<div className=''>Just let me talk to her. Touch her. I know she’ll remember me.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Strange how one man's life touches so many others. Your absence leaves an awful hole. Don't you see, George. You really had a wonderful life.</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(unable to hold back any longer)</div>
									<div className=''>Mary!</div>
									<div className='direction'>George runs from the house toward her.</div>
									<div className=''>Mary, it's me, George! Don't you know me?</div>
									<div className='character'>MARY</div>
									<div className=''>No. I don't know you!</div>
									<div className='character'>GEORGE</div>
									<div className=''>Mary, please! Oh, don't do this to me. Remember our kids. Pete? Janie? Zuzu?</div>
									<div className='direction'>George tries to embrace her.</div>
									<div className='character'>MARY</div>
									<div className=''>Let me go or I'll scream!</div>
									<div className='direction'>Sam enters, followed by Bert and Ernie. Sam pulls George away, threatening him with a raised fist.</div>
									<div className='character'>SAM</div>
									<div className=''>Enough is enough, fella!</div>
									<div className='direction'>Clarence jumps between George and Sam, biting Sam's arm.</div>
									<div className='character'>CLARENCE</div>
									<div className=''>Joseph, help!</div>
									<div className='direction'>The Ghost Chorus gathers menacingly around George. The music swells, the voices of George's past overlap hauntingly.</div>
									<div className='character'>MR BAILEY</div>
									<div className='lyric'>
										HELPING THOSE THAT YOU LOVE
										<br/>HOLD THEIR HEADS UP ABOVE,
										<br/>WHEN THEY FEEL LIKE THEY'RE DROWNING.
									</div>
									<div className='character'>ENSEMBLE</div>
									<div className='lyric'>
										TRUSTING IN OUR FRIENDS AND FAMILY, RICH OR POOR.
										<br/>IN BEDFORD FALLS IT'S WHAT WE LOVE OUR NEIGHBORS FOR.
									</div>
									<div className='character'>MARY</div>
									<div className='lyric'>
										GEORGE, YOU HAVE TO OPEN YOUR EYES.
										<br/>GEORGE, YOU HAVE TO OPEN YOUR MIND.
										<br/>GEORGE, YOU HAVE TO OPEN YOUR HEART.</div>
									<div className='character'>SAM AND HARRY</div>
									<div className='lyric'>
										THAT DAY WE SPAWNED
										<br/>OUR UNBREAKABLE BOND.
										<br/>AND THAT’S JUST HOW IT OUGHT TO BE.
									</div>
									<div className='character'>POTTER</div>
									<div className='lyric'>OOOH, THAT BOY IS TROUBLE.</div>
									<div className='character'>BERT AND ERNIE</div>
									<div className='lyric'>WELCOME TO THE ISLAND OF OAHU.</div>
									<div className='character'>UNCLE BILLY</div>
									<div className='lyric'>YOU CAN'T KEEP THE BAILEY BOYS DOWN.</div>
									<div className='character'>MARTINI</div>
									<div className='lyric'>YOU FILL'A YOUR BELLY, YOU FILL'A YOUR SOUL'A.
										<br/>SO MANGIA, MANGIA</div>
									<div className='direction'>The crowd surrounds George and Clarence, overtaking them.</div>
									<div className='character'>GEORGE</div>
									<div className='instruction'>(drowning in the crowd)</div>
									<div className=''>Clarence! Get me back. I don't care what happens to me. I just want my wife and kids back. Please! I want to live again!</div>
									<div className='direction'>The music stops dramatically.</div>
									<div className='direction'>Blackout.</div>
								</div>
							</div>
						</div>
}

