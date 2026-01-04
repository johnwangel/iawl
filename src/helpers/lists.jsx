const captimes = 'The Cap Times',
	  bworld='Broadway World',
	  madmag='Madison Magazine',
	  tbway= "Talkin' Browadway"

const getPhoto = (id) => PHOTOS.find(p=>p.id==id).file.split('.')[0] 

export const PHOTOS = [
	{ id: 43, file:  "A1S01-Opening Prayers - concert.jpg", caption: "Prayers" },
	{ id: 19, file:  "A1S1 You Are Now in Bedford Falls- Clarence.jpg", caption: "Clarence in Beford Falls" },
	{ id: 11, file:  "A1S1 Pulling Harry out of ice.jpg", caption: "Pulling Harry from the Ice" },
	{ id: 9, file:  "A1S02 Mary Violet -  concert.jpg", caption: "Mary & Violet" },
	{ id: 30, file:  "A1S1 Mary Violet - full prod.jpg", caption: "Mary & Violet" },
	{ id: 24, file:  "A1S1 Bedford Falls.jpg", caption: "Bedford Falls" },
	{ id: 23, file:  "thinkbig2.jpg", caption: "Think Big" },
	{ id: 28, file:  "A2S3 Charleston.jpg", caption: "Doing the Charleston" },
	{ id: 42, file:  "A1S02 - Peter Billy - concert.jpg", caption: "Peter & Billy Bailey" },
	{ id: 37, file:  "A1S4 Old House.jpg", caption: "This Old House" },
	{ id: 8, file:  "A1S03 Potter Trouble.jpg", caption: "Trouble" },
	{ id: 29, file:  "openeyes3.jpg", caption: "George & Mary" },
	{ id: 34, file:  "A1S09 George Mary Open Eyes full show.jpg", caption: "Open Your Eyes" },
	{ id: 7, file:  "A1S9 George Mary Open Eyes.jpg", caption: "The Big Kiss" },
	{ id: 41, file:  "A1S06 Last Dollars Cast.jpg", caption: "Our Last Dollars Are Here" },
	{ id: 40, file:  "A1S06 Last Dollars Billy.jpg", caption: "Our Last Dollars!" },
	{ id: 35, file:  "A1S07 Oahu Bert Ernie.jpg", caption: "Bert & Ernie" },
	{ id: 36, file:  "oahu.jpg", caption: "Oahu Wahoo" },
	{ id: 26, file:  "mangia2.jpg", caption: "Martini's Ristorante" },
	{ id: 14, file:  "A1S08 Martini Mangia - full show.jpg", caption: "Mangia!" },
	{ id: 12, file:  "trouble.jpg", caption: "Henry F. Potter" },
	{ id: 10, file:  "A1S11 Hired Potter George.jpg", caption: "You're Hired!" },
	{ id: 13, file:  "baileyboysb.jpg", caption: "What a Pilot!" },
	{ id: 31, file:  "A2S2 Bailey Boys.jpg", caption: "You Can't Keep the Bailey Boys Down" },
	{ id: 2, file:  "A2S3 Zuzu Rose.jpg", caption: "Your White Knight" },
	{ id: 3, file:  "A2S4 Angel Wings Clarence.jpg", caption: "Clarence" },
	{ id: 22, file:  "A2S5 Angel Gets His Wings- Final Pose.jpg", caption: "An Angel Gets His Wings" },
	{ id: 4, file:  "A2S8 Pottersville Violet.jpg", caption: "Sultry Violet" },
	{ id: 5, file:  "A2S8Pottersville Sign.jpg", caption: "Pottersville" },
	{ id: 45, file:  "A2S9End of Pottersville.jpg", caption: "George in Pottersville" },
	{ id: 6, file:  "A2S11 Christmas Day Cast.jpg", caption: "Christmas Day" },
	{ id: 38, file:  "A2S11 Christmad Day George Holding Zuzu.jpg", caption: "Bedford Falls to the Rescue" },
	{ id: 16, file:  "A2S9 Christmas Day Family.jpg", caption: "Bailey Family" },
	{ id: 1, file:  "A2S11 Angel get wings zuzu.jpg", caption: "Listen Daddy!" },
	{ id: 33, file:  "A2S11Clarence Wings.jpg", caption: "Clarence Gets His Wings" },
	{ id: 39, file:  "A2S11 Full Cast Bows.jpg", caption: "Final Bows" },
	{ id: 50, file:  "evan.jpg", caption: "The Orchestra" },
]

