function diceRoll(max, min){
	document.getElementById('d4Tekst').innerHTML = Math.floor(Math.random() * (max - min ) + 1);
}

var dice = document.getElementById("d4");
var dice2 = document.getElementById("d6");
var dice3 = document.getElementById("d10");
var dice4 = document.getElementById("d12");
var dice5 = document.getElementById("d20");
var dice6 = document.getElementById("d100");

dice.addEventListener('click', diceRoll1);
dice2.addEventListener('click', diceRoll2);
dice3.addEventListener('click', diceRoll3);
dice4.addEventListener('click', diceRoll4);
dice5.addEventListener('click', diceRoll5);
dice6.addEventListener('click', diceRoll6);

document.getElementById('result1').style.visibility = 'hidden';
document.getElementById('result2').style.visibility = 'hidden';
document.getElementById('result3').style.visibility = 'hidden';
document.getElementById('result4').style.visibility = 'hidden';
document.getElementById('result5').style.visibility = 'hidden';
document.getElementById('result6').style.visibility = 'hidden';

function diceRoll1(){
	document.getElementById('result1').style.visibility = 'visible';
	document.getElementById('d4Tekst').innerHTML = Math.floor(Math.random() * (5 - 1 ) + 1);
}

function diceRoll2(){
	document.getElementById('result2').style.visibility = 'visible';
	document.getElementById('d6Tekst').innerHTML = Math.floor(Math.random() * (7 - 1 ) + 1);
}

function diceRoll3(){
	document.getElementById('result3').style.visibility = 'visible';
	document.getElementById('d10Tekst').innerHTML = Math.floor(Math.random() * (11 - 1 ) + 1);
}

function diceRoll4(){
	document.getElementById('result4').style.visibility = 'visible';
	document.getElementById('d12Tekst').innerHTML = Math.floor(Math.random() * (13 - 1 ) + 1);
}

function diceRoll5(){
	document.getElementById('result5').style.visibility = 'visible';
	document.getElementById('d20Tekst').innerHTML = Math.floor(Math.random() * (21 - 1 ) + 1);
}

function diceRoll6(){
	document.getElementById('result6').style.visibility = 'visible';
	document.getElementById('d100Tekst').innerHTML = Math.floor(Math.random() * (101 - 1 ) + 1);
}

// Nie wiem czemu nie działa mi funkcja poniżej

// var dice = document.getElementById("d4");
// dice.addEventListener('click', diceRoll(4, 1));
