// ...pervert

// add audio cues(X)
// try and get arrow key menu manipulation (--)
// replace unown with orange down arrow icon (X)
// add relevant content to the menus --v
// replace writing segment with paracelsus writeup
// add a separate menu with a new function for the fiction button;

let isLoading = false; //initializations
let lvl = 1;
let outtxt = "";
let trackIsPlaying = false;
let currentId = 0;
let player = document.getElementById("mujikMusic");
let MSrc = document.getElementById("mujikSrc");
let timer;

const mujikData = {
	0: {
		track_name: "Strike the Iron",
		track_image: "tracks\\D3.png",
		track_duration: 1,
		track_path: "tracks\\D3.mp3",
	},

	1: {
		track_name: "Soul Palpitation",
		track_image: "tracks\\D4.png",
		track_duration: 1,
		track_path: "tracks\\D4-Comp.mp3",
	},

	2: {
		track_name: "Daimaou's Throne",
		track_image: "tracks\\D5.png",
		track_duration: 1,
		track_path: "tracks\\D5-Fin.mp3",
	},
	3: {
		track_name: "Narrow Minded",
		track_image: "tracks\\D6.png",
		track_duration: 1,
		track_path: "tracks\\D6.mp3",
	},
	4: {
		track_name: "Creeping Bullseye",
		track_image: "tracks\\D7.png",
		track_duration: 1,
		track_path: "tracks\\D7-Fin.mp3",
	},
	5: {
		track_name: "Final Confrontation",
		track_image: "tracks\\D8.png",
		track_duration: 1,
		track_path: "tracks\\D8-Retune.mp3",
	},
	6: {
		track_name: "Heaven's Embrace",
		track_image: "tracks\\D9.png",
		track_duration: 1,
		track_path: "tracks\\D9-Hev.mp3",
	},
};

const quotes = [
	"God is in his Heaven. All is right with the world.",
	"Be Just or Be Dead",
	"And if you do good to those who do good to you, what benefit is that to you? For even sinners do the same.",
	"Live Free or Die Trying",
	"No temptation has overtaken you that is not common to man.",
	"No temptation has overtaken you that is not common to man.",
	"As iron sharpens iron, so one person sharpens another.",
	"The wages of sin is death",
];

const index = [
	`”Which commandment is the most important of all?”`,
	`”Jesus answered, The most important is thus, Hear, O Israel: The Lord our God, the Lord is one.
						And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.”`,
	`”The second is this: “You shall love your neighbor as yourself.” There is no other commandment greater than these.”`,
	`Hi, I'm Axiom. This is a cute little page I made for my amusement.
	I believe that honesty and compromise are the most important aspects of any relationship.
	If you care, you can look on to find music I've composed, stories I've written or games I've made.`,
	`And if you're reading this, then know that I love you. Yes, YOU reading this.`,
];
const wartime = [
	`Through the efforts of a rebellious Barghest leader, they shortly after betrayed their masters and have since grown independent, 
	founding their own city-state outside the mountains. A place known in modernity as the Barghest country of Freed Newgate,`,
	`They hold nothing but disdain for their mountain-bound brethren due to their weakness and openly hate the Faery. 
	While the Newgate Barghest still hold onto some of their religious beliefs, they are primarily a warlike people, 
	as that is what they were founded on, and have learned further applications of the Gaian form asides from those clearly laid by the temple priests.`,
	`They are capable of transforming only partially, or performing an even further along transformation causing them to be quadrupedal. 
	Whether as a natural progression of their battle prowess or as a means to prevent the past from repeating, 
	the Newgate Barghest also learned the ability to transform without using magic from the Earth, 
	although this can usually only be performed by older seasoned warriors.`,
	`This effectively allows them to eat any form of magic and transform into their Gaian form, 
	provided they understand what magic they are up against. 
	This can be detrimental for any spellcaster facing a Newgate Barghest 
	as they can feed off their enchantments and maul them to death.`,
	`In Wartime, they are expectantly terrifying on the battlefield. 
	Winning a fight with a Barghest is a forgone wish, as they are powerful in their regular forms, and in their Gaian forms are simply forces of nature.`,
	`The only thing that can stop a raging Gaian is powerful magic or another Gaian. 
	As a result they were both the most important asset during the Alliance War and the people who lost the most warriors.
`,
	`They were the last race to join the Alliance of Man and least enthusiastic. 
	Specifically, the Barghest of the Mountains, the Newgate Barghest were absolutely unwilling to participate`,
	`What sealed the deal was the war-time deployment of the Black Dogs by the Unseelie, an act that enraged the Newgate Barghest so much that they found the idea of an alliance revolting.`,
	`It is rumored that the inclusion of the Mountain Barghest was an attempt at a peace offering, but the people of Newgate have made their wishes known, unless all Black Dogs are cured and released, there can never be peace between their people.
`,
	[
		`<a href="https://docs.google.com/document/d/10hhEz0GufZYGzwuYhJYQhhMVaMjjLRP-2fOpjXP7H9Q/edit?usp=sharing">
			Believe it or not.
		</a>`,
	],
];