export const SONGS = [
		{ id: 1, include: true, name: 'Overture', file: 'overture', img: getPhoto(50), desc: 'Overture' },
		{ id: 2, include: false, name: 'Bedford Falls', file: 'bedfordfalls', img: getPhoto(24), desc: 'Bedford Falls' },
		{ id: 3, include: true, name: 'Think Big', file:  'thinkbig', img: 'thinkbig2', desc: 'George, Mary, and Violet' },
		{ id: 4, include: false, name: 'Shabby', file: 'shabby', img: getPhoto(42), desc: '' },
		{ id: 5, include: true, name: 'Doing the Charleston', file: 'charleston', img: getPhoto(28), desc: '' },
		{ id: 6, include: false, name: 'This Old House', file: 'oldhouse', img: getPhoto(37), desc: '' },
		{ id: 7, include: false, name: 'Trouble', file: 'trouble', img: getPhoto(8), desc: '' },
		{ id: 8, include: true, name: 'Open Your Eyes', file: 'openeyes', img: getPhoto(7), desc: '' },
		{ id: 9, include: false, name: 'Our Last Dollars', file: 'lastdollars', img: getPhoto(41), desc: '' },
		{ id: 10, include: false, name: 'Oahu Wahoo', file: 'oahu', img: getPhoto(36), desc: '' },
		{ id: 11, include: true, name: 'E Mangia', file: 'mangia', img: getPhoto(26), desc: '' },
		{ id: 12, include: false, name: "You're Hired", file: 'yourehired', img: getPhoto(10), desc: '' },
		{ id: 13, include: false, name: "Entr'acte", file: 'entracte', img: getPhoto(39), desc: '' },
		{ id: 14, include: true, name: "You Can't Keep the Bailey Boys Down", file:  'baileyboys', img: getPhoto(13), desc: 'Bert, Ernie, Bank Tellers' },
		{ id: 15, include: true, name: 'Your White Knight', file:  'whiteknight', img: getPhoto(2), desc: 'George and Zuzu' },
		{ id: 16, include: true, name: 'An Angel Gets His Wings', file:  'wings', img: getPhoto(3), desc: 'Clarence' },
		{ id: 17, include: false, name: 'Pottersville', file:  'pottersville', img: getPhoto(5), desc: 'Ensemble' },
		{ id: 18, include: true, name: 'Christmas Day', file: 'christmasday', img: getPhoto(16), desc: 'Ensemble' },
	]


export const DIFFERENT = [
		{ head: 'Perspective', desc: 'We have taken care not to deviate too much from the beloved story. Still, we have developed some of the core elements in ways that we hope will enrich and deepen the experience in ways that resonate with today’s world.' },
		{ head: 'Mary', desc: 'We felt it was important to portray Mary a bit differently. Mary is certainly a strong character in the original film, but in many ways she was never given her due in how she helped George to see himself and be himself. We tried to give Mary a stronger direction as more than just the supportive wife—she is George’s champion.' },
		{ head: 'Bert and Ernie', desc: 'The original film skewed heavily male, from George, Harry, Peter and Billy Bailey, to George’s pals, Bert, Ernie, and Sam. Our decision to cast Bert and Ernie as female was initially a pragmatic concern to balance out the ensemble vocally. However, it also added a new dimension to the story that brings a more modern face to George’s circle of friends. His acceptance of these two women as part of the gang reflects the evolution of gendered relationships over that past half century. Our decision to include a hint of queerness to these characters reflects inclusion and acceptance of individuals without regard to sexuality.' },
		{ head: 'Martini', desc: ' We were always attracted to the smaller role of Martini, the Italian immigrant who George helps to realize the American dream by moving his family into their own home in Bailey Park. We decided to expand that role, to acknowledge the changing character of the American experience towards acceptance of a diverse array of cultures and perspectives.' },
		{ head: 'Peter Bailey', desc: 'In the film, Peter Bailey disappears after the first half hour. We wanted to make him more of a presence. Like a Dickens spirit, Peter returns as a reminder of the life George at first rebels against, but ultimately of the man he is destined to be.' },
		{ head: 'Diversity', desc: 'And finally, we always felt very strongly that the casting of our show should be completely color blind. The original film came out of an era when cultures and races rarely mixed, and castes were rampant. That is not the reality we would like to reflect in our version. For that reason, we encourage theater companies to embrace a diverse cast that reflects who we are today, not who we were in 1946.' },
	]

