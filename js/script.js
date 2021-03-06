/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"dancing":"dancing.png",
	"nun": "nun.jpg",
	"piano": "piano.jpeg",
	"swing": "swing.png",
	"city":"city.jpg",
	"hills":"hills.jpg",
	"stairs":"stairs.jpeg",
	"wheatfield":"wheatfield.png",
	"sidewalk":"sidewalk.jpg",
	"towerroad":"towerroad.jpg",
	"field":"field.jpg",

});


// Define the Characters
monogatari.characters ({
	'femboy': {
		name: 'Nyaashichka',
		color: '#5bcaff',
		directory: "femboy",
		sprites: {
			"shota":"shota.png",
			"shotadog":"shotadog.png",
			"standing":"standingteen.png",
			"dancing":"dancing.png",
		},
	},
	'girls': {
		name: 'Dziewczionki',
		color: '#5bcfff',
		directory: "girls",
		sprites: {
			"girls":"girls.png",
			"kimonogirls":"kimonogirls.png",
			
		},
	},
	'blank':{},
});

monogatari.script ({
	// The game starts here.
	'Start': [

		
		"show scene towerroad with fadeIn duration 2s",
		"wait 2000",
		"show scene towerroad with fadeOut duration 5s",
		"wait 5000",
		"show scene sidewalk with fadein duration 3s",
		"show character femboy shota at right with fadeIn 6s",
		"blank",
		
		
		
		"femboy Today I decided to go on a walk through the fields by my village.",
		
		
		
		"show scene sidewalk with fadeOut",
		"wait 2000",
		"show scene wheatfield with fadeIn",
		"wait 2000",
		"show character femboy shota at left with fadeIn",
		"show character girls kimonogirls at right with fadeIn",
		"femboy I saw some pretty girls in kimonos on my way there.",
		"show character girls kimonogirls at right with fadeIn",
		"femboy They said hello, it made my heart flutter.....",
		"show character girls kimonogirls at right with fadeOut",
		"wait 2000",
		"show character femboy shota at left with fadeOut",
		"wait 2000",
		"show scene wheatfield with fadeOut",
		"wait 2000",
		"show scene field with backinDown",
		"wait 2000",		
		"femboy I frolicked in the field for hours"
		
		
		
		]
		

	
});