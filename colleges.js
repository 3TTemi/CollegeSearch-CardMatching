// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.



var univArray = new Array(
	{ name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757 },
	{ name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844 },
	{ name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398 },
	{ name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468 },
	{ name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496 },
	{ name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276 },
	{ name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435 },
	{ name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450 },
	{ name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812 },
	{ name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918 }

);


var showArray = new Array();
showArray = univArray.concat();

function updateSearch() {
	showArray.length = 0;
	var uniStatus = document.querySelector('input[name = "status"]:checked').value;
	var maxTuition = document.getElementById("maxTuition").value;
	var maxSAT = document.getElementById("maxSAT").value;
	var minSAT = document.getElementById("lowSAT").value;



	for (var num = 0; num < univArray.length; num++) {
		if (univArray[num].ownership == uniStatus || uniStatus == "both") {
			if(univArray[num].tuition < maxTuition || maxTuition == "")
			{
				if(univArray[num].SATh < maxSAT || maxSAT == "")
				{
					if(univArray[num].SATl > minSAT || minSAT == "")
					{
						showArray.push(univArray[num]);
					}
				}
			}
			
		}
	}
	table.style.display = 'none';



	runTable();

}




var thArray = ["Name", "SAT High", "SAT Low", "Tuition"];



var table = document.createElement('table');

function runTable() {

	table = document.createElement('table');
	var tr = document.createElement('tr');

	for (var i = 0; i < thArray.length; i++) {
		var th = document.createElement('th');
		var thText = document.createTextNode(thArray[i]);
		th.appendChild(thText);
		tr.appendChild(th);
	}
	table.appendChild(tr);


	for (var j = 0; j < showArray.length; j++) {
		var tr = document.createElement('tr');

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');

		var text1 = document.createTextNode(showArray[j].nickname);
		var text2 = document.createTextNode(showArray[j].SATh);
		var text3 = document.createTextNode(showArray[j].SATl);
		var text4 = document.createTextNode(showArray[j].tuition);

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		table.appendChild(tr);

	}
	document.getElementById("body").appendChild(table);
}

runTable();


var button = document.getElementById("updateButton");
button.addEventListener("click", updateSearch);