export const FAMILIAR = [
		{ head: 'Henry F. Potter', desc: 'On a lighter note, I think we have all been a bit disappointed that Potter doesn&rsquo;t in some way get his come-uppance. So we hope to have remedied that to some degree. ' },
		{ head: 'Clarence', desc: 'And we have been overjoyed at the audience reaction when we actually see Clarence get his wings. The audience is left with a high for the joyous holiday season.' },
		{ head: 'Celebration of Life', desc: '<i>It’s a Wonderful Life</i> has always taken a dark turn—in line with the <i>A Christmas Carol</i>, the tale that arguably invented the Christmas we know and love today. We have the ghosts, the despair. But more than anything else, we wanted to show the joys of life—the many celebrations of family and friends—that give meaning to our day-to-day existence. The high school graduation, where the kids dance the &ldquo;Charleston&rdquo;. The opening of Martini&rsquo;s restaurant, where community is embraced. Harry&rsquo;s homecoming as a war hero, in a rousing Andrews Sisters&ndash;like anthem.  And the Christmas finale that introduces what we hope to be a new Christmas carol standard that celebrates the essence of the Christmas spirit.' },
		{ head: 'Pottersville', desc: 'We have re-imagined the entire Pottersville sequence, in which George slowly descends into the darkness of the new reality of his non-existence. The audience experiences the despair in a viscerally through music&mdash;the very core of musical theatre.' },
	]

export const QUOTES = [
	{ "id": 1, "type": "headline", "quote": "Capital City gives <i>It’s A Wonderful Life</i> a promising premiere", "source": captimes },
	{ "id": 2, "quote": ". . . With a jazzy score and selective adherence to Frank Capra’s familiar story, <i>Wonderful Life</i> has promise.", "source": captimes},
	{ "id": 3, "quote": ". . . the musical finds its stride in ‘Think Big,’ a showy number for George, easygoing Violet (Jessica Minter, a showstopper) and Mary not-yet-Bailey (Sarah Ellis).", "source": captimes},
	{ "id": 4, "quote": "Numbers like ‘Think Big’ are where <i>It’s A Wonderful Life</i> sparkles . . . ‘Doing the Charleston,’ the iconic gym dance, and the Andrews Sisters–style ‘Can’t Keep the Bailey Boys Down’ have similar verve.", "source": captimes},
	{ "id": 5, "quote": "<i>It’s A Wonderful Life</i> looks like a smart deposit at the Bailey bank, like an old house with good bones. It will be fun to see how it evolves. . . . Here’s to a new Christmas classic, with more tap, more romance.", "source": captimes },
	{ "id": 6, "type": "headline", "quote": "IT'S A WONDERFUL LIFE Strikes Gold in Magical World Premiere at Capital City Theatre", "source": bworld },
	{ "id": 7, "quote": "Capital City Theatre's world premiere of <i>It's a Wonderful Life: A New Musical</i> proves that some stories deserve a second life.", "source": bworld },
	{ "id": 8, "quote": "This adaptation, featuring music by Andrew Abrams and book and lyrics by John Atkins, doesn’t merely transpose Frank Capra’s beloved film to the stage—it reimagines it with a theatrical flourish all its own.", "source":bworld},
	{ "id": 9, "quote": "Atkins’ book and lyrics mine comedy gold from small-town life without resorting to caricature. His clever and witty lyrics express an array of emotions that raise the narrative.", "source": bworld},
	{ "id": 10, "quote": "Abrams’ score is a revelation, moving effortlessly between big band swagger, jazz sophistication, poppy musical theatre numbers and moments of tender introspection.", "source": bworld},
	{ "id": 11, "quote": "The production’s most pleasant surprise is how it handles its supporting characters. Abrams and Atkins have given each a moment to shine.", "source": bworld},
	{ "id": 12, "quote": "The production shines in its thoughtful contemporary updates, most notably with the gender-swapped roles of Bert and Ernie. These traditionally male characters, now portrayed by women, bring a new perspective to Bedford Falls’ community fabric while maintaining the humor of the original roles.", "source": bworld},
	{ "id": 13, "quote": "The production concludes with a moving and catchy holiday tune (‘Christmas Day’) worthy of its own sound track . . .  a perfect capper to an evening that honors its source material while confidently establishing its own identity.", "source": bworld},
	{ "id": 14, "quote": "This world premiere production demonstrates that <i>It's a Wonderful Life, a new musical</i>, with its sophisticated score, emotional depth, and uniformly strong performances, deserves to become a holiday perennial.", "source": bworld},
	{ "id": 15, "quote": "More than just a seasonal treat, it’s a reminder of musical theater’s unique ability to make the familiar feel fresh and the old feel new again.", "source": bworld},
	{ "id": 16, "quote": " . . . the show sticks the landing. When George finally realizes what he means to his family and the rest of Bedford Falls, it packs the same emotional wallop as the original film.", "source": madmag},
	{ "id": 17, "quote": "The quality of writing (music by Andrew Abrams, book and lyrics by John Atkins) makes this show a candidate to be dragged out of the closet every year.", "source": tbway},
]

