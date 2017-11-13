function CreatePlayer()
{
    var playerName = document.getElementById('playername').value;
    document.getElementById('name').innerHTML = 'Name: '+playerName;

    var playerCol = document.getElementById('playercolour').value;
    document.getElementById('colour').style = "width:50px;height:50px;background-color:"+playerCol;

    var playerHealth = document.getElementById('playerhealth').value;
    document.getElementById('health').innerHTML = 'Health: '+playerHealth;

    var playerWep= document.getElementById('playerweapon').value;
    switch (playerWep) {
        case '1':
            document.getElementById('weapon').innerHTML = 'Weapon: Crossbow of much hurting';
            break;
        case '2':
            document.getElementById('weapon').innerHTML = 'Weapon: Broadsword of so slicing';
            break;
        case '3':
            document.getElementById('weapon').innerHTML = 'Weapon: Wand of amaze magics';
            break;
        default:

    }
}
