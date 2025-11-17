const now = new Date();
const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
mmm=(""+istDate).substr( 4,3);
yyyy=(""+istDate).substr( 11,4);
mmm_yyyy=mmm+"-"+yyyy;
if( window.location.href.includes('index.html') )
{
	document.write("<A href='index.html' class='link-style' id='Homehref' style='color:blue'>Home</A>");
}
else
{
	document.write("<A href='index.html' class='link-style' href='/ExplorerPatcher-Exception-Windows-11-Home-Single-Language/index.html' id='Homehref' style='color:blue'>Home</A>");
}
function showHomeTable()
{
	const homeTable = document.getElementById('HomeTable');
	const preventWastage = document.getElementById('PreventWastage');
	const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
	preventWastage.style.display = 'none';
	categoryAmount.style.display = 'none';
	homeTable.style.display = 'table';
}
function getTodaysDate()
{
	var today = new Date();
	var day = today.getDate();
	var month = today.toLocaleString('default', { month: 'short' });
	var year = today.getFullYear();
	return day + '-' + month + '-' + year;
}
function addTodaysRow()
{
	var table = document.getElementById("PreventWastage").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.rows.length);
	var cell1 = newRow.insertCell(0);
	cell1.textContent = getTodaysDate();
	// var cell2 = newRow.insertCell(1);
	// cell2.textContent = "Enter reason";
	// var cell3 = newRow.insertCell(2);
	// cell3.textContent = "Enter amount";
}
function toggleTable(event)
{
    event = event || window.event;
    event.preventDefault();
    const clickedId = event.target.id;
    const homeLink = document.getElementById('Homehref');
    const preventLink = document.getElementById('PreventWastagehref');
    const homeTable = document.getElementById('HomeTable');
    const preventWastage = document.getElementById('PreventWastage');
    const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
    
    if( 'Homehref' === clickedId )
    {
	if( 'none' === homeTable.style.display || '' === homeTable.style.display )
	{
	    homeTable.style.display = 'table';
	    preventWastage.style.display = 'none';
	    categoryAmount.style.display = 'none';
	    homeLink.style.color = 'blue';
	    preventLink.style.color = 'blue';
	}
	else
	{
	    homeTable.style.display = 'none';
	    categoryAmount.style.display = 'table';
	    preventWastage.style.display = 'none';
	    homeLink.style.color = 'blue';
	}
    }
    else if( 'PreventWastagehref' === clickedId )
    {
	if( 'none' === preventWastage.style.display || '' === preventWastage.style.display )
	{
	    preventWastage.style.display = 'table';
	    preventLink.style.color = '#2ECC71';
	    categoryAmount.style.display = 'none';
	    homeTable.style.display = 'none';
	}
	else
	{
	    preventWastage.style.setProperty('display', 'none', 'important');
	    categoryAmount.style.display = 'table';
	    homeTable.style.display = 'none';
	    preventLink.style.color = 'blue';
	}
    }
}
function formatDate( dateStr )
{
	const date = new Date( dateStr.split("-").reverse().join("-") );
	const weekday = date.toLocaleString('en-GB', { weekday: 'short' });
	const day = date.toLocaleString('en-GB', { day: '2-digit' });
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `${weekday} ${day}-${month}-${year}`;
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, child, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
const firebaseConfig = {
	apiKey: "AIzaSyDSNanmji7WVBtQHlPO-J_E5RQu9Qlq4Qw",
	authDomain: "openmurugesan.firebaseapp.com",
	databaseURL: "https://openmurugesan-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "openmurugesan",
	storageBucket: "openmurugesan.firebasestorage.app",
	messagingSenderId: "307675598593",
	appId: "1:307675598593:web:4af163460ce2c3bc719500",
	measurementId: "G-0MFK92PQMP"
};
const app = initializeApp( firebaseConfig );
const db = getDatabase( app );
const rootRef = ref( db, "spending" );
function toggleTable(event)
{
    event = event || window.event;
    event.preventDefault();
    const clickedId = event.target.id;
    const homeLink = document.getElementById('Homehref');
    const preventLink = document.getElementById('PreventWastagehref');
    const homeTable = document.getElementById('HomeTable');
    const preventWastage = document.getElementById('PreventWastage');
    const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
    
    if( 'Homehref' === clickedId )
    {
	if( 'none' === homeTable.style.display || '' === homeTable.style.display )
	{
	    homeTable.style.display = 'table';
	    preventWastage.style.display = 'none';
	    categoryAmount.style.display = 'none';
	    homeLink.style.color = 'blue';
	    preventLink.style.color = 'blue';
	}
	else
	{
	    homeTable.style.display = 'none';
	    categoryAmount.style.display = 'table';
	    preventWastage.style.display = 'none';
	    homeLink.style.color = 'blue';
	}
    }
    else if( 'PreventWastagehref' === clickedId )
    {
	if( 'none' === preventWastage.style.display || '' === preventWastage.style.display )
	{
	    preventWastage.style.display = 'table';
	    preventLink.style.color = '#2ECC71';
	    categoryAmount.style.display = 'none';
	    homeTable.style.display = 'none';
	}
	else
	{
	    preventWastage.style.setProperty('display', 'none', 'important');
	    categoryAmount.style.display = 'table';
	    homeTable.style.display = 'none';
	    preventLink.style.color = 'blue';
	}
    }
}
function getLastMonthPetrolAmount()
{
	let total = 0;
	const allMonths = Object.keys(baseRaw);
	const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
	const dt = new Date(ist);
	const mmm = dt.toString().substr(4,3);
	const yyyy = dt.getFullYear();
	const lastMonthKey = mmm + "-" + yyyy;
	for( const month in baseRaw )
	{
		const rows = baseRaw[month];
		for( const r of rows )
		{
			for( let i = 0; r.length > i; ++i )
			{
				const findThismonth = ("" + r[0]);
				const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
				const lastMmm = new Date(ist);
				lastMmm.setMonth(lastMmm.getMonth() - 1);
				var prevmmm=""+lastMmm;
				var last_mmm_yyyy=(""+prevmmm.substr(4,3)+"-"+prevmmm.substr(11,4) );
				if( findThismonth.includes(last_mmm_yyyy) )
				{
					const searchPetrol = ("" + r[i]).toLowerCase();
					if( searchPetrol.includes("petrol") )
					{
						if( undefined != typeof r[i] )
						{
							total = total + parseFloat(r[i+1]);
						}
					}
				}
			}
		}
	}
	return total;
}
function getLastMonthWastedAmount()
{
	let total = 0;
	const allMonths = Object.keys(baseRaw);
	const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
	const dt = new Date(ist);
	const mmm = dt.toString().substr(4,3);
	const yyyy = dt.getFullYear();
	const lastMonthKey = mmm + "-" + yyyy;
	for( const month in baseRaw )
	{
		const rows = baseRaw[month];
		for( const r of rows )
		{
			for( let i = 0; r.length > i; ++i )
			{
				const findThismonth = ("" + r[0]);
				const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
				const lastMmm = new Date(ist);
				lastMmm.setMonth(lastMmm.getMonth() - 1);
				var prevmmm=""+lastMmm;
				var last_mmm_yyyy=(""+prevmmm.substr(4,3)+"-"+prevmmm.substr(11,4) );
				if( findThismonth.includes(last_mmm_yyyy) )
				{
					const searchFood = ("" + r[i]).toLowerCase();
					if( searchFood.includes("snack") )
					{
						if( ( undefined !== r[i+1] ) && !isNaN( parseFloat(r[i+1]) ) )
						{
							total = total + parseFloat(r[i+1]);
						}
					}
				}
				{
					const searchXerox = ("" + r[i]).toLowerCase();
					if( searchXerox.includes("xerox") )
					{
						if( ( undefined !== r[i+1] ) && !isNaN( parseFloat(r[i+1]) ) )
						{
							xeroxCopesVal = xeroxCopesVal + parseFloat(r[i+1]);
						}
					}
				}
			}
		}
	}
	return total;
}
function getLastMonthFoodAmount()
{
	let xeroxTotal = 0;
	let total = 0;
	const allMonths = Object.keys(baseRaw);
	const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
	const dt = new Date(ist);
	const mmm = dt.toString().substr(4,3);
	const yyyy = dt.getFullYear();
	const lastMonthKey = mmm + "-" + yyyy;
	for( const month in baseRaw )
	{
		const rows = baseRaw[month];
		for( const r of rows )
		{
			for( let i = 0; r.length > i; ++i )
			{
				const findThismonth = ("" + r[0]);
				const ist = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
				const lastMmm = new Date(ist);
				lastMmm.setMonth(lastMmm.getMonth() - 1);
				var prevmmm=""+lastMmm;
				var last_mmm_yyyy=(""+prevmmm.substr(4,3)+"-"+prevmmm.substr(11,4) );
				if( findThismonth.includes(last_mmm_yyyy) )
				{
					const searchFood = ("" + r[i]).toLowerCase();
					if(		searchFood.includes("bfast")	||
							searchFood.includes("lunch")	||
							searchFood.includes("dinner")	||
							searchFood.includes("soup")	||
							searchFood.includes("livo")	||
							searchFood.includes("liveo")	||
							searchFood.includes("tea")	||
							searchFood.includes("milk")
					)
					{
						if( ( undefined !== r[i+1] ) && !isNaN( parseFloat(r[i+1]) ) )
						{
							total = total + parseFloat(r[i+1]);
						}
					}
				}
			}
		}
	}
	return total;
}
function monthKeyFromDateString( dstr )
{
	try
	{
		const parts = dstr.split("-");
		if( 3 <= parts.length )
		{
			return parts[1] + "-" + parts[2];
		}
		const d = new Date( dstr );
		const m = d.toLocaleString('en-US',{month:'short'});
		const y = d.getFullYear();
		return m + "-" + y;
	}
	catch( e )
	{
		return dstr;
	}
}
function normalizeBase( raw )
{
	const out = {};
	for( const k in raw )
	{
		const rows = raw[k];
		for( const row of rows )
		{
			const date = row[0];
			const mk = monthKeyFromDateString( date );
			if( !out[mk] )
			{
				out[mk] = [];
			}
			out[mk].push( row.slice() );
		}
	}
	return out;
}
function labelOf( mk )
{
	return mk;
}
function populateMonthSelect(monthKeys)
{
	monthSelect.innerHTML = "";
	const optAll = document.createElement('option');
	optAll.value = 'all';
	optAll.textContent = 'All Months';
	monthSelect.appendChild(optAll);
	monthKeys.sort((a, b) => {
		const [monthA, yearA] = a.split('-');
		const [monthB, yearB] = b.split('-');
		const monthIndexA = new Date(`${monthA} 1, ${yearA}`).getMonth();
		const monthIndexB = new Date(`${monthB} 1, ${yearB}`).getMonth();
		if( yearA !== yearB )
		{
			return yearB - yearA;
		}
		return monthIndexB - monthIndexA;
	});
	for( const mk of monthKeys )
	{
		const opt = document.createElement('option');
		opt.value = mk;
		opt.textContent = mk;
		monthSelect.appendChild(opt);
	}
}
function currentMonthKey()
{
	const d = new Date();
	const mo = d.toLocaleString('en-US',{month:'short'});
	const yr = d.getFullYear();
	return mo + "-" + yr;
}
