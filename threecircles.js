
	var number = 1;
	function backgroundColor(){
		number = number * -1;
		if (number == -1){
			document.body.style.background = "orange";
		}
		if (number == 1){
			document.body.style.background = "yellow";
		}
	}

function changeBackground(){
	var r = Math.floor(Math.random() * 256).toString(); //converts random number to string for html to read//
	var g = Math.floor(Math.random() * 256).toString(); //Math is a library
	var b = Math.floor(Math.random() * 256).toString(); //no spaces!! 
	var color = "rgb("+r+", "+g+", "+b+")";
	document.body.style.backgroundColor = color;
}

function changeLink(){
	var randNum = Math.floor(Math.random() * 10000).toString();
	var newLink = "https://twitter.com/" + randNum;
	document.getElementById("wordLink").href = newLink; 
}