const fiction = [
	`Pulvinar elementum integer enim neque volutpat ac tincidunt. Dolor sed viverra ipsum nunc
    aliquet
    bibendum enim. Tempus urna et pharetra pharetra massa massa ultricies mi. Donec enim diam vulputate ut. Posuere urna
    nec
    tincidunt praesent semper feugiat.`,
	`Amet justo donec enim diam vulputate ut pharetra. Sed enim ut sem viverra aliquet
    eget sit amet. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Purus gravida quis blandit turpis
    cursus in hac.`,
	`Sed viverra tellus in hac habitasse. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.
    Turpis egestas pretium aenean pharetra magna ac placerat.
`,
];
const udlul = [
	` I began to run.`,

	`I had no idea what the hell I was doing. Maybe if I hid, it wouldn’t notice me. Maybe if I could play dead long enough, it would leave.`,

	`I unsheathed the steel blade attached to my hip and held it firmly with both hands. Pushing forward against the dusty labyrinth floor.`,

	`Titania was strong. She could save herself. I need to survive, for her sake.`,

	`My feet kicked up dirt as I ran towards the hulking beast. Only as I got closer did I see the Pleroma Emblem painted on the cloak it wore. The creature swings it’s gnarled black right arm backwards and I barely manage to jump over it. Fortunately I had dropped my buckler and plate, otherwise I would have been dead that very moment.`,
	`I had always been athletic, but jumping high usually didn’t matter when it came to wielding a sword. My mother had always told me that I’d be more cut out to be a dancer than a soldier. Hell, why am I remembering all of this now.`,
	`I didn’t stop running. I sped past the beast’s lanky limbs and slid in front of Titania. My weapon was held up in front of me by my own terrified shaking hands. I must look like a joke to this thing. Titania sat on the ground keeling over and trying to stop the gash from bleeding with her bare hands.`,
	`Her eyes were clenched and she was biting her lip. Her breathing was harsh and uneven, juxtaposed by the deep, menacing gusts that filled the air whenever the beast took a haunting breath. It stood, frightfully still, ghastly crimson eyes focused purely on me.`,

	`“Shit! Shit! Shit!” I uttered in a nervous fit of panic. My entire body shook like a shivering hound.`,
	`I hadn’t felt this terrified before in my life. There was no hope of backup coming. If we all died here no one would even know for days. The former instinctual bravado quelled that very instant, and my hands weakened at the thought that I was going to die, becoming too numb to hold the blade and letting it crash to the ground. Tears barreled down my face.`,
	`“Soleil... Titania… Finnigan... I can’t believe it. After everything I’d promised.”`,

	`A warm hand grabs my shoulder. A warm familiar, oddly reassuring hand.`,

	`"You didn’t fail anyone. We’re making it back home." Titania says, her voice strangely clear. I turned, her bloodstained hands pushed against my shoulder. Using my shivering body to hold herself up. She stood, struggling to keep her balance, all the while the undead stared at us as though amused. Titania pulled out a black rock. Dark like charcoal, but too smooth, and without a moment of hesitation ate it. Swallowing it whole.`,
	`She winces,`,
	`and then catches fire.`,
	[
		`<a href="https://docs.google.com/document/d/1Mo9v1-dDOIWNLYjAHT5zp84ecpPVWa_JPDcKa5WtfEg/edit?usp=sharing">It returns to white</a>`,
	],
];

