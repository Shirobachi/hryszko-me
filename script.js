//TODO
/*
	start with random hobby/lang and increment index 
	Changing separatelly not both at the same time
*/

var colors = ['b2abf2ff', 'c3423fff', 'f7b538ff', '61e294ff', '75ddddff', 'ffbfa0ff', '18f2b2ff', 'f5f749ff', 'f24236ff', 'AA4465', 'FFA69E', '007991', 'A14A76', 'A1E8AF'];

var colorSize = colors.length; 
var colorRandId = Math.floor(Math.random() * Math.floor(colorSize));

$( ".color" ).css( "color", "#"+colors[colorRandId] );
$( "a .floatingIcon" ).css( "color", "#"+colors[colorRandId] );
$( '.floatingIcon' ).css( 'border', '1px solid #'+colors[colorRandId] );

setTimeout(switcher, Math.floor(Math.random() * Math.floor(200)), "hobby");
setTimeout(switcher, Math.floor(Math.random() * Math.floor(200)), "lang");

var lang = ["c++", "pytnon", "html", "css", "js", "php", "sql", "regex", "latex", "python"];
var hobby = ["git", "sublime text", "colorful things", "linux", "skateboards", "ukulele", "Rubic's cube", "Mathematic", "Instagram"];

function switcher (type){
	if(type=="lang"){
		var langSize = lang.length; 
		var langRandId = Math.floor(Math.random() * Math.floor(langSize));

		$( '#codeLang').html(lang[langRandId]);

		$( '#codeLang').removeClass('animate');
	  void document.getElementById("codeLang").offsetWidth;
		$( '#codeLang').addClass('animate');

		setTimeout(switcher, Math.floor(Math.random() * Math.floor(889))+3556, "lang");
	}
	else{
		var hobbySize = hobby.length; 
		var hobbyRandId = Math.floor(Math.random() * Math.floor(hobbySize));

		$( '#hobbies').html(hobby[hobbyRandId]);

		$( '#hobbies').removeClass('animate');
	  void document.getElementById("hobbies").offsetWidth;
		$( '#hobbies').addClass('animate');

		setTimeout(switcher, Math.floor(Math.random() * Math.floor(1500))+4000, "hobby");
	}
}

fetch('https://wakatime.com/share/@b74ba3c5-2883-43ca-9833-799f8a50840a/067db09f-75f9-4677-8993-19882ce0af9c.json')
    .then(response => response.json())
    .then(data => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });