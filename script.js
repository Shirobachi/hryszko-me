var lang = ["c++", "pytnon", "html", "css", "js", "php", "sql", "regex", "latex", "python"];
var hobby = ["git", "sublime text", "colorful things", "linux", "skateboards", "ukulele", "Rubic's cube", "Mathematic", "Instagram"];

function switcher (argument) {

	if(Math.floor(Math.random() * Math.floor(2))==1 || argument == 1)
	{
		var langSize = lang.length; 
		var langRandId = Math.floor(Math.random() * Math.floor(langSize));
		document.getElementById('lang').innerHTML = lang[langRandId];
	}

	if(Math.floor(Math.random() * Math.floor(2))==1 || argument == 1)
	{
		var hobbySize = hobby.length; 
		var hobbyRandId = Math.floor(Math.random() * Math.floor(hobbySize));
		document.getElementById('loveThink').innerHTML = hobby[hobbyRandId];
	}

	setTimeout(switcher, Math.floor(Math.random() * Math.floor(1800))+200);
}

function start () 
{
	var colors = ['b2abf2ff', 'c3423fff', 'f7b538ff', '61e294ff', '75ddddff', 'ffbfa0ff', '18f2b2ff', 'f5f749ff', 'f24236ff', 'AA4465', 'FFA69E', '007991', 'A14A76', 'A1E8AF'];
	var colorSize = colors.length; 
	var colorRandId = Math.floor(Math.random() * Math.floor(colorSize));

	var all = document.getElementsByClassName('color');
	for (var i = 0; i < all.length; i++)
	  all[i].style.color = '#'+colors[colorRandId];

	switcher(1);
}

window.onload = start;