const robot = [
	`<img src="nineball-armored-core.gif" class="nineball" alt="" srcset="">
                        <ul class="statusbox row">
                            <li>STATUS: <span class="col-8" id="status"></span></li>
                            <li>WINDOW: <span class="col-8" id="window"></span></li>
                            <li>LANGUAGE: <span class="col-8" id="language"></span></li>
							<li>CURRENT TIME: <span class="col-8" id="time"></span></li>
                        </ul>`,
];

const lonk = [
	`<ul class="linkmenu row">
	<li> - <a href="https://pokedex-react-nine-rose.vercel.app/"  target="_blank">MINI POKEDEX PROJECT</a></li> <li> - <a href="https://axiom-days.itch.io/unnamed-katana"  target="_blank">TEXT-BASED SHELL RPG</a></li> <li> - <a
        href="https://docs.google.com/document/d/1Mo9v1-dDOIWNLYjAHT5zp84ecpPVWa_JPDcKa5WtfEg/edit?usp=sharing"  target="_blank"> DARK
        FANTASY EXCERPT I HOPE TO CONTINUE ONE DAY</a></li> <li> - <a href="https://backloggd.com/u/Axiom/"  target="_blank">MY BACKLOGGD</a></li> <li> - <a href="#"  target="_blank">MY GITHUB</a></li></ul>`,
];

const core = `<img src="nineball-armored-core.gif" class="nineball" alt="" srcset="">`;

const updownocean = [
	`I placed my lips along the edge of the paper cup, letting the steam wafting from it hit my face. 
	It warmed my skin and pricked the inside of my nostrils, the smell was warm and inviting.`,
	`It smelled like an old habit.`,
	`I downed the thick, brown swill and let it sting my tongue as it went down. 
	I flinched a bit, waited until the pain died down, then tried again.`,
	`It was a tad bit disappointing to say the least. Weak, watery, just mildly bitter. I drink it again slowly, letting the taste linger in my mouth for a while longer. 
	Its warmth circulates from my mouth to my throat to my abdomen, then to my joints.`,
	`A minor reprieve from the blistering cold I’d endured on the way here. I exhale and shiver, it’s a feeling I haven’t felt in a while.`,

	`“I don’t suppose you could tell me what’s in this mix, or is that classified too?” I’d asked the portly barista, half-jokingly. She laughed. A meek practiced chuckle for the sake of convenience.`,

	`She stood behind a dingy turbo cart, in a bright green apron and a cap with the TNS logo, which hadn’t changed in some 60 years. 
Behind her loomed one of their megastructure office buildings, black and featureless with one-way windows that gave it the appearance of a towering obelisk.`,
	`A dark tower that pierced the blanket of snow that draped the city, standing out in its solitude as a symbol of power. A tomb where the souls of mankind go to die.`,
	`The girl continued with an awkward smile, “We just use the standard mixture and our own patented coffee substitute, sir.” She was taking note of me warily, on account of my raggedy attire. 
I’m sure the weapon on my hip wasn’t helping matters either. It was a lonely corner, and they had her out doing merchandising all by herself.`,

	`“Coffee… substitute?”`,

	`“Yes, sir! 9 out of 10 scientists say that not only is the TNS concentrate far healthier than its competitors, it’s much better for the environment too.”`,
	`She’d said this in such a pre-programmed, automatic manner that I had to double-check if I was speaking to an auto-clerk or a holo. Coffee substitute. The idea itself was repulsive.`,

	`“Coffee used to be made with beans, you know.” The voice had come from just across the blanketed street, a distance just barely in earshot.
A man in a brown coat sat on a whitewashed bench holding a paper cup, the metal sheen of… something barely peeking through his jacket.`,
	`“They can’t even grow them in Brazil anymore. This world really has gone to shit. Every time I woke up from that upside-down ocean, 
I was met with people who were willing to watch gormlessly as their world sank slowly into the fire. You know what that’s like?”`,

	`I could only respond with a dry laugh, “A dog musing on the methods of his masters. Surely the irony isn’t lost on you.”`,

	`“We are symptoms of this sickness, not the cause of it.”. The other man took another sip from his cup and then continued,`,
	`“How’s the coffee?”`,

	`“Tastes like a wet rag mixed with cough medicine. What’s the point of a world where you can’t even get good coffee anymore?”`,

	`“Is that so?” The man said, gazing into his cup wistfully, “I suppose you were sent to retrieve me then?”`,

	`“Nothing so kind, I’m afraid.”`,

	`“Very well.” He stands, then pulls out a weapon in an instant faster than an instant, a long, thin, one-sided silver blade with a rough leather-bound handle barely cobbled together.`,
	`“Might I have this dance then, fellow hound?”`,

	[
		`<a href="https://docs.google.com/document/d/1zNpNaWwfVZ3ubwLkEczP81aXCV1vu758GjX3jojDyes/edit?usp=sharing">Overclock permitted; 4000 milliseconds. <br> Danger time estimated; 1500 milliseconds.</a>`,
	],
];

