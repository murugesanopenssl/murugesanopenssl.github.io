import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const visitsRef = ref(db, 'visitor_count');
push(visitsRef, { timestamp: new Date().toISOString() });
var indx=0;
function showHomeTable()
{
	const tamilhomeTable = document.getElementById('TamilHomeTable');
	const englishhomeTable = document.getElementById('EnglishHomeTable');
	const preventWastage = document.getElementById('PreventWastage');
	const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
	preventWastage.style.display = 'none';
	categoryAmount.style.display = 'none';
	tamilhomeTable.style.display = 'table';
	englishhomeTable.style.display = 'table';
}
function toggleTable()
{
	alert(windows.location.href);
	const homeLink = document.getElementById('Homehref');
	const preventLink = document.getElementById('PreventWastagehref');
	const tamilhomeTable = document.getElementById('TamilHomeTable');
	const englishhomeTable = document.getElementById('EnglishHomeTable');
	const preventWastage = document.getElementById('PreventWastage');
	const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
	// check which link was clicked
	const clickedId = event.target.id;
	if( clickedId === 'Homehref')
	{
		if( tamilhomeTable.style.display === 'none' || tamilhomeTable.style.display === '')
		{
			// Home is disabled → enable it
			tamilhomeTable.style.display = 'table';
			englishhomeTable.style.display = 'table';
			categoryAmount.style.display = 'none';
			preventWastage.style.display = 'none';
		}
		else
		{
			// Home is enabled → disable it and show categoryAmount
			tamilhomeTable.style.display = 'none';
			englishhomeTable.style.display = 'none';
			categoryAmount.style.display = 'table';
			preventWastage.style.display = 'none';
		}
	}
	if( clickedId === 'PreventWastagehref')
	{
		if( preventWastage.style.display === 'none' || preventWastage.style.display === '')
		{
			// PreventWastage is disabled → enable it
			preventWastage.style.display = 'table';
			categoryAmount.style.display = 'none';
			tamilhomeTable.style.display = 'none';
			englishhomeTable.style.display = 'none';
		}
		else
		{
			// PreventWastage is enabled → disable it and show categoryAmount
			preventWastage.style.display = 'none';
			categoryAmount.style.display = 'table';
			tamilhomeTable.style.display = 'none';
			englishhomeTable.style.display = 'none';
		}
	}
}
function DispIndx ()
{
	indx=indx+1;
	DispVal = String(indx).padStart(3, '0');
	document.write( DispVal+")" );
}
