var indx=0;
if( window.location.href.includes('index.html') )
{
	document.write("<A><Font color='orange'>Home</FONT></A>");
}
else
{
	document.write("<A href='index.html' class='link-style' href='/ExplorerPatcher-Exception-Windows-11-Home-Single-Language/spending.html' id='PreventWastagehref' style='color:blue'>Home</A>");
}
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
