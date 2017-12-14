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
		var roomchoice = "<button type='button' id='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text;
		document.getElementById('roomChoices').innerHTML += roomchoice;

	}
	RoomCheck(roomIndex);
}

function RoomCheck(roomIndex)
{
	switch (roomIndex) {
		case 0:
			document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
			lock1A = false;
			keyNurse = false;
			keyStorage = false;
			keyTorch = false;
			keyPower = false;
			paperNurse = false;
			paperStorage = false;
			paper1A = false;
			paperPower = false;
			paperCount = 0;
			document.getElementById('invScreen').style.backgroundImage = "url(images/inv0.png)";
			document.getElementById('paperScreen').style.backgroundImage = "url(images/paper0.png)";
			break;

		case 1:
		case 13:
			document.getElementById('roomImage').style.backgroundImage = "url(images/class.jpg)";
			break;

		case 6:
			document.getElementById('roomImage').style.backgroundImage = "url(images/corridor.jpg)";
			break;

		case 7:
			if (lock1A) {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = "Lower Corridor A";
				document.getElementById('roomText').innerHTML = "The door is locked";
				var roomchoice = "<button type='button' id='button' onClick=SelectRoom(6)>" + "Return";
				document.getElementById('roomChoices').innerHTML += roomchoice;
			}
			else {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
				document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
				document.getElementById('roomImage').style.backgroundImage = "url(images/class.jpg)";
				for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text;
					document.getElementById('roomChoices').innerHTML += roomchoice;

				}
			}
			break;

			case 11:
				lock1A = true;
				keyNurse = true;
				document.getElementById('roomImage').style.backgroundImage = "url(images/classLeave.jpg)";
				document.getElementById('invScreen').style.backgroundImage = "url(images/inv1.png)";
				break;

			case 12:
				document.getElementById('roomImage').style.backgroundImage = "url(images/classdist.jpg)";
				break;

			case 14:
				document.getElementById('roomImage').style.backgroundImage = "url(images/corridor.jpg)";
				break;

			case 15:
			if (keyNurse == false) {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = "Lower Corridor B";
				document.getElementById('roomText').innerHTML = "The door is locked";
				var roomchoice = "<button type='button' id='button' onClick=SelectRoom(14)>" + "Return";
				document.getElementById('roomChoices').innerHTML += roomchoice;
			}
			else {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
				document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
				document.getElementById('roomImage').style.backgroundImage = "url(images/nurseRoom.png)";
				for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text;
					document.getElementById('roomChoices').innerHTML += roomchoice;

				}
			}
				break;
			case 18:
				keyStorage = true;
				document.getElementById('invScreen').style.backgroundImage = "url(images/inv2.png)";
			default:
	}

}