const noiria = [
	`---He scheduled a major exorcism in the afternoon and assigned I and a few other sisters as assistants. 
	I can’t particularly say I was excited to be in that room again but Mother told him that I was the most ‘level-headed’. 
	I guess I could understand, she always knew what to say to get people to do what she wanted them to. I was atleast seemingly the least shaken by these events.`,
	`I don’t take this as a point of pride mind you.

	It is normal to feel unnerved at the idea of a possessed individual under the same roof as you. 
	I could tell in these past few days that the uneasiness was palpable. 
	In the way we performed our chores in pensive silence, and in the ferventness of our evening prayers.`,

	`It was like an uncleanness lingering in our safe abode. Which, again, is why I was personally assigned to the maintenance of the room. 
	Personally, all I felt was pity for the boy. It is one thing to be in the realm of the devil, as we all are when we have lost the state of grace, 
	and quite another to be held and surrounded, literally possessed by him.`,

	`We started shortly after breakfast, which the visiting priest didn’t share with us. He stayed briefly at the groundskeeper’s house off convent grounds. 
	His countenance seems to have shifted back to normal, some meditation no doubt. 
	Upon entrance, he called to us for our assistance and we funneled into that small cramped sick room.`,

	`Now this is the most important part of this story going forward.`,

	`It was four of us in that place: The priest naturally, me, Sister Dorothy, who had been the only other to volunteer for my sake, and the county judge, who had arrived earlier that morning to quell the town’s unrest. 
	A possession, not to talk of the possession of a noble, was the sort of thing that caused unrest.`,

	`“See through circumstance or perhaps negligence, it got out to the rest of the town that there was something like this occurring under their noses, and leaving it be would lead to countless rumors.”`,
	`This was what the judge had told us atleast, and the priest allowed it so who were we to argue. However, he did seem too enthusiastic in the way he spoke. 
Such that you could tell there was some amount of personal curiosity to all this.`,

	`The priest began with general prayers, and the boy was quiet. We stood at four corners of the room and repeated after him. 
Sooner than later the boy began to react, he flinched and closed his eyes.`,

	`I could see reddening happening under his skin, around his ribs. The priest instructed me to trace the sign of the cross over it, 
then sprinkle some holy water. The reddening remained but ceased spreading. He begins to speak even louder, 
invoking the malignant spirit to speak its name or its purpose, but the boy just continued to wince.`,

	`He continued even louder then. I’d began to feel the chill again, and I turned to my sister. 
I could tell she was deeply unsettled and relied on me for composure, so I tried not to let the creeping dread I felt in the pit of my stomach get to me.
I could feel it just as well as the rest of them did. Something not of this world was rising to the surface.`,

	`The boy sat straight up, the position he would typically take when he was about to begin spewing his guts out, and then he turned, 
looking the judge straight in the eyes.`,

	`“43 steps from the family house, next to a thorny oakwood tree.”, he, or rather it said. 
I was utterly perplexed, not necessarily by the words but by the expression in the judge’s face. 
He had fallen backwards and the light had drained from his eyes. He composes himself, and hurries out without saying another word.`,

	`I gaze at Sister Dorothy in askance but she seemed utterly terrified herself. 
Not for a moment during this ordeal did the priest stop praying. 
He had begun reciting specific verses and invocations in an attempt to see which would be most effective.`,

	`The boy continued to look unaffected. He then turned his head towards me slowly and a smiled crookedly. 
I’d be lying if I said my body didn’t react immediately. 
Even though in my mind I knew I was protected by the light of my Lord, 
every survival instinct I had, was telling me to leave the room immediately.`,
	`“You will kill and ask for forgiveness.”`,
	`That was what it said to me. Those words would be etched in my heart from that very moment.`,
];

