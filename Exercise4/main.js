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

function PaperGet(){
	paperCount++;
	switch (paperCount) {
		case 1:
			document.getElementById('paperScreen').style.backgroundImage = "url(images/paper1.png)";
			document.getElementById('roomImage').style.backgroundImage = "url(images/entry1.png)";
			break;

		case 2:
			document.getElementById('paperScreen').style.backgroundImage = "url(images/paper2.png)";
			document.getElementById('roomImage').style.backgroundImage = "url(images/entry2.png)";
			break;

		case 3:
			document.getElementById('paperScreen').style.backgroundImage = "url(images/paper3.png)";
			document.getElementById('roomImage').style.backgroundImage = "url(images/entry3.png)";
			break;

		case 4:
			document.getElementById('paperScreen').style.backgroundImage = "url(images/paper4.png)";
			document.getElementById('roomImage').style.backgroundImage = "url(images/entry4.png)";
			document.getElementById('roomText').innerHTML += " At the bottom of the page, you see the entry has been signed by '";
			document.getElementById('roomText').innerHTML += playerName;
			document.getElementById('roomText').innerHTML += "'";
			break;

		default:

	}
}

//Changes backgrounds and sets flags based on room transitions.
function RoomCheck(roomIndex)
{
	switch (roomIndex) {
		case 0:
			playerName = document.getElementById("nameBox").value;
			document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
			state1A = 0;
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

			if (playerName == "") {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = "Name Required";
				document.getElementById('roomText').innerHTML = "Please enter a name using the Setup tab before playing the game";
			}
			break;

		case 1:
		case 13:
			document.getElementById('roomImage').style.backgroundImage = "url(images/class.jpg)";
			break;

		case 3:
			if (keyStorage) {
				SelectRoom(21);
			}
			break;
		case 21:
			document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
			break;

		case 6:
			document.getElementById('roomImage').style.backgroundImage = "url(images/corridor.jpg)";			
			break;

		case 7:
			if (state1A == 1) {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = "Lower Corridor A";
				document.getElementById('roomText').innerHTML = "The door is locked";
				var roomchoice = "<button type='button' id='button' onClick=SelectRoom(6)>" + "Return";
				document.getElementById('roomChoices').innerHTML += roomchoice;
			}
			else if (state1A == 0) {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
				document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
				document.getElementById('roomImage').style.backgroundImage = "url(images/class.jpg)";
				for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text;
					document.getElementById('roomChoices').innerHTML += roomchoice;
				}
			}
			else if (state1A == 2) {
				SelectRoom(55);
			}
			break;

			case 10:
				keyNurse = true;
				document.getElementById('invScreen').style.backgroundImage = "url(images/inv1.png)";
				break;
			case 11:
				state1A = 1;
				document.getElementById('roomImage').style.backgroundImage = "url(images/classLeave.jpg)";
				break;

			case 12:
			case 23:
			case 28:
			case 38:
			case 49:
				document.getElementById('roomImage').style.backgroundImage = "url(images/badEnd.png)";
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
				document.getElementById('roomImage').style.backgroundImage = "url(images/nurseRoom.png)";
			}
				break;
			case 18:
				if (keyStorage == true) {
					document.getElementById('roomChoices').innerHTML = "";
					document.getElementById('roomTitle').innerHTML = "Nurse's Room";
					document.getElementById('roomText').innerHTML = "The desk has already been searched";
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(15)>" + "Return";
					document.getElementById('roomChoices').innerHTML += roomchoice;
				}
				else {
					keyStorage = true;
					document.getElementById('invScreen').style.backgroundImage = "url(images/inv2.png)";
				}
			break;

			case 42:
				if (paperStorage == true) {
					document.getElementById('roomChoices').innerHTML = "";
					document.getElementById('roomTitle').innerHTML = "Storage Room 2";
					document.getElementById('roomText').innerHTML = "The floor has already been searched";
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(39)>" + "Return";
					document.getElementById('roomChoices').innerHTML += roomchoice;
				}
				else {
					paperStorage = true;
					PaperGet();
				}
			break;

			case 19:
				paperNurse = true;
				PaperGet();
				break;

			case 22:
			if (keyTorch) {
				document.getElementById('roomChoices').innerHTML = "";
				document.getElementById('roomText').innerHTML = "Having already searched the boxes, you decide not to repeat the same action";
				var roomchoice = "<button type='button' id='button' onClick=SelectRoom(21)>" + "Return";
				document.getElementById('roomChoices').innerHTML += roomchoice;
			}else {
				keyTorch = true;
				document.getElementById('invScreen').style.backgroundImage = "url(images/inv3.png)";
			}
				break;

			case 24:
				if (keyTorch) {
					SelectRoom(26);
				}else {
					document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
				}
				break;

			case 25:
				document.getElementById('roomImage').style.backgroundImage = "url(images/notes.png)";
				break;

			case 26:
				document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
				break;

			case 32:
				document.getElementById('roomImage').style.backgroundImage = "url(images/artRoom.png)";
				break;

			case 33:
			document.getElementById('roomImage').style.backgroundImage = "url(images/map.png)";
			break;

			case 41:
				if (paper1A == true) {
					document.getElementById('roomChoices').innerHTML = "";
					document.getElementById('roomTitle').innerHTML = "Music Room";
					document.getElementById('roomText').innerHTML = "Due to some of the wooden boards being broken off, you are able to look out of the window. However, you are still unable to determine where exactly you are, and it is too dark to see past the boundaries of the school. Nothing else catches your eye.";
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(40)>" + "Return";
					document.getElementById('roomChoices').innerHTML += roomchoice;
				}else {
					state1A = 2;
				}
				break;

			case 48:
				keyPower = true;
				document.getElementById('invScreen').style.backgroundImage = "url(images/inv4.png)";
				break;

			case 44:
				if (keyPower == true) {
					SelectRoom(50);
				}
				break;

			case 39:
				document.getElementById('roomImage').style.backgroundImage = "url(images/black.png)";
				break;

			case 40:
				document.getElementById('roomImage').style.backgroundImage = "url(images/musicRoom.png)";
				break;

			case 51:
				if (keyPower == true) {
					SelectRoom(52);
				}
				break;

			case 52:
				document.getElementById('roomImage').style.backgroundImage = "url(images/powerRoom.png)";
				break;

			case 53:
				if (paperPower == true) {
					document.getElementById('roomChoices').innerHTML = "";
					document.getElementById('roomTitle').innerHTML = "Power Room";
					document.getElementById('roomText').innerHTML = "The cabinet has already been searched";
					var roomchoice = "<button type='button' id='button' onClick=SelectRoom(52)>" + "Return";
					document.getElementById('roomChoices').innerHTML += roomchoice;
				}else {
					paperPower = true;
					PaperGet();
				}
				break;

			case 55:
				document.getElementById('roomImage').style.backgroundImage = "url(images/classAlt.png)";
				break;

			case 59:
				paper1A = true;
				PaperGet();
				state1A = 1;
				break;

			case 60:
				if (paperCount == 4) {
					SelectRoom(61);
				}else {
					document.getElementById('roomImage').style.backgroundImage = "url(images/goodEnd.png)";
				}
				break;

			case 63:
				document.getElementById('roomImage').style.backgroundImage = "url(images/trueEnd.png)";
				break;
	}

}

function loadPage(evt, pageName) {
		SelectRoom(0);

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
