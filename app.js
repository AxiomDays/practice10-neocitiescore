// add audio cues(X)
// try and get arrow key menu manipulation (--)
// replace unown with orange down arrow icon (X)
// add relevant content to the menus --v
// replace writing segment with paracelsus writeup
// add a separate menu with a new function for the fiction button;

const quotes = [
	"God is in his Heaven. All is right with the world.",
	"Be Just or Be Dead",
	"And if you do good to those who do good to you, what benefit is that to you? For even sinners do the same.",
	"Live Free or Die Trying",
	"No temptation has overtaken you that is not common to man.",
	"As iron sharpens iron, so one person sharpens another.",
];

const index = [
	`”Which commandment is the most important of all?”`,
	`”Jesus answered, The most important is thus, Hear, O Israel: The Lord our God, the Lord is one.
						And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.”`,
	`”The second is this: “You shall love your neighbor as yourself.” There is no other commandment greater than these.”`,
	`Hi, I'm Axiom. This is a cute little page I made for my amusement.
	I believe that honesty and compromise are the most important aspects of any relationship.
	If you care, you can look on to find stories I've written or games I've made.`,
	`And if you're reading this, then know that I love you. Yes, YOU reading this.`,
];
const about = [
	`In Wartime, they are expectantly terrifying on the battlefield. Winning a solo fight with a Barghest is a forgone wish, as they are powerful in their regular forms, and in their Gaian forms are simply forces of nature.`,
	`	The only thing that can stop a raging Gaian is powerful magic or another Gaian. As a result they were both the most important asset during the Alliance War but simultaneously the people who lost the most warriors.
`,
	`What sealed the deal was the war-time release of the Black Dogs by the Unseelie, an act that enraged the Newgate Barghest so much that they found the idea of an alliance revolting.`,
	`It is rumored that the inclusion of the Mountain Barghest was an attempt at a peace offering, but the people of Newgate have made their wishes known, unless all Black Dogs are cured and released, there can never be peace between their people.
`,
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
const writing = [
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
];
const robot = [
	`<img src="nineball-armored-core.gif" class="nineball" alt="" srcset="">
                        <ul class="statusbox row">
                            <li>Status: <span class="col-8" id="status"></span></li>
                            <li>Window: <span class="col-8" id="window"></span></li>
                            <li>Language: <span class="col-8" id="language"></span></li>
							<li>Current Time: <span class="col-8" id="time"></span></li>
                        </ul>`,
];

const lonk = [
	`<ul class="linkmenu row">
	<li> - <a href="https://pokedex-react-nine-rose.vercel.app/"  target="_blank">MINI POKEDEX PROJECT</a></li> <li> - <a href="https://axiom-days.itch.io/unnamed-katana"  target="_blank">TEXT-BASED SHELL RPG</a></li> <li> - <a
        href="https://docs.google.com/document/d/1Mo9v1-dDOIWNLYjAHT5zp84ecpPVWa_JPDcKa5WtfEg/edit?usp=sharing"  target="_blank"> DARK
        FANTASY EXCERPT I HOPE TO CONTINUE ONE DAY</a></li> <li> - <a href="https://backloggd.com/u/Axiom/"  target="_blank">MY BACKLOGGD</a></li> <li> - <a href="https://github.com/AxiomDays"  target="_blank">MY GITHUB</a></li></ul>`,
];

const core = `<img src="nineball-armored-core.gif" class="nineball" alt="" srcset="">`;

const armoredcore = [
	[`<img src="nineball-armored-core.gif" class="nineball" alt="" srcset="">`],
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
	To be at the very apex of the foodchain. Vikings who sought conquest in the name of glory were once children who thought `,
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

const fictionList = [
	`

	<ul class=" row fictionlist">
	<h1 class="fictionheader col-4">DOSSIER</h1>
	<div class="row">
	<span class=" subjectheader col-4">SUBJECT<span>
	</div>
	<li class="col-10" onclick="changeText('abt', armoredcore)"><span>ARMORED CORE</span> <span>${armoredcore.length}</span></li>
    <li class="col-10" onclick="changeText('abt', about)"><span>MISTBORN SAGA</span> <span>${about.length}</span></li>
    <li class="col-10">BLOODBORNE</li>
    <li class="col-10">THE WORLD ENDS WITH YOU</li>
    <li class="col-10">VINLAND SAGA</li>
    <li class="col-10" onclick="changeText('abt', etrian)"><span>ETRIAN ODYSSEY</span> <span>${etrian.length}</span></li>
</ul>`,
];

const nextBtn = `<div class="row justify-content-end"><img src="orange atrowl.gif" class="next-icon" id="nextId" alt=""></div>`;

const noise = document.getElementById("textnoise"); // get audio element

let isLoading = false; //initializations
let lvl = 1;
let outtxt = "";

function setStinger() {
	let qVal = Math.floor(Math.random() * quotes.length);
	document.getElementById("stinger").innerHTML = quotes[qVal];
} //picks a random quote for the banner

setStinger();

function calculateDate() {
	let Dat = new Date();
	let calcDat = Dat.getHours().toString() + Dat.getMinutes().toString();
	let time = `${calcDat} : ${Dat.getDate()}-${
		Dat.getMonth() + 1
	}-${Dat.getFullYear()}`;
	let Otime = `0${calcDat} : ${Dat.getDate()}-${
		Dat.getMonth() + 1
	}-${Dat.getFullYear()}`;
	return [time, Otime, Dat];
} // calculates date and time and returns relevant values, Otime is when the hour is less than 10,
// so it adds an 0 before hand ex. 0945 instead of 945

function setDetails() {
	if (document.getElementById("status")) {
		if (navigator.onLine) {
			document.getElementById("status").innerHTML = "Online";
		}
		document.getElementById(
			"window"
		).innerHTML = `${screen.width} x ${screen.height}`;
		document.getElementById("language").innerHTML = navigator.language;
		if (calculateDate()[2].getHours() > 9) {
			document.getElementById("time").innerHTML = calculateDate()[0];
		} else {
			document.getElementById("time").innerHTML = calculateDate()[1];
		}
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
