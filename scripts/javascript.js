
var foxArray = [];
var storedBG = [];
//var foxBG = 0;
//Function that takes url to fetch
async function getApi(url) {
	const response = await fetch(url);
	var data = await response.json();
	//console.log(data);
	console.log('foxes fetched');
	return data;
}

//calls function with url to JSON and saves it to global variable

function mainButton(){

document.getElementById("table-section").classList.toggle("fade");
//document.getElementById("switch-button").setAttribute("onClick","refreshJSON()"); commented until bugfix comes out
document.getElementById("switch-button").setAttribute("onClick","hideTab()");
document.getElementById("switch-button").innerHTML="<span>Toggle Table</span><span>Hide/Reshow the Foxes</span>" 
doJSON();
}

function hideTab() {
	document.getElementById("table-section").classList.toggle("fade");
}

async function refreshJSON() {
	var removeTab = document.getElementById('GeneratedTable');
	foxArray = [];
	//var parentEl = removeTab.parentElement;
	//parentEl.removeChild(removeTab);
	//document.getElementById('showFoxes').innerHTML= '';
	//var eleS = document.getElementById('GeneratedTable');
	//eleS.parentNode.removeChild(eleS);
	//var delRows = document.getElementById('GeneratedTable').rows[0];
	//console.log(document.getElementById('GeneratedTable').textContent);
	document.getElementById('GeneratedTable').textContent='';
	console.log(document.getElementById('GeneratedTable').textContent);
	//document.getElementById('showFoxes').removeChild(removeTab);
	document.getElementById('showFoxes').innerHTML='';
	
	await doJSON();
	
	

	//delRows.deleteCell(0);
	//for (var i = 0
	
}


async function doJSON() {
	
	var data = await getApi('data/json-test.json');
	foxArray = data;
	//console.log(data);
	console.log('data written');
	printTable();
	
}


//Print the saved array, debugging function
function printJSON() {
	console.log(foxArray.length);
}

var col = [];

function printTable() {
	var length = foxArray.length;
	var headerLength = --length;
	
	//get header for table
	for (let i = 0; i < length; i++) {
		for (let key in foxArray[(i + headerLength)]) {
		col.push(key);
		console.log(key);
		}	
	}
//console.log(col);
const table = document.createElement('table');
table.setAttribute('id', 'GeneratedTable');

const tr = table.insertRow(-1);

//Build the header for the table with common name, scientific name, and thumbnail
console.log('creating table')
for (let i = 0; i < col.length; i++) {
	let th = document.createElement("th");
	th.innerHTML = col[i];
	tr.appendChild(th);
	}
	

//add the actual data from the JSON file as rows
var rowLength = ++length;
for (let a = 0; a < rowLength; a++) {
		let tr = table.insertRow(-1);
		
		for (let j = 0; j < (col.length - 1); j++) {
			let tabCell = tr.insertCell(-1)
			tabCell.innerHTML = foxArray[a][col[j]];
		}
	}
	
	
	
	
	
	
	
	
//thumbnail column handler	
setTimeout(() => {
	for (let b = 0; b < rowLength; b++) {
		let genTable = document.getElementById('GeneratedTable');
		let newImg = document.createElement('img');
		let newButton = document.createElement('button');
		
		
		//Create image element for later use
		console.log(rowLength);
		newImg.src=foxArray[b]['thumbnail'];
		newImg.setAttribute('id', ('fox-image-' + b));
		newImg.setAttribute('class', 'fox-thumbs');
		console.log(foxArray[b]['thumbnail']);
		
		newButton.setAttribute('id', ('fox-button-' + b));
		newButton.setAttribute('class', 'fox-buttons');
		
		//append images to buttons, delay is added becuse otherwise we get null
		setTimeout( () => {
		document.getElementById('fox-button-' + b).appendChild(newImg);
		//document.getElementById('fox-button-' + b).setAttribute("onClick",`console.log('Button ' + ${b} + ' pressed')`);
		document.getElementById('fox-button-' + b).setAttribute("onClick",`changeBG(${b})`);
	
		}, '10')
		
		//Generate empty cell with id and class 
		let tabCell = genTable.rows[(1+b)].insertCell(-1);
		tabCell.setAttribute('id', ('fox-thumb-td-' + b));
		tabCell.setAttribute('class', 'fox-thumbs-wrapper');
		
		
		//append children buttons to each new cell element
		document.getElementById('fox-thumb-td-' + b).appendChild(newButton);

				
	}
	
	
	//document.getElementById('GeneratedTable').rows[1].insertCell(2);
	}, '10')
//console.log(foxArray[1]['thumbnail']);





//Actually put the newly-created table into a container elemtn
const divShowFoxes = document.getElementById('showFoxes');
divShowFoxes.innerHTML = "";
divShowFoxes.appendChild(table);



getBG();


}


function getBG() {
	for (i = 0; i < foxArray.length; i++) {
			console.log("storedBG " + foxArray[i]['thumbnail']);
			
			storedBG[i] = foxArray[i]['thumbnail'];
			
	}
}

	//smooth switch handler
	var bgSwitch = 1;
function changeBG(foxBG) {
	
	if (bgSwitch) {
		document.getElementById('page-body').classList.add('bg-switch');
		bgSwitch--;
	} else {
		document.getElementById('page-body').classList.remove('bg-switch');
		bgSwitch++;
	}
	
	//console.log(`url(${foxBG})`)
	//document.getElementById('page-body').style.backgroundImage = `url(${storedBG[foxBG]})`;
	//document.getElementById('page-body').setAttribute('class', ('bg-' + foxBG));
	
	
	
	

	
	/*for later use
	switch (foxBG) {
		
		case 0:
			console.log('foxBG equals 0');
			break;
		case 1:
			console.log('foxBG equals 1');
			break;
	}
	*/
	
	
}







/*
IMAGE HANDLER PROTOTYPE
setTimeout(() => {
	for (let b = 0; b < rowLength; b++) {
		let genTable = document.getElementById('GeneratedTable');
		console.log(rowLength);
		let tabCell = genTable.rows[(1+b)].insertCell(-1);
		tabCell.innerHTML = foxArray[b]['thumbnail'];
		//document.createElement('table').insertRow(-1).insertCell(-1).innerHTML = foxArray[b]['thumbnail'];		
	}
	
	
	//document.getElementById('GeneratedTable').rows[1].insertCell(2);
	}, '10')
*/