const stargirl = [
	`“Let me taste you.”`,
	`The back of the school had always been eerily quiet.
     It faced a small alleyway that was blocked from the view of prying eyes, 
     but unfortunately also populated by the sickly stench of garbage...`,
	`Stars twinkled, supporting the waxing moon, lighting an early night sky. I could see the other girl's face clearly.
     The way her skin reflected light. Her soft blond hair that reached her shoulders and vaguely smelt like lavender.
     Her wide hazel eyes that seemed to go on forever. Her adorable round face.`,
	`I felt uneasy, my feelings betrayed by a pink flush on my cheeks. My eyes locked uncomfortably with hers as our breathing sped up.
     The wall Soza pinned me against was icy cold, but the warmth of her body made me feel like nothing else mattered.
     My arms scraped against the rough stone wall and her warm deep breaths set the hair on my neck on edge.`,

	`"Soza..."`,

	`"You just seemed so tense lately." She replied,
    "What's the harm in trying a little. If you don't like it we can always stop."`,

	`Soza’s soft lips caressed the side of my face and she ran her fingers through my hair.
     She pushed even harder, leaving no space between us. The addling scent of her perfume caught me off guard.`,
	`Why was I in an alleyway with Soza of all people. And why was I... I shouldn't be here. I have a boyfriend.`,
	`The soft caress turned into a deep kiss on my neck, and all my conflicting feelings melted away in one blissful wave.
     The sweet softness of her calm breathing dissolving them into putty.`,
	`I couldn’t think of anything besides what I was feeling right now. The cold. The stench. My own conflicted morals. None of it even came to mind.
     I only cared about how her body felt against mine.`,

	`The deep kiss turned harder, sending waves of pleasure through me.
     My legs fell limp and every nerve in my body was on fire. It was wonderful. 
	 I'd slipped into the euphoria of the embrace, and Soza kept kissing harder.`,
	`Harder and harder…
     So hard that it almost began to hurt.`,
	`So hard that I was awakened from my ecstatic stupor by a sharp pain in my neck.
     One that only kept hurting. My eyes swung open and I took a quick breath.`,
	`Soza was still kissing my neck, but the spot was drawing blood. It seeped down, staining the school emblem on my jacket.`,
	`"Soza. My-"`,

	`A sharp agonizing pain pulsed from my neck throughout my body. An unbelievable pain so violent that all my muscles seized in protest.
     I tried to scream, but Soza had clasped a hand over my mouth. I couldn’t move and more crimson fluid poured down from my neck.`,
	`I screamed, over and over, but my voice was muffled by my assailant's unbreakable grip over my mouth, 
	 only growing weaker and weaker until a hoarse whisper is all that escapes.`,
	`It was then that it finally hit me.`,
	`...!`,
	[
		`Sosa was <span style="color: red; font-style: italic;">drinking<span> my blood.`,
	],

	`The murky alley-way floor beneath me seemed to twist and warp. I felt like I was going to throw up bile.
	My head throbbed with pain like it was about to burst open… And then it all just suddenly stopped.`,

	`I collapsed to the same ground I was staring at, and my body refused to move.
     A million thoughts flashed through my mind.`,
	`Whether I was dreaming.`,
	`Whether I was dying.`,
	`My assailant wiped her mouth with her wrist, and then knelt down next to me, a wide blood-smeared grin encompassing her face.
     She leaned forward, teeth bared.`,
	`"Ah. Yuzu… you’re amazing... Your taste is amazing..."`,
	`Even the weakest of cries evaded me. I was about to be fed on. About to be eaten alive.
     Turned into a meal by some unknowable creature masquerading as my friend.`,
	`Lights flashed in my eyes. My vision started to fail. Slowly, they began closing. Giving fully into unconsciousness.
     All I could see was black, and all I could hear was the sound of my own heartbeat failing.`,

	`"I can feel your warmth inside of me... "`,
	`"I've waited so long..."`,
];

