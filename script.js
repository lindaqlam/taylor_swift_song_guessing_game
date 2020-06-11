var allSongs = [
    {lyric: "Taught me some hard lessons, I just forget what they were", song: "I Forgot That You Existed"},
    {lyric: "I'm always waiting for you to be waiting below", song: "Cruel Summer"},
    {lyric: "I'm highly suspicious that everyone who sees you wants you", song: "Lover"},
    {lyric: "He looks up, grinning like a devil", song: "Cruel Summer"},
    {lyric: "I'd be just like Leo, in Saint-Tropez", song: "The Man"},
    {lyric: "I've got a hundred thrown-out speeches I almost said to you", song: "The Archer"},
    {lyric: "Wanna see what's under that attitude", song: "I Think He Knows"},
    {lyric: "We can follow the sparks, I'll drive", song: "I Think He Knows"},
    {lyric: "The damsels are depressed", song: "Miss Americana and the Heartbreak Prince"},
    {lyric: "We're so sad, we paint the town blue", song: "Miss Americana and the Heartbreak Prince"},
    {lyric: "Now I've read all of the books beside your bed", song: "Paper Rings"},
    {lyric: "I'm with you even if it makes me blue", song: "Paper Rings"},
    {lyric: "And baby, I get mystified by how this city screams your name", song: "Cornelia Street"},
    {lyric: "I look through the windows of this love, even though we boarded them up", song: "Death By A Thousand Cuts"},
    {lyric: "Show me a gray sky, a rainy cab ride. Babes, don't threaten me with a good time", song: "London Boy"},
    {lyric: "Desperate people find faith, so now I pray to Jesus too", song: "Soon You'll Get Better"},
    {lyric: "I know delusion when I see it in the mirror", song: "Soon You'll Get Better"},
    {lyric: "Daring you to leave me just so I can try and scare you", song: "False God"},
    {lyric: "We see you over there on the internet comparing all the girls who are killing it", song: "You Need To Calm Down"},
    {lyric: "This ultraviolet morning light below tells me this love is worth the fight, oh", song: "Afterglow"},
    {lyric: "I'm the only one of me. Baby, that's the fun of me", song: "ME!"},
    {lyric: "Something gave you the nerve to touch my hand", song: "It's Nice To Have A Friend"},
    {lyric: "I wounded the good and I trusted the wicked. Clearin' the air, I breathed in the smoke", song: "Daylight"},
    {lyric: "I once believed love would be black and white but it's golden", song: "Daylight"}
    ];

//REMOVE ALL SUPER LIGHT COLORS
var allColors = [ "#63b7af", "#abf0e9", "#ee8572", "#84a9ac", "#3b6978", "#204051",
									"#17706e", "#ccafaf", "#ffcac2", "#fc9d9d", "#900c3f", "#654062",
									"#ff9c71", "#ea907a", "#3da4ab", "#0e9aa7", "#f6cd61", "#1b6ca8",
									"#e84a5f", "#a8df65", "#679b9b", "#aacfcf", "#bb596b", "#ec823a",
									"#9a1f40", "#d9455f", "#7d5a5a", "#b6eb7a", "#ea9a96", "#3797a4"
];

var numSquares = 6;
var colors = [];
var pickedColor;
var selectedSongs = [];
var pickedSong;
var songTitles = document.querySelectorAll(".song-choice");
var squares = document.querySelectorAll(".square");
var lyricDisplay = document.getElementById("lyricDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector(".header");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			var clickedSong = this.textContent;

			//compare color to pickedColor
			if(clickedSong === pickedSong.song){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				header.style.background = clickedColor;
			} else {
				this.style.background = "#fff";
				//make text disappear too
        this.textContent.style.color = "#fff";


				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	//generate random colors
	colors = selectRandomColors(numSquares);

	//generate random songs, selectedSongs stores entire song objects
	selectedSongs = generateRandomSongs(numSquares);

	//pick a new random song from array
	pickedSong = pickLyric();

	//change colorDisplay to match picked Color
	lyricDisplay.textContent = pickedSong.lyric;
	resetButton.textContent = "New Songs"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
			songTitles[i].textContent = selectedSongs[i].song; //COME BACK & FIX

		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.background = "#82c4c3";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
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

	while (initList.size < num) {
		var randomSong = Math.floor(Math.random() * allSongs.length);

		if (initList.has(allSongs[randomSong].song) === false) {
			initList.add(allSongs[randomSong].song);
			arr.push(allSongs[randomSong])
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