export const CREATIVES = [
	   { "head": "Andrew Abrams", role: "Composer", desc: "Andrew has worked Off-Broadway, Off West End, regionally and on tour as a professional director, musical director, conductor, composer and Equity actor. Andrew holds a Bachelor of Music degree from UW-Madison and a Master of Arts, in Musical Theatre Writing from University of London-Goldsmiths. He is also a graduate of the advanced year of the BMI Musical Theatre Writing Workshop in New York City where he wrote the music for But I’m a Cheerleader, the Musical, which won the 2022 WhatsOnStage Award for “Best Off-West End Musical” for its run at the Turbine Theatre in London. He also wrote the music for Shining in Misery: a King Size Parody which premiered at Capital City Theatre (Madison, WI) in 2023, as part of the inaugural World Premiere Wisconsin festival, and a subsequent performance at 54 Below in May of 2024. Shining in Misery will also be playing at MT Fest UK in London in January of 2026.  Andrew is a founder and Artistic Director of Capital City Theatre in Madison, WI. He also works as a vocal coach, voice teacher, and Acting through Song coach in New York City and London. Agent: Bronia Buchanan, BBA Management. https://bba.management/" },
	   { "head": "John Atkins", role: "Book & Lyrics", desc: "Originally hailing from Louisiana, John now lives in New York where he has transformed into a proud New Yorker. He has enjoyed collaborations with Andrew Abrams since they first paired up in the BMI Lehman Engel Musical Theater Workshop in 2001. With composer William Wade, John wrote book and lyrics for the musical Warsaw, which toured universities across the country as part of Holocaust remembrance outreach. It’s a Wonderful Life, a New Musical has been a labor of love, to deliver some hope for those striving to care for their fellow neighbors in a world that is increasingly self-serving." },
	   { "head": "Evan Lange ", role: "Orchestrator", desc: "Evan is a music director, composer, orchestrator and pianist in Madison, WI. Recent MD credits include Shining In Misery: a King Size Parody (also Orchestrator, World Premiere), Natasha, Pierre & The Great Comet of 1812 (Regional Premiere), The World Goes ‘Round, Edges, The Englishman Who Went Up a Hill..., Carrie, and On The Town (Asst MD). Evan is also regularly involved with Capital City Theatre Conservatory’s educational programs and classes, as well as collaborating with the choral music programs at various local high schools." },
	]

export const CAST = [
		{ name: 'Eddie Egan', role: 'George Bailey'  },
		{ name: 'Sarah Ellis', role: 'Mary Bailey'  },
		{ role: 'Clarence', name: 'Jason Williams'  },
		{ role: 'Uncle Billy', name: 'Donavan Ambruster | Michael Joseph Mitchell *'  },
		{ name: 'Tom Hensen', role: 'Mr. Potter'  },
		{ role: 'Violet ', name: 'Jessica Minter | Kailey Boyle *'  },
		{ role: 'Ernie ', name: 'Tess Lenzen'  },
		{ role: 'Bert ', name: 'Jen Farley'  },
		{ role: 'Martini ', name: 'Robert A. Goderich'  },
	]

export const CHARACTERS = [
	{ "head": "George Bailey", "desc": "The hapless hero, George’s big dreams are in conflict with his big heart." },
	{ "head": "Mary Hatch Bailey", "desc": "Ever the realist, Mary has always loved and understood George, and has made it her mission to help him to understand who he truly is." },
	{ "head": "Clarence", "desc": "A credulous angel whose naivety has as yet hindered his pathway to earning his heavenly wings. " },
	{ "head": "Henry Potter", "desc": "The town miser. In contrast to George, Potter is outwardly successful, but relationships are transactional and fleeting, leaving him very wealthy—and very alone." },
	{ "head": "Peter Bailey / Joseph", "desc": "Should be portrayed by the same actor. Both paternal figures are instrumental in mentoring their wards to becoming their true selves." },
	{ "head": "Uncle Billy Bailey", "desc": "A bit scatterbrained, but nevertheless a loving and lovable fixture in the Bailey family and in Bedford Falls." },
	{ "head": "Harry Bailey", "desc": "The little brother who unwittingly usurps George’s dreams." },
	{ "head": "Bert", "desc": "The stalwart friend who is always at George’s side for support." },
	{ "head": "Ernie", "desc": "Bert and Ernie develop their own unbreakable bond, while remaining unfailing lifelong friends to George and the gang." },
	{ "head": "Violet Bick", "desc": "The town beauty, Violet always had a bit of a crush on George, but they are bonded by a romantic outlook on life." },
	{ "head": "Sam Wainwright", "desc": "A good friend and foil to George, Sam seems to achieve everything George thought he wanted." },
	{ "head": "Martini", "desc": "An Italian immigrant, Martini works hard to scratch out his version of success—with George’s friendship and assistance." },
	{ "head": "Ensemble", "desc": "An additional cast of at least 3 men, 3 women, and 2 children portray a number of miscellaneous roles: the bank examiner, the sheriff, Mary’s mother Mrs. Hatch, Harry’s fiancée Ruth, Nick the bartender, the Bailey children (Pete, Janey, and Zuzu), bank customers, townsfolk, etc. " },
]

