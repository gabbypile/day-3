for ( var i=0; i< 300; i++){
	document.querySelector('.container').innerHTML += "<div class='box'> </div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");

for ( var i=0;  i < arrayOfBoxes.length; i++) {
	if (i%4 ==0) {
		arrayOfBoxes[i].style.background= "pink";	
	}else{
		(i%3==0)
		arrayOfBoxes[i].style.background="purple";
	} else{
		(i%2==0)
		arrayOfBoxes[i].style.background="yellow";
	}
	
}


