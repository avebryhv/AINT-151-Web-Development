function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById('roomChoices').innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var roomchoice = "<button type='button' id='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button></br>";
		document.getElementById('roomChoices').innerHTML += roomchoice;
	}
}