const armoredcore = [
	`A Mech-based freelancer simulator. 
	simultaneously anti-capitalist yet a libertarian wet dream. 
	This game's banging aesthetic is what this webpage is trying to reproduce.
	For future reference I'm explicity referring to the PS1 trilogy/first game.`,
	`For the most part in this game, you are a goon; a lackey, a croney, a henchman, a common hired thug.`,
	`Your very first mission is to murder either the homeless or the working class at the behest of unimaginably vast megacorps. 
	Your character's motivations do not exist beyond the player's own personal lust for money.
	Every single bullet you use and armor point you lose is accounted for and paid out of your own pocket`,
	`It feels fundamentally like a truly evil world, except unlike most stories you are not a rebel or a hero. 
	You are explicitly part of the problem, or rather a symptom of it.`,
	`You are tasked to clean up messes, sabotage industry, destroy property for the sake of a protection racket.
	You have no allegiance to these bodies, you just do the jobs that are available. Fundamentally, they're all the same.`,
	`From this point on, you are a Raven.`,
];

const vinlandsaga = [
	`What does it mean to be a man?`,
	`Depending on who you ask this is almost a laughable question. You are simply born a man`,
	`For some this is predicated on strength, for others this is predicated on a capacity for violence`,
	`Fundamentally these ideas are the same`,
	`It then begs the question, what does it mean to be strong? That seems even simpler. To be strong is to destroy your enemies. 
	To be at the apex of the foodchain. Vikings who sought conquest in the name of glory were once simply children`,
	`Through assimilation, men are taught that the primary assertion of manhood is violence.`,
	`In hero stories, most of the protagonists are the strongest in that they are the best at doing violence, 
	so the story unfolds with the hero beating up the bad guys.`,
	`One after another, no matter what happens, it is impossible for the hero to escape this destiny.`,
	`But what would happen if the protagonist really wished he could escape from this fate of violence?`,
];

const etrian = [
	`I've always been a long-time fan of jrpgs, one of the first games I ever played was Final Fantasy 8,
	but sometime around the Plague I hit a sort of fatigue. The games I'd been playing felt dour and monotonous. 
	Random encounters with thoughtless meandering.`,
	`At this point I had convinced myself that I didn't enjoy turn-based combat, and that JRPGs were merely played for the expansive world.
	Then I picked up a reccomendation from an old friend, It was a dungeon crawler. I wasn't completely inexpererienced with the genre, but it wasn't per say my cup of tea.
	This game completely rewired my perspective on JRPGs.`,
	`Etrian is a turn-based first person dungeon crawler JRPG with a class system. It features beautiful locales and enchanting music and an artstyle that juxtaposes it's ridiculously dangerous world.
	What really made me fall in love, however, was really the game design. It's impressive how something as simple as an encounter meter takes the edge off random encounters`,
	`The dungeons are uniquely designed to the point where individual floors are memorable, this is also punctuated by FOEs which are roaming enemies that double as minibosses and progress hindering puzzles. You can skip them if you're strong enough, but that's unlikely unless your setup is very strong.
	These games are HARD, but you will always have the tools you need to succeed.`,
	`Strength is gained not in levels but in skills and setups. It is a game where every team member is absolutely fundamental to your survival.`,
	`Its systems are designed in a way that promotes really fun class synergy that's really hard to find in other jrpgs, 
	such as chase abilities that cause a followup attack after an ally attacks, 
	or a four-sword wielding samurai with 0 armor that needs to be babied through the game but can use skills up to 4 times concurrently.`,
	`Its gameplay loop is almost dangerously addictive. It's a game made purely for those who love JRPGs as games.`,
];

const mujikBar = [
	`<div class="mjkImage">
                            <img src="amalie-steiness.gif" id="mjkImage" alt="" srcset="">
                        </div>

                        <div class="row mjkBtnRow mt-2">
						<div class="mjkTitleDiv">
                            <marquee class="mjkTitle" behavior="scroll" direction="left">Now Playing... <span
                                    id="mjkTitle">New Magic</span> </marquee></div>
                            
                            <img class="col-3" id="playBtn"
                                src="assets\\play_circle_60dp_534948_FILL0_wght400_GRAD0_opsz48.png"
                                >
                            
                        </div>
                        <div class="row mjkMeter" id="mjkMeter">
                            <div class="mjkBar" id="mjkBar"></div>
                        </div>
	`,
];

