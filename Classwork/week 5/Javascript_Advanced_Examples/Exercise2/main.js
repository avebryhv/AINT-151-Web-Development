
function StorePlayerData()
{
	localStorage.setItem("playername",document.forms[0]["playername"].value);
	localStorage.setItem("playerhealth",document.forms[0]["playerhealth"].value);
	localStorage.setItem("playercolour",document.forms[0]["playercolour"].value);
}
