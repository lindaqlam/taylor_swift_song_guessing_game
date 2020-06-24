var allColors = [
	'#63b7af',
	'#abf0e9',
	'#ee8572',
	'#84a9ac',
	'#3b6978',
	'#204051',
	'#17706e',
	'#ccafaf',
	'#ffcac2',
	'#fc9d9d',
	'#900c3f',
	'#654062',
	'#ff9c71',
	'#ea907a',
	'#3da4ab',
	'#0e9aa7',
	'#f6cd61',
	'#1b6ca8',
	'#e84a5f',
	'#a8df65',
	'#679b9b',
	'#aacfcf',
	'#bb596b',
	'#ec823a',
	'#9a1f40',
	'#d9455f',
	'#7d5a5a',
	'#b6eb7a',
	'#ea9a96',
	'#3797a4'
];

var numSquares = 6;
var colors = [];
var pickedColor;
var selectedSongs = [];
var pickedSong;
var songTitles = document.querySelectorAll('.song-choice');
var squares = document.querySelectorAll('.square');
var lyricDisplay = document.getElementById('lyricDisplay');
var messageDisplay = document.querySelector('#message');
var header = document.querySelector('.header');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var albumMode = 'All Albums';

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function changeAlbumMode() {
	var selectedAlbum = document.getElementById('albumSelector');
	albumMode = selectedAlbum.options[selectedAlbum.selectedIndex].text;

	console.log(albumMode);
	reset();
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			var clickedSong = this.textContent;

			//compare color to pickedColor
			if (clickedSong === pickedSong.song) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				header.style.background = clickedColor;
			} else {
				this.style.background = '#fff';
				//make text disappear too

				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	//generate random colors
	colors = selectRandomColors(numSquares);

	//generate random songs, selectedSongs stores entire song objects
	selectedSongs = generateRandomSongs(numSquares);

	//pick a new random song from array
	pickedSong = pickLyric();

	//change colorDisplay to match picked Color
	lyricDisplay.textContent = pickedSong.lyric;
	resetButton.textContent = 'New Songs';
	messageDisplay.textContent = '';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
			songTitles[i].textContent = selectedSongs[i].song; //COME BACK & FIX
		} else {
			squares[i].style.display = 'none';
		}
	}
	header.style.background = '#82c4c3';
}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickLyric() {
	var random = Math.floor(Math.random() * selectedSongs.length);
	return selectedSongs[random];
}

function generateRandomSongs(num) {
	var initList = new Set([]); //only stores song titles
	var arr = []; //stores song objects
	var start, setSize;

	if (albumMode === 'All Albums') {
		start = 0;
		setSize = allSongs.length;
	} else if (albumMode === 'Lover') {
		start = 0;
		setSize = 24;
	} else if (albumMode === 'Reputation') {
		start = 24;
		setSize = 37;
	} else if (albumMode === '1989') {
		start = 61;
		setSize = 41;
	} else if (albumMode === 'Red') {
		start = 102;
		setSize = 42;
	} else if (albumMode === 'Speak Now') {
		start = 144;
		setSize = 57;
	} else if (albumMode === 'Fearless') {
		start = 201;
		setSize = 28;
	} else if (albumMode === 'Taylor Swift') {
		start = 229;
		setSize = 31;
	} else {
		start = 260;
		setSize = 15;
	}

	while (initList.size < num) {
		var randomSong = start + Math.floor(Math.random() * setSize);

		if (initList.has(allSongs[randomSong].song) === false) {
			initList.add(allSongs[randomSong].song);
			arr.push(allSongs[randomSong]);
		}
	}

	return arr;
}

function selectRandomColors(num) {
	var colorSet = new Set([]);

	while (colorSet.size < num) {
		var randomColor = Math.floor(Math.random() * allColors.length);
		colorSet.add(allColors[randomColor]);
	}

	var arr = Array.from(colorSet);

	return arr;
}