const fictionList = [
	`

<ul class=" row fictionlist">
	<h1 class="fictionheader col-4">DOSSIER</h1>
	<div class="row">
	<span class="subjectheader col-4">SUBJECT<span>
	</div>
	<li class="col-10" onclick="changeText('abt', armoredcore)"><span>ARMORED CORE</span> <span>${armoredcore.length}</span></li>
    <li class="col-10" onclick="changeText('abt', vinlandsaga)"><span>VINLAND SAGA</span> <span>${vinlandsaga.length}</span></li>
    <li class="col-10" onclick="changeText('abt', etrian)"><span>ETRIAN ODYSSEY</span> <span>${etrian.length}</span></li>
</ul>`,
];

const writeList = [
	`

	<ul class="row fictionlist">
	<h1 class="fictionheader col-4">MAIL</h1>
	<div class="row">
	<span class=" subjectheader col-4">SUBJECT<span>
	</div>
	<li class="col-10" onclick="changeText('abt', updownocean)"><span>UPSIDE-DOWN OCEAN</span> <span>${updownocean.length}</span></li>
    <li class="col-10" onclick="changeText('abt', udlul)"><span>UNDEAD LULLABY</span> <span>${udlul.length}</span></li>
	<li class="col-10" onclick="changeText('abt', wartime)"><span>RACES OF FANTASIA</span> <span>${wartime.length}</span></li>
	<li class="col-10" onclick="changeText('abt', noiria)"><span>ODE TO BLACK MARIA</span> <span>${noiria.length}</span></li>
	<li class="col-10" onclick="changeText('abt', stargirl)"><span>STARGIRL</span> <span>${stargirl.length}</span></li>
</ul>`,
];

const mujikList = [
	`<ul class="row fictionlist">
			<h1 class="fictionheader col-8">SOUND TEST</h1>
			<div class="row">
				<span class="subjectheader col-4">SUBJECT</span>
			</div>
				<li class="col-10" onclick="mujikChangeDiv(0);"><span>${mujikData[0]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(1);"><span>${mujikData[1]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(2);"><span>${mujikData[2]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(3);"><span>${mujikData[3]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(4);"><span>${mujikData[4]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(5);"><span>${mujikData[5]["track_name"]}</span> </li>
				<li class="col-10" onclick="mujikChangeDiv(6);"><span>${mujikData[6]["track_name"]}</span> </li>
		</ul>`,
];

const nextBtn = `<div class="row justify-content-end"><img src="orange atrowl.gif" class="next-icon" id="nextId" alt=""></div>`;

const noise = document.getElementById("textnoise"); // get audio element

async function mujikPlayer(track) {
	clearInterval(timer);
	MSrc.src = track;
	console.log(`src is ` + MSrc.src);
	trackIsPlaying = true;
	player.load();
	player.play();
	let winWidth = document.getElementById("mjkMeter").offsetWidth;
	timer = setInterval(function () {
		document.getElementById("mjkBar").style.width =
			(player.currentTime / player.duration) * winWidth + "px";
	}, 100);

	document.getElementById("playBtn").addEventListener("click", function () {
		console.log("check please");
		if (trackIsPlaying) {
			if (!player.paused) {
				console.log("player paused entered?");
				player.pause();
			} else {
				console.log("player paused fr fr");
				player.play();
			}
		}
	});

	// document.getElementById("skip").addEventListener("click", function () {
	// 	console.log("skip???");
	// 	return 0;
	// });

	// stop the setInterval when song ended
	player.addEventListener("ended", function () {
		clearInterval(timer);
		trackIsPlaying = false;
		return;
	});
}

async function playTrack(id) {
	if (trackIsPlaying) {
		console.log("...");
	} else {
		document.getElementById("mjkImage").src = mujikData[id].track_image;
		document.getElementById("mjkTitle").innerText = mujikData[id].track_name;
		currentId = id;
		player.load();
		mujikPlayer(mujikData[id].track_path);
	}
}

function changeTrack(dir) {
	let length = Object.keys(mujikData).length;
	console.log(length);
	MSrc.src = "";
	trackIsPlaying = false;
	if (dir == "+") {
		playTrack(currentId + 1 <= length - 1 ? currentId + 1 : currentId);
	} else {
		playTrack(currentId - 1 >= 0 ? currentId - 1 : currentId);
	}
	console.log(`currentId: ` + currentId);
}

