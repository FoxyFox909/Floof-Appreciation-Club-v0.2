
var foxArray = [];
//Function that takes url to fetch
async function getApi(url) {
	const response = await fetch(url);
	var data = await response.json();
	//console.log(data);
	console.log('foxes fetched');
	return data;
}

//calls function with url to JSON and saves it to global variable
async function doJSON(){
	document.getElementById("table-section").classList.toggle("fade");
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
		
		console.log(rowLength);
		newImg.src=foxArray[b]['thumbnail'];
		newImg.setAttribute('id', ('fox-image-' + b));
		newImg.setAttribute('class', 'fox-thumbs');
		console.log(foxArray[b]['thumbnail']);
		
		//empty cell and id generation
		let tabCell = genTable.rows[(1+b)].insertCell(-1);
		tabCell.setAttribute('id', ('fox-thumb-' + b));
		
		
		//append children images to each new cell element
		document.getElementById('fox-thumb-' + b).appendChild(newImg);

				
	}
	
	
	//document.getElementById('GeneratedTable').rows[1].insertCell(2);
	}, '10')
//console.log(foxArray[1]['thumbnail']);





//Actually put the newly-created table into a container elemtn
const divShowFoxes = document.getElementById('showFoxes');
divShowFoxes.innerHTML = "";
divShowFoxes.appendChild(table);

/*
setTimeout(() => {
	var links = document.getElementsByTagName('link');
	for (var cl in links)
		{
			var link = links[cl]
			if (link.rel === "stylesheet")
				link.href += "";
			console.log('reloaded css');
			
		}
	}, '50')
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