var isLightOn = false;
function ToggleLight()
{
	if (isLightOn == true) {
		document.getElementById('lightBulb').src = "img/bulb-off.png";
		isLightOn = false;
	}else{
		document.getElementById('lightBulb').src = "img/bulb-on.png";
		isLightOn = true;
	}
}

function AddNumbers(param1,param2)
{
	var result = param1 + param2;
	document.getElementById('numbers').innerHTML = result;

}
