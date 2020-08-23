window.onload = start;

var lang = ["c++", "pytnon", "html", "css", "js", "php", "sql", "regex", "latex", "python"];
var hobby = ["git", "sublime text", "colorful things", "linux", "skateboards", "ukulele", "Rubic's cube", "Mathematic", "Instagram"];

function switcher (type){
	if(type=="lang"){
		var langSize = lang.length; 
		var langRandId = Math.floor(Math.random() * Math.floor(langSize));

		$( '#codeLang').removeClass('animate');
		$( '#codeLang').html(lang[langRandId]);
		$( '#codeLang').addClass('animate');

		setTimeout(switcher, 1500, "lang");
	}
	else{
		var hobbySize = hobby.length; 
		var hobbyRandId = Math.floor(Math.random() * Math.floor(hobbySize));

		$( '#hobbies').html(hobby[hobbyRandId]);

		setTimeout(switcher, Math.floor(Math.random() * Math.floor(500))+1500, "hobby");
	}
}

function start () {

	var colors = ['b2abf2ff', 'c3423fff', 'f7b538ff', '61e294ff', '75ddddff', 'ffbfa0ff', '18f2b2ff', 'f5f749ff', 'f24236ff', 'AA4465', 'FFA69E', '007991', 'A14A76', 'A1E8AF'];

	var colorSize = colors.length; 
	var colorRandId = Math.floor(Math.random() * Math.floor(colorSize));

	$( ".color" ).css( "color", "#"+colors[colorRandId] );

	switcher("lang");
	switcher("hobby");

}