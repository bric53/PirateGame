var data;
var map = [["l", "l", "l", "l", "l", "o", "o", "o", "o", "o", "pr", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "o", "l", "l", "l", "o", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["l", "l", "l", "o", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "l", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "l", "l", "o", "w", "o", "o", "o", "o", "pt", "pt", "o", "w", "o", "o", "o", "o", "o", "l", "l"], ["o", "l", "l", "o", "o", "w", "o", "o", "pt", "l", "l", "pt", "o", "w", "o", "o", "o", "l", "l", "pb"], ["pg", "l", "l", "o", "o", "o", "w", "o", "pt", "l", "l", "pt", "o", "o", "w", "o", "o", "l", "l", "o"], ["l", "l", "o", "o", "o", "o", "o", "w", "o", "pt", "pt", "o", "o", "o", "o", "w", "o", "l", "l", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "l", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "o", "l", "l", "l"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "o", "l", "l", "l", "o", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "py", "o", "o", "o", "o", "o", "l", "l", "l", "l", "l"]];
var TableSize; //height, width
var win = 0;
var gameOver = 0;
var turn = 0;
var score = 0;
var Win_val = 2048;
var selected = false;
var selectedShip;
var selectedLocation;
var turn = 'Press next turn to start the game';
var roll = [0, 0];
var treasureLocation = false;
var testcount = 0;
var playerR = [1, 1, 0, .1, 1, 0];
var playerG = [1, 1, 0, 0, 1, 0];
var playerB = [1, 1, 0, 0, .5, 0];
var playerY = [1, 1, 0, .25, .5, 0];
var gameover = false;
var time = 500;
//AI template: [greed, anger, fear, chaos, claustrophobia, variation]


function initialize(height, width)//sets the game grid to all 0's
{

	TableSize = [height, width];
	//var ful = [];//the full table data
	//var row = [];//the data for one row
	//for (j = 0; j < width; j++) {
	//	row.push(0);
	//}
	//for (i = 0; i < height; i++) {
	//	var temp = [...row];
	//	ful.push(temp);
	//}
	//data = ful;
	data = [["l", "l", "l", "l", "l", "o", "o", "sr", "sr", "sr", "pr", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "o", "l", "l", "l", "o", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["l", "l", "l", "o", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["sg", "l", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "l", "l", "l"], ["sg", "l", "l", "o", "w", "o", "o", "o", "o", "pt", "pt", "o", "w", "o", "o", "o", "o", "o", "l", "l"], ["sg", "l", "l", "o", "o", "w", "o", "o", "pt", "l", "l", "pt", "o", "w", "o", "o", "o", "l", "l", "pb"], ["pg", "l", "l", "o", "o", "o", "w", "o", "pt", "l", "l", "pt", "o", "o", "w", "o", "o", "l", "l", "sb"], ["l", "l", "o", "o", "o", "o", "o", "w", "o", "pt", "pt", "o", "o", "o", "o", "w", "o", "l", "l", "sb"], ["l", "l", "l", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "l", "sb"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "o", "l", "l", "l"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "o", "l", "l", "l", "o", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "py", "sy", "sy", "sy", "o", "o", "l", "l", "l", "l", "l"]];
}

function newGame() 
{
	data = [["l", "l", "l", "l", "l", "o", "o", "sr", "sr", "sr", "pr", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "o", "o", "o", "l", "l", "l", "o", "l", "l", "l", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["l", "l", "l", "o", "l", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "l", "l", "l"], ["sg", "l", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "l", "l", "l"], ["sg", "l", "l", "o", "w", "o", "o", "o", "o", "pt", "pt", "o", "w", "o", "o", "o", "o", "o", "l", "l"], ["sg", "l", "l", "o", "o", "w", "o", "o", "pt", "l", "l", "pt", "o", "w", "o", "o", "o", "l", "l", "pb"], ["pg", "l", "l", "o", "o", "o", "w", "o", "pt", "l", "l", "pt", "o", "o", "w", "o", "o", "l", "l", "sb"], ["l", "l", "o", "o", "o", "o", "o", "w", "o", "pt", "pt", "o", "o", "o", "o", "w", "o", "l", "l", "sb"], ["l", "l", "l", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "w", "o", "l", "sb"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "o", "o", "o", "o", "o", "o"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "o", "l", "l", "l"], ["l", "l", "l", "o", "o", "o", "o", "o", "o", "o", "o", "o", "w", "o", "o", "o", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "o", "l", "l", "l", "o", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "o", "o", "l", "l", "l", "l", "l"], ["l", "l", "l", "l", "l", "l", "l", "l", "l", "py", "sy", "sy", "sy", "o", "o", "l", "l", "l", "l", "l"]];

	initialize(TableSize[0], TableSize[1]);
	gameover = false;
	nextTurn();
}
function getScore()
{
	return score;
}
















var tbl;
var gridSize;


function main()
{
	playerR = prompt("Who should controll the Red team?\n (\"player\",\"ai\", or \"none\")");
	if (playerR == "ai") { playerR = [1, 1, 0, .1, 1, 0]; }
	playerG = prompt("Who should controll the Green team?\n (\"player\",\"ai\", or \"none\")");
	if (playerG == "ai") { playerG = [1, 1, 0, .1, 1, 0]; }
	playerB = prompt("Who should controll the Blue team?\n (\"player\",\"ai\", or \"none\")");
	if (playerB == "ai") { playerB = [1, 1, 0, .1, 1, 0]; }
	playerY = prompt("Who should controll the Black team?\n (\"player\",\"ai\", or \"none\")");
	if (playerY == "ai") { playerY = [1, 1, 0, .1, 1, 0]; }
	
	gridSize = [20,20];
	
	tbl = document.getElementById('tablehere');
	var removeCheck = tbl.firstChild;
	tbl.removeChild(removeCheck);
	var btn = document.createElement("button");
	btn.innerHTML = "next turn";
	btn.onclick = nextTurn;
	tbl.appendChild(btn);
		

	initialize(gridSize[0], gridSize[1]);
	makeTable(tbl, gridSize[0], gridSize[1]);
	update(tbl, gridSize[0], gridSize[1]);


		
}

	document.addEventListener('keydown', keyPress, false);
	function ClearLStorage() { localStorage.clear(); }
	function restart() {
		newGame();
		update(tbl, gridSize[0], gridSize[1]);

		var t = document.getElementById("texthere");//resets bottom text
		t.innerHTML = "";
	}

	function keyPress(event) {
		var k = event.keyCode;
		if (k == 80) { k = Math.floor(Math.random() * 4) + 37; }
		switch (k) {
			case 37: left(); event.preventDefault(); break;
			case 38: up(); event.preventDefault(); break;
			case 39: right(); event.preventDefault(); break;
			case 40: down(); event.preventDefault(); break;
				return;
		}
		update(tbl, gridSize[0], gridSize[1]);

	}


	function makeTable(main, height, width) {
		var TB = document.createElement("table");
		var TD;
		var TR;
		for (i = 0; i < height; i++) {
			idx++; //offsets each row by one to checker
			TR = document.createElement('tr');
			for (j = 0; j < width; j++) {
				TD = document.createElement('td');
				TD.onclick = clickTile;
				if (TD.innerHTML == 0) //makes empty tiles blank
					TD.innerHTML = "";
				TD.className = returnClass(TD); //adds style to the cell
				TR.appendChild(TD);	//adds the tile to the row

			}
			TB.appendChild(TR); //adds a row to the table

		}
		main.appendChild(TB);
	}

var testLimit = 100;
function update(main, height = 20, width = 20)
{

	idx = 0;
	document.getElementById("turnText").innerHTML = turn + "'s turn <br>Roll:" + roll.toString();
	for (var i = 0; i < height; i++) {
		
		for (var j = 0; j < width; j++)
		{
			
			main.children[1].children[i].children[j].innerHTML = "";
			if (selected)
			{
				main.children[1].children[i].children[j].classList.add(data[i][j]);
			}
			else
			{
				if (data[i][j] == "pt" && treasureLocation) {
					data[i][j] = "o";
				}
				main.children[1].children[i].children[j].className = data[i][j];
			}

			if (data[i][j][0] == 's' || data[i][j][0] == 'c')//adds ship image
			{
				var imgship = document.createElement("img");
				
				
				if (i == treasureLocation[0] && j == treasureLocation[1]) {
					switch (data[i][j][1])
					{
						case 'r': imgship.src = "\RedTreasureShip.png"; break;
						case 'b': imgship.src = "\BlueTreasureShip.png"; break;
						case 'g': imgship.src = "\GreenTreasureShip.png"; break;
						case 'y': imgship.src = "\YellowTreasureShip.png"; break;
					}
				}
				else
				{
					switch (data[i][j][1])
					{
						case 'r': imgship.src = "\RedShip.png"; break;
						case 'b': imgship.src = "\BlueShip.png"; break;
						case 'g': imgship.src = "\GreenShip.png"; break;
						case 'y': imgship.src = "\YellowShip.png"; break;
					}
				}
				main.children[1].children[i].children[j].appendChild(imgship);
				
			}
			if (data[i][j][0] == 'p' )//adds port image
			{
					var imgship = document.createElement("img");

					switch (data[i][j][1]) {
						case 'r': imgship.src = "\RedAnchor.png"; break;
						case 'b': imgship.src = "\BlueAnchor.png"; break;
						case 'g': imgship.src = "\GreenAnchor.png"; break;
						case 'y': imgship.src = "\YellowAnchor.png"; break;
					}
				
				
				main.children[1].children[i].children[j].appendChild(imgship);

			}

			
			
			
			
			if (data[i][j][0] == 'c') {

				
				
				var poss = validMoves([i, j]);
				
				for (var z = 0; z < poss.length; z++)
				{
					
					main.children[1].children[poss[z][0]].children[poss[z][1]].classList.add("valid");
				}
				
				
			}
			
		}

	}

	if (gameover)
	{
		alert(getGameTile(treasureLocation)[1] + " wins!");
		gameover = false;
		main();
	}
}



	//style code
	var idx = 0; //how many tiles have been assigned a style, used to make a checkered pattern
	function returnClass(el) //adds styles to cells with a given value. el is the Data element. Num is an identifier
	{

		idx++;
		if (el.innerHTML == "l") {
			return 'dark';
		}
		
		if (idx % 2 == 0)
			return "blank1";
		else
			return "blank2";


}


function moveShip(shipLocation, shipDestination)//assumes that it is a valid move
{
	if (treasureLocation.toString() == shipLocation.toString()) {//I don't know why this comparison needs to be converted to a string and I hate it

		treasureLocation = shipDestination;
	}
	else if (getMapTile(shipDestination) == "pt" && treasureLocation == false)
	{
		treasureLocation = shipDestination;
		
	}

	data[shipLocation[0]][shipLocation[1]] = map[shipLocation[0]][shipLocation[1]];
	data[shipDestination[0]][shipDestination[1]] = selectedShip;
	selected = false; 
	update(tbl = document.getElementById('tablehere'), 20, 20);

	if (getMapTile(treasureLocation)[0] == 'p' && getMapTile(treasureLocation) != "pt")
	{
		gameover = true;
		
	}
}


function clickTile()
{
	var clickedLocation = [this.parentNode.rowIndex, this.cellIndex];
	if (selected)
	{
		
		if (isMoveValid(selectedLocation,clickedLocation, true))// valid move, move
		{
			moveShip(selectedLocation, clickedLocation);
		}
		else // invalid move, deselect
		{
			selected = false;
			data[selectedLocation[0]][selectedLocation[1]] = selectedShip;
		}
	}
	else //select a ship
	{
		if (data[this.parentNode.rowIndex][this.cellIndex] == 's' + turn)
		{
			selectedShip = data[this.parentNode.rowIndex][this.cellIndex];
			selectedLocation = [this.parentNode.rowIndex, this.cellIndex];
			selected = true;
			data[this.parentNode.rowIndex][this.cellIndex] = "c" + selectedShip[1];
		}
	}
	
	
	
	
	update(tbl = document.getElementById('tablehere'),20,20)
}

function nextTurn()
{
	if (selected)
	{
		selected = false;
		data[selectedLocation[0]][selectedLocation[1]] = selectedShip;
	}
	
	roll = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
	
	switch (turn) {
		case 'g': turn = 'r'; if (playerR != "player") { runAI(playerR); } break;
		case 'r': turn = 'b'; if (playerB != "player") { runAI(playerB); } break;
		case 'b': turn = 'y'; if (playerY != "player") { runAI(playerY); } break;
		case 'y': turn = 'g'; if (playerG != "player") { runAI(playerG); } break;
		default: turn = 'r'; runAI(playerR);
	}

	document.getElementById("turnText").innerHTML = turn + "'s turn <br>Roll:" + roll.toString();
	update(tbl = document.getElementById('tablehere'), 20, 20);
	
}



function isMoveValid(shipLocation, destination, remDice = false)
{
	if (destination == "") {
		return false;
	}
	if (getGameTile(destination) == "l" || getGameTile(destination) == selectedShip) //destination is valid
	{
		return false;
	}
	
	xDist = shipLocation[0] - destination[0];
	yDist = shipLocation[1] - destination[1];
	tDist = Math.sqrt((xDist * xDist) + (yDist * yDist));
	
	if (!(tDist == roll[0] || tDist == roll[1])) //verifies that distance is correct
	{
		var winds = getMapTile(shipLocation) == "w" && getMapTile(destination) == "w";
		if (winds && (Math.abs(xDist) == roll[0] || Math.abs(xDist) == roll[1]))// check if you are on the winds
		{
			//add winds path code here
		}
		else
		{
			return false; //invalid move
		}
	}
	else //distance is correct, not on winds
	{


		var pathTile;
		for (i = 1; i < tDist; i++) {//check the path between location and destination
			pathTile = getGameTile([-i * xDist / tDist + shipLocation[0], -i * yDist / tDist + shipLocation[1]])
			if ("lwsgsrsbsy".includes(pathTile)) {
				return false;
			}
		}
	}
	if (remDice)
	{
		if (roll[0] != 0 && (roll[0] == tDist || Math.abs(xDist) == roll[0] || Math.abs(yDist) == roll[0])) {//removes the dice from roll that gave this move
			roll[0] = 0;
		}
		else {
			roll[1] = 0;
		}

	}
	return true;

}


function getGameTile(location)
{
	if (location[0] >= gridSize[0] || location[0] < 0 || location[1] >= gridSize[1] || location[1] < 0 || location == false)
	{
		return "l";
	}
	return data[location[0]][location[1]];
}
function getMapTile(location)
{
	if (location[0] >= gridSize[0] || location[0] < 0 || location[1] >= gridSize[1] || location[1] < 0 || location == false) {
		return "l";
	}
	return map[location[0]][location[1]];
}

function validMoves(location)
{
	
		var ret = [];
		for (k = 0; k < 2; k++) {//for each dice
			if (roll[k] == 0) {//don't check for dice with value 0
				continue;
			}
			
			if (isMoveValid(location, [location[0] + roll[k], location[1]])) { ret.push([location[0] + roll[k], location[1]]); }//check up, down, left, and right
			if (isMoveValid(location, [location[0] - roll[k], location[1]])) { ret.push([location[0] - roll[k], location[1]]); }
			if (isMoveValid(location, [location[0], location[1] + roll[k]])) { ret.push([location[0], location[1] + roll[k]]); }
			if (isMoveValid(location, [location[0], location[1] - roll[k]])) { ret.push([location[0], location[1] - roll[k]]); }

			if (getMapTile(location) == "w")
			{
				if (isMoveValid(location, [location[0] + roll[k], location[1] + roll[k]])) { ret.push([location[0] + roll[k], location[1] + roll[k]]); }
				if (isMoveValid(location, [location[0] - roll[k], location[1] - roll[k]])) { ret.push([location[0] - roll[k], location[1] - roll[k]]); }
			}

		}

		return ret;
	
}

function getTurnShips()
{
	var ret = [];
	for (var i = 0; i < gridSize[0]; i++)
	{
		for (var j = 0; j < gridSize[1]; j++)
		{
			if (data[i][j][0] == 's')
			{
				if (data[i][j][1] == turn)
				{
					ret.push([i, j]);
				}
			}

		}
	}
	return ret;
}
// ai template: [greed, anger, fear, chaos, claustrophobia, variation]
function runAI(ai = [.5, .5, .5, .5, .5, .5])
{
	if (ai == "none")
	{
		nextTurn();
		return;
	}
	selectedShip = "s" + turn;
	selected = false;
	var finalMove = [];
	var finalShip = [];
	var finalValue = 0;
	var ships = getTurnShips();
	if (ships.length == 0) { /*alert("no ships");*/ nextTurn(); return; }

	for (var i = 0; i < ships.length;i++)
	{
		var moves = validMoves(ships[i]);
		for (var j = 0; j < moves.length; j++)
		{
			var currentValue = assignWeight(ships[i], moves[j],ai)
			if (currentValue > finalValue)
			{
				finalValue = currentValue;
				finalMove = moves[j];
				finalShip = ships[i];
			}
		}
	}
	
	if (isMoveValid(finalShip, finalMove, true))//checks that a valid move exists
	{
		moveShip(finalShip, finalMove);
		update(document.getElementById("tablehere"));
		if (gameover == false) {
			setTimeout(() => {  runAI(); }, time);
		}
	}
	else
	{
		setTimeout(() => { update(document.getElementById("tablehere")); nextTurn(); }, 2*time);
	}
	
}

function assignWeight(ship, tile, ai)//returns a tile weight based
{
	return ai[0] * greedAI(ship, tile) + ai[1] * angerAI(tile) + ai[2] * fearAI(tile) + ai[3] * chaosAI(tile) + ai[4] * unityAI(ship, tile);
}

//each emotion returns a value between 0 and 1.
function chaosAI(tile)
{
	return Math.random();
}
function angerAI(tile)
{
	if (getGameTile(tile)[0] == 's')

	{
		return 1;
	}
	else return 0;
}
function fearAI(tile)
{
	for (var i = 1; i < 12; i++)
	{
		if (getGameTile([tile[0] + i, tile[1]])[0] == 's' && isMoveValid(tile,[tile[0]+i, tile[1]]))
		{
			return 0;
		}
	}
	for (var i = 1; i < 12; i++) {
		if (getGameTile([tile[0] - i, tile[1]])[0] == 's' && isMoveValid(tile, [tile[0]-i, tile[1]])) {
			return 0;
		}
	}
	for (var i = 1; i < 12; i++) {
		if (getGameTile([tile[0], tile[1]+i])[0] == 's' && isMoveValid(tile, [tile[0], tile[1]+i])) {
			return 0;
		}
	}
	for (var i = 1; i < 12; i++) {
		if (getGameTile([tile[0], tile[1]-i])[0] == 's' && isMoveValid(tile, [tile[0], tile[1]-i])) {
			
			return 0;
		}
	}
	return 1;
}
function greedAI(ship, tile)
{
	var shipWeight = 50;
	var target
	if (treasureLocation == false)//treasure not taken, go to center
	{
		
		if (getGameTile(tile) == "pt")
		{
			return 1;
		}
		target = [9.5, 9.5];
	}
	else //treasure is taken
	{
		if (getGameTile(treasureLocation)[1] == turn)//if we have the treasure
		{
			if (ship.toString() == treasureLocation.toString())
			{
				shipWeight = 75;
				if (ship[0] == 0 || ship[0] == 19 || ship[1] == 0 || ship[1] == 19) {
					switch (turn) {
						case "r": target = [0, 10]; break;
						case "g": target = [10, 0]; break;
						case "b": target = [9, 19]; break;
						case "y": target = [19, 9]; break;

					}
					if (tile.toString() == target.toString()) {
						return 1;
					}
				}
				else {

					switch (turn) {
						case "r": target = [0, 6]; break;
						case "g": target = [6, 0]; break;
						case "b": target = [13, 19]; break;
						case "y": target = [19, 13]; break;

					}
				}
			}
			else
			{
				target = [9.5, 9.5];
			}
			
		}
		else//someone else has the treasure
		{
			if (tile.toString() == treasureLocation.toString())
			{
				return 1;
			}
			target = treasureLocation;
		}
		
		
	}
	var xDist = target[1] - tile[1];
	var yDist = target[0] - tile[0];
	var tDist = Math.sqrt(xDist * xDist + yDist * yDist);
	return (shipWeight - tDist) / 100;
}

function unityAI(ship, tile)
{
	var a = false;
	var port;
	switch (turn) {
		case "r": port = [0, 10]; break;
		case "g": port = [10, 0]; break;
		case "b": port = [9, 19]; break;
		case "y": port = [19, 9]; a = true; break;

	}
	if (ship.toString() == treasureLocation.toString())
	{
		
		return .75;
	}
	var xDist = port[1] - tile[1];
	var yDist = port[0] - tile[0];
	var tDist = Math.sqrt(xDist * xDist + yDist * yDist);
	var xDistS = port[1] - ship[1];
	var yDistS = port[0] - ship[0];
	var tDistS = Math.sqrt(xDistS * xDistS + yDistS * yDistS);

	
	var pDis = (tDist - tDistS) / tDistS //distance moved away from port
	if (pDis < 0)
	{
		return 0;
	}

	return pDis;
	
}