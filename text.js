const monthNamesTamil = {
	"Jan": "ஜனவரி",
	"Feb": "பிப்ரவரி",
	"Mar": "மார்ச்",
	"Apr": "ஏப்ரல்",
	"May": "மே",
	"Jun": "ஜூன்",
	"Jul": "ஜூலை",
	"Aug": "ஆகஸ்ட்",
	"Sep": "செப்டம்பர்",
	"Oct": "அக்டோபர்",
	"Nov": "நவம்பர்",
	"Dec": "டிசம்பர்"
};
function getChartTitle(selectedMonth, selectedYear)
{
	if( "ALL" === selectedMonth )
	{
		return `${selectedYear} வருடத்தின் மாதாந்திர மொத்த செலவு`;
	}
	else
	{
		const monthTamil = monthNamesTamil[selectedMonth] || selectedMonth;
		return `${monthTamil}-${selectedYear} மாதாந்திர மொத்த செலவு`;
	}
}
function writeMenu()
{
	location_url=window.location.href;
	document.write(`
			<TABLE border='1' style='width:100%;height=30px;'>
				<TR>`);
	if( -1 !== location_url.indexOf("index.html") && -1 === location_url.indexOf("poems") )
	{
		document.write(`<TD style="display:flex; justify-content:flex-end; align-items:flex-start; background:orange;">`);
	}
	else if(
		-1 !== location_url.indexOf("NMurugesan_cv")	||
		-1 !== location_url.indexOf("openssl_speed")	
	)
	{
		document.write(`<TD style="text-align:right;vertical-align:top;" bgcolor='orange'>`);
	}
	else
	{
		document.write(`<TD style="text-align:right;vertical-align:top;">`);
	}
	if( -1 !== location_url.indexOf("index.html") && -1 === location_url.indexOf("poems") )
	{
		document.write( `<DIV class="menu" style="text-align:right; vertical-align:top;">`);
		document.write(`Home`);
	}
	else
	{
		document.write( `<DIV class="menu" style="text-align:right; vertical-align:top;">`);
		document.write(`<A href='index.html'>Home</A>`);
	}
	if( -1 != location_url.indexOf("NMurugesan_cv") )
	{
		document.write(		`<DIV class="submenu no-link">Murugesan2 N CV&nbsp;`);
	}
	else
	{
		document.write(		`<DIV class="submenu"><A href="NMurugesan_cv.html">Murugesan3 N CV&nbsp;</A>`);
	}
	if( -1 != location_url.indexOf("openssl_speed") )
	{
		document.write(		`<DIV class="submenu no-link">OpenSSL Speed&nbsp;`);
	}
	else
	{
		document.write(		`<DIV class="submenu"><A href="openssl_speed.html">OpenSSL Speed&nbsp;</A>`);
	}
	document.write(		`</DIV>
						</DIV>
					</TD>`);
	if(	-1 == location_url.indexOf("displayMoneyHelpMenu") &&
		-1 == location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps") &&
		-1 == location_url.indexOf("Bharath_gas_booking_steps") &&
		-1 == location_url.indexOf("post-office-nsc") &&
		-1 == location_url.indexOf("SBI_ETDR_INTEREST") &&
		-1 == location_url.indexOf("post-office-mis")
	)
	{
		document.write(	`<TD style="text-align:right;vertical-align:top;">`);
	}
	else
	{
		document.write(	`<TD style="background-color:orange;text-align:right;vertical-align:top;">`);
	}
	document.write(		`<DIV class="menu">`);
	if( -1 == location_url.indexOf("displayMoneyHelpMenu") &&
		-1 == location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps") &&
		-1 == location_url.indexOf("post-office-nsc") &&
		-1 == location_url.indexOf("SBI_ETDR_INTEREST") &&
		-1 == location_url.indexOf("post-office-mis")
	)
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp1</A>`);
	}
	else if( -1 !== location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps") )
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp5</A>`);
	}
	else if(	-1 !== location_url.indexOf("post-office-mis") &&
				-1 != location_url.indexOf("SBI_ETDR_INTEREST") &&
				-1 != location_url.indexOf("post-office-nsc")
	)
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp6</A>`);
	}
	else
	{
		if( -1 !== location_url.indexOf("displayMoneyHelpMenu") &&
			-1 !== location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps") &&
			-1 !== location_url.indexOf("post-office-nsc") &&
			-1 !== location_url.indexOf("SBI_ETDR_INTEREST") &&
			-1 !== location_url.indexOf("post-office-mis") 
		)
		{
			document.write(			`<A>Moneyhelp2</A>`);
		}
		else
		{
			document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp3</A>`);
		}
	}
	document.write(				`<DIV class="submenu">
								<A href="displayMoneyHelpMenu.html?#FinanceServices">Financial Resource</A>
								<A href="displayMoneyHelpMenu.html?#GovtResourceMenu">Government Resource</A>`);
	let currentPage = window.location.pathname.split("/").pop();
	if( "spending.html" !== currentPage )
	{
		// document.write(			`<A href="spending.html" onclick='toggleTable(event);'>Save1 Money Daily</A>`);
	}
	else
	{
		// document.write( `<A onclick='toggleTable(event);' style='display:block;'><B><U><FONT color='red'>Save1 Money Daily</B></U></FONT>`);
		// document.write( `<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Save2 Money Daily</A>`);
	}
	document.write(			`</DIV>
						</DIV>
					</TD>`);
	if( -1 !== location_url.indexOf( "spending.html" ) )
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;background-color:orange;">`);
		document.write(		`<A onclick="toggleTable(event)" id="PreventWastagehref" style='text-color:white;'>Save Money Daily</A>`);
	}
	else if( -1 !== location_url.indexOf( "spending-chart.html" ) )
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;background-color:orange;">`);
		document.write(		`<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Save Money Daily</A>`);
	}
	else
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;">`);
		document.write(		`<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Save Money Daily</A>`);
	}
	document.write(		`</TD>`);
	if( -1 !== location_url.indexOf( "ShareKnowledgeTransferToPeople" ) )
	{
		document.write(		`<TD style="text-align:right;vertical-align:top;background-color:orange;">`);
	}
	else
	{
		document.write(		`<TD style="text-align:right;vertical-align:top;">`);
	}
	if( -1 !== location_url.indexOf("ShareKnowledgeTransferToPeople") )
	{
		document.write(`<DIV class="menu active-menu"><DIV class="submenu no-link">Share knowledge transfer</DIV></DIV>`);
	}
	else
	{
		document.write(`<DIV class="menu"><A href="ShareKnowledgeTransferToPeople.html">Share knowledge transfer</A></DIV>`);
	}
	document.write(		`</DIV>
					</TD>`);
	if( -1 !== location_url.indexOf("remove-blockages-kitchen-pvc-outflow-pipe") )
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;background-color:orange;">
				<DIV class="menu active-menu">
					<DIV class="submenu no-link">Unclog Kitchen Drain</DIV>
				</DIV>
			</TD>
		`);
	}
	else
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="remove-blockages-kitchen-pvc-outflow-pipe.html">Unclog Kitchen Drain</A>
				</DIV>
			</TD>
		`);
	}
	if( -1 !== location_url.indexOf("Visitor_count") )
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;background-color:orange;">
				<DIV class="menu active-menu">
					<DIV class="submenu no-link">Visitor count</DIV>
				</DIV>
			</TD>
		`);
	}
	else
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="Visitor_count.html">Visitor count</A>
				</DIV>
			</TD>
		`);
	}
	if( -1 !== location_url.indexOf("tamil-calendar") )
	{
		// Active page version
		document.write(`
			<TD style="text-align:right;vertical-align:top;background-color:orange;">
				<DIV class="menu active-menu">
					<DIV class="submenu no-link">Tamil/Gregorian calendar</DIV>
				</DIV>
			</TD>
		`);
	}
	else
	{
		// Normal link version
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="tamil-calendar.html">Tamil/Gregorian calendar</A>
				</DIV>
			</TD>
		`);
	}
		if( -1 !== location_url.indexOf("my_exercise") )
		{
			document.write( `<TD style="display:flex; justify-content:flex-end; align-items:flex-start; background:orange;">`);
		}
		else
		{
			document.write( `<TD style="display:flex; justify-content:flex-end; align-items:flex-start;">`);
		}
		document.write( `	<DIV class="">`);
		if( -1 !== location_url.indexOf("my_exercise") )
		{
			document.write( `My exercise`);
		}
		else
		{
			document.write( `<A href='my_exercise.html'>My exercise</A>`);
		}
		if( -1 !== location_url.indexOf("Windows_ERR_HELP") )
		{
			document.write(`
				<TD style="text-align:right;vertical-align:top;background-color:orange;">
					<DIV class="submenu no-link">
						<DIV class="submenu no-link">Windows_ERR_HELP</DIV>
					</DIV>
				</TD>
			`);
		}
		else
		{
			document.write(`
				<TD style="text-align:right;vertical-align:top;">
					<DIV class="menu active-menu">
						<A href="Windows_ERR_HELP.html">Windows_ERR_HELP</A>
					</DIV>
				</TD>
			`);
		}
		if( -1 !== location_url.indexOf("poems") )
		{
			document.write( `</DIV>
						</TD>
						<TD style="text-align:right;vertical-align:top;">
							<DIV class="menu">
								<A href="poems/index.html">My tamil poems</A>
								<DIV class="submenu">
									<A href="1.html">My poem 01</A>
									<A href="2.html">My poem 02</A>
									<A href="3.html">My poem 03</A>
									<A href="4.html">My poem 04</A>
									<A href="5.html">My poem 05</A>
								</DIV>
							</DIV>
						</TD>
					</TR>
				</TABLE>`);
		}
		else
		{
			document.write( `</DIV>
						</TD>
						<TD style="text-align:right;vertical-align:top;">
							<DIV class="menu">
								<A href="poems/index.html">My tamil poems</A>
								<DIV class="submenu">
									<A href="poems/1.html">My poem 01</A>
									<A href="poems/2.html">My poem 02</A>
									<A href="poems/3.html">My poem 03</A>
									<A href="poems/4.html">My poem 04</A>
									<A href="poems/5.html">My poem 05</A>
								</DIV>
							</DIV>
						</TD>
					</TR>
				</TABLE>`);
		}
}
