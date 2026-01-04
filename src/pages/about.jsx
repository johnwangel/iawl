import { Outlet, NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';

import { DIFFERENT, FAMILIAR, QUOTES, CHARACTERS, isItActive } from '../helpers/lists.jsx'
import { Quote } from './media.jsx'
import { ListItem } from './lists.jsx'
import { PhotoInline } from './photos.jsx'

export function About(props){
	return <>
			<nav className='button-container sub'>
				<NavLink key={Math.random()} to='/main/about/note' className='button'>Note</NavLink>
				<NavLink key={Math.random()} to='/main/about/concept' className='button'>Concept</NavLink>
				<NavLink key={Math.random()} to='/main/about/story' className='button'>Story</NavLink>
				<NavLink key={Math.random()} to='/main/about/script' className='button'>Script</NavLink>
				<NavLink key={Math.random()} to='/main/about/cast' className='button'>Cast</NavLink>
			</nav>
			<Outlet />
			</>
}

export function Note(props){
		return	<div className='op-container note'>
						<div className='op-text-body'>
							<div className='header1'>Author&rsquo;s Note</div>
							<div className='header2'>John Atkins</div>
							<div className='body'>
								<div className='column'>

									<PhotoInline id='23' />

									<p>A friend of mine once theorized that there are two kinds of people in this world—those who prefer <i>Miracle on 34th Street</i>, and those who prefer <i>It's a Wonderful Life</i>. I believe there is room for both, but I am firmly in the camp of the latter. </p>

									<Quote key={Math.random()} item={QUOTES.find(i=>i.id==8)} id={0} />

									<p>I first discovered <i>It's a Wonderful Life</i> in my teens. It was in the days when the film was shown continuously on all the cable networks, so after I had watched it once through, I flipped to another station and watched it again, and then I watched it again. The triumphant joy of that final scene is what ultimately drew me in. George Bailey hasn&rsquo;t overcome his difficulties—he's still in hot water over the supposed mishandling of funds—but even before the town comes to his rescue, he has realized that despite his tribulations, his life&rsquo;s value is in all the loving relationships that have gone into the creation of his own identity—he is not alone. This a story that has stuck with me over the years like very few others. In some ways, I think we all feel like George Bailey at some point, and his epiphany at the end of the film is an inspiration for those darker times.</p>

									<Quote key={Math.random()} item={QUOTES.find(i=>i.id==15)} id={1} />

									<p>In the course of developing this piece, I believe Andy and I have managed to find a way to make the story a reflection of our own worldview, while maintaining the heart of the story we all love. We have unapologetically presented the world as we would like to see it. Not without its flaws and adversity, but with the ability to transcend by embracing people for who they are and their own intrinsic value. At the same time, we have tried to include all the iconic characters and moments we’ve come to love, compressed into a 2&#189;-hour musical journey that will take you through the gamut of human emotions. And you are sure to come to the inevitable conclusion: it really is a Wonderful Life.</p>
								</div>
							</div>
						</div>
					</div>
}

export function Concept(props){
	return <div className='op-container'>
						<div className='op-text-body'>
							<div className='header1'>The Concept</div>
							<div className='body'>
								<div className='column'>
									<p>We wanted to maintain the original time and place. But at the same time, we also wanted to reflect who we are today. That wasn't so hard to do, because this story was always ahead of its time in some ways. Frank Capra, the original scriptwriter, always envisioned American society in terms of what it could and should be, rather than strictly what it is. In film after film, such as <i>Mr. Smith Goes to Washington</i> and <i>Meet John Doe</i>, he portrayed an America that tended toward greed and corruption, and gave us a common-man hero who combats villainy through integrity and individualism. That was perhaps not exactly how Americans tended to see themselves coming out of the Great Depression, but it’s a theme that certainly carried through into the turbulent &rsquo;60s, when our nation began to see the value in the diversity of people and ideas&mdash;a message that was always there in the film, bubbling under the surface.</p>
									
									<Quote key={Math.random()} item={QUOTES.find(i=>i.id==14)} id={1} />
									
									<p>In our adaptation, the themes of family bonds and faithful friends remain front and center. The core of this story will always be the importance of building relationships out of love and respect—the Golden Rule, if you will. And out of these themes we take a journey through the Odyssey of George’s tribulations and triumphs to ultimately experience that potent catharsis that brings us back to this story year after year. </p>
							</div>
						</div>
						</div>
						<Different />
						<Familiar />
					</div>
}

function Different(props){
	return <div className='op-container note'>
						<div className='op-text-body'>
							<div className='header1'>What&rsquo;s Different</div>
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
						<div className='header1'>What&rsquo;s Familiar</div>
						<div className='body'>
								<div className='column'>
									{ FAMILIAR.map(p=><ListItem key={Math.random()} item={p} />  )}
								</div>
							</div>
					</div>
	</div>
}

export function Story(props){
	return <div className='op-container note'>
						<div className='op-text-body'>
							<div className='header1'>Act One</div>
							<div className='body'>
								<div className='column'>
									<p>The story begins with prayers <span className="song">(Opening Prayers)</span> from George’s friends and family. We first see George in a desperate state and a prayer of his own—for guidance. In a flashback, we see George save his brother Harry when he falls through the ice—and the hint of a parallel event occurring in the present. Watching over this is Clarence, an angel without wings, who is instructed by the big guy, Joseph, to look after George. Clarence is dropped into the idyllic community of Bedford Falls <span className="song">(Bedford Falls)</span>, where its citizens extoll their small-town way of life, or at least the way they believe it “ought to be.” We see Potter breathing down the neck of the Baileys. We meet George and his gang, who recall that day Harry fell through the ice. And Martini, a recent Italian immigrant, arrives in town to a heart-felt welcome. A young George tries to impress Mary and Violet with his big dreams of traveling the world and becoming a hot-shot architect <span className="song">(Think Big)</span>.</p>
									<p>Before George’s graduation, his father Peter presents him with a steamer trunk, but can’t help regretting that George is abandoning the family business, the Bailey Building & Loan. Peter tries to help George understand that it’s more than just a shabby old office <span className="song">(Shabby)</span>. At the graduation dance, George and Mary first see each other through mature eyes. The kids sing a song of subtle rebellion <span className="song">(Doing the Charleston)</span>—after all, this is the first generation that began pushing the boundaries of their parents’ mores, a tradition that has continued ever since. As George and Mary dance together, a jealous Sam and Violet conspire to douse them in the pool beneath the gym floor. Strolling home together in dry rags, George and Mary disagree over the value of the decrepit old Granville house <span className="song">(This Old House)</span>, but a mutual attraction helps them to overcome their differences. </p>
									<p>After Peter passes away, Potter makes a play to shutter the Building & Loan. George is determined to preserve his father’s legacy, making that clear to Potter in no uncertain terms. Potter foresees that George could cause him trouble <span className="song">(Trouble)</span>.</p>
									<p> Harry returns from college with the news that he is marrying and perhaps moving away. Uncle In his own rambling fashion, Billy tries to alleviate the situation, ultimately helping the brothers understand that sometimes love comes first <span className="song">(I Forget)</span>. George visits Mary but finds Sam competing for her affection. George is ready to concede, but Mary urges him to open his eyes to how they have always felt about one another <span className="song">(Open Your Eyes)</span>, leading to their wedding. As George and Mary depart for their honeymoon, they discover a bank run at the Building & Loan <span className="song">(Our Last Dollars)</span>. They quell the crisis by sacrificing their honeymoon kitty to keep the bank open. After a crushing day at the Building & Loan, George receives an invitation to the Granville house, where he is serenaded by Bert and Ernie <span className="song">(Oahu Wahoo)</span> to set the scene for the exotic setup Mary has devised to help disguise the shambling old house—which somehow now feels like a castle <span className="song">(This Old House—Reprise)</span>.</p>
									<p>At the grand opening of his new Italian restaurant, Martini makes George and Mary his guest of honor for their help in making his dream come true. The whole community celebrates in a rousing operatic tarantella <span className="song">(E Mangia)</span>. Potter offers George the world, in exchange for dismantling the Building & Loan. George is nearly seduced <span className="song">(You’re Hired)</span>. After giving up what is probably his last chance at fulfilling his big dreams, George sinks into despondence. He sees in himself the reflection of his father <span className="song">(Act 1 Finale)</span>.</p>								
								</div>
							</div>
							<div className='header1'>Act Two</div>
							<div className='body'>
								<div className='column'>
									<p>In anticipation of Harry’s triumphant return as a wartime hero, Uncle Billy taunts Potter with the Bailey resilience, assisted by four women and a Big Band anthem <span className="song">(You Can’t Keep the Bailey Boys Down)</span>. In the excitement, Billy loses his $8,000 bank deposit. After learning of the missing deposit, George returns home. In his state, the daily routines are niggling reminders of his failures. But when he looks in on his ailing daughter Zuzu, he is reminded of the family bonds that have kept him going <span className="song">(Your White Knight)</span>. After another series of setbacks from Potter and then the enraged husband of Zuzu’s teacher, George contemplates drowning himself in the frozen lake. Clarence intervenes by jumping in himself so that George would save him. He introduces himself as a guardian angel, to a skeptical George <span className="song">(“An Angel Gets His Wings”)</span>.</p>
									<p>In a last-ditch effort to convince George of his own worth, Clarence arranges to show a world in which George was never born <span className="song">(Pottersville)</span>. Slowly George begins to realize the disastrous impact his absence has had on all of his friends and family. The ghosts of his past bombard him with reminders of what was lost, until he is drowned in the void of his non-existence.</p>
									<p>Begging for another chance, George finds himself back home, with Potter the sheriff at his doorstep. Reborn and unfazed, George rushes to embrace his children. Mary returns, accompanied by the entire community, there to help George out. Thwarted, Potter storms away, as friends and family sing of the transformative power of the Christmas spirit <span className="song">(Christmas Day)</span>. A newly fledged Clarence appears, watching over them. </p>
								</div>
							</div>
						</div>
				</div>
}

export function Cast(props){
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