async function mujikChangeDiv(id) {
	await changeDiv("abt", mujikBar);
	await playTrack(id);
	// document.getElementById("prev").addEventListener("click", function () {
	// 	changeTrack("-");
	// });

	// document.getElementById("next").addEventListener("click", function () {
	// 	changeTrack("+");
	// });
}

function setStinger() {
	let qVal = Math.floor(Math.random() * quotes.length);
	document.getElementById("stinger").innerHTML = quotes[qVal];
} //picks a random quote for the banner

setStinger();

function calculateDate() {
	let Dat = new Date();
	let calcHr;
	let calcMin;
	if (Dat.getHours() < 10) {
		calcHr = `0${Dat.getHours().toString()}`;
	} else {
		calcHr = `${Dat.getHours().toString()}`;
	}
	if (Dat.getMinutes() < 10) {
		console.log(`min == ${Dat.getMinutes}`);
		calcMin = `0${Dat.getMinutes().toString()}`;
	} else {
		calcMin = `${Dat.getMinutes().toString()}`;
	}
	let calcDat = `${calcHr}${calcMin}`;
	let time = `${calcDat}/${Dat.getDate()}-${Dat.getMonth() + 1}-20XX`;
	return [time, Dat];
} // calculates date and time and returns relevant values
// so it adds an 0 beforehand ex. 0945 instead of 945

function setDetails() {
	if (document.getElementById("status")) {
		if (navigator.onLine) {
			document.getElementById("status").innerHTML = "Online";
		}
		document.getElementById(
			"window"
		).innerHTML = `${screen.width} x ${screen.height}`;
		document.getElementById("language").innerHTML = navigator.language;
		document.getElementById("time").innerHTML = calculateDate()[0];
		console.log(time);
		setTimeout(setDetails, 10000);
	}
} // sets the clientside details used in the status page

async function changeText(id, txt) {
	if (isLoading == false) {
		isLoading = true;
		lvl = 0;
		outtxt = txt;
		let box = document.getElementById(id);
		box.classList.remove("snap");
		void box.offsetWidth;
		box.classList.add("snap");
		box.innerHTML = "";
		await new Promise((r) => setTimeout(r, 1200));
		noise.play();
		for (let i in txt[0]) {
			box.innerHTML += txt[0][i];
			await new Promise((r) => setTimeout(r, 5));
		}
		if (txt.length > 1) {
			box.innerHTML += nextBtn;
		}
		isLoading = false;
		noise.pause();
		noise.currentTime = 0;
		document.getElementById("abt").addEventListener("click", nextTextBox);
	}
} // initial iterative text change and animation when selecting a tab,
// !!! NB, you can put anything you want to display by itself in an array

function nextTextBox() {
	nextText("abt", outtxt, lvl);
	lvl++;
} // function for eventListener that wraps nextText

async function nextText(id, txt, lvl) {
	if (isLoading == false) {
		lvl++;
		isLoading = true;
		let box = document.getElementById(id);
		box.innerHTML = "";
		await new Promise((r) => setTimeout(r, 120));
		noise.play();
		for (let i in txt[lvl]) {
			box.innerHTML += txt[lvl][i];
			await new Promise((r) => setTimeout(r, 5));
		}
		console.log(`${txt.length} == ${lvl}`);
		if (txt.length - 1 == lvl) {
			document.getElementById("abt").removeEventListener("click", nextTextBox);
		} else {
			box.innerHTML += nextBtn;
		}
		isLoading = false;
		noise.pause();
		noise.currentTime = 0;
		console.log(`len - ${txt.length} is greater than lvl - ${lvl}`);
	}
} // fucntion that iterates across each item in the text array

async function changeDiv(id, txt) {
	if (isLoading == false) {
		player.pause();
		trackIsPlaying = false;
		isLoading = true;
		document.getElementById("abt").removeEventListener("click", nextTextBox);
		let box = document.getElementById(id);
		box.classList.remove("snap");
		void box.offsetWidth;
		box.classList.add("snap");
		box.innerHTML = "";
		await new Promise((r) => setTimeout(r, 1200));
		box.innerHTML = txt;
		setDetails();
		isLoading = false;
	} // flat text change with no iteration
}
