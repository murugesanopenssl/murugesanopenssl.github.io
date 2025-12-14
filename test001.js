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
		-1 !== location_url.indexOf("NMurugesan_cv")		||
		-1 !== location_url.indexOf("openssl_speed")		||
		-1 !== location_url.indexOf("Sustainable_Living")	
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
		document.write(`Home1`);
	}
	else if( -1 !== location_url.indexOf("poems") )
	{
		document.write( `<DIV class="menu" style="text-align:right; vertical-align:top;">`);
		document.write(`<A href='../index.html'>Home2</A>`);
	}
	else
	{
		document.write( `<DIV class="menu" style="text-align:right; vertical-align:top;">`);
		document.write(`<A href='index.html'><FONT color='black'>Home3</FONT></A>`);
	}
	if( -1 != location_url.indexOf("Sustainable_Living") )
	{
		document.write(		`<DIV class="submenu"><FONT color='black'>Sustainable  Living</FONT>&nbsp;`);
	}
	else
	{
		if( -1 !== location_url.indexOf("poems") )
		{
			document.write(		`<DIV class="submenu"><A href="../Sustainable_Living.html">Sustainable  Living&nbsp;</A>`);
		}
		else
		{
			document.write(		`<DIV class="submenu"><A href="Sustainable_Living.html">Sustainable  Living&nbsp;</A>`);
		}
	}
	if( -1 != location_url.indexOf("NMurugesan_cv") )
	{
		// document.write(		`<DIV class="submenu no-link">Murugesan2 N CV&nbsp;`);
		document.write(		`<DIV class="submenu"><A href="NMurugesan_cv.html">Murugesan3 N CV&nbsp;</A>`);
	}
	else
	{
		if( -1 !== location_url.indexOf("poems") )
		{
			document.write(		`<DIV class="submenu"><A href="../NMurugesan_cv.html">Murugesan3 N CV&nbsp;</A>`);
		}
		else
		{
			document.write(		`<DIV class="submenu"><A href="NMurugesan_cv.html">Murugesan3 N CV&nbsp;</A>`);
		}
	}
	if( -1 != location_url.indexOf("openssl_speed") )
	{
		document.write(		`<DIV class="submenu no-link"><FONT color='black'>OpenSSL Speed</FONT>&nbsp;`);
	}
	else
	{
		if( -1 !== location_url.indexOf("poems") )
		{
			document.write(		`<DIV class="submenu"><A href="../openssl_speed.html">OpenSSL Speed&nbsp;</A>`);
		}
		else
		{
			document.write(		`<DIV class="submenu"><A href="openssl_speed.html">OpenSSL Speed&nbsp;</A>`);
		}
	}
	document.write(		`</DIV>
						</DIV>
					</TD>`);
	if(	-1 == location_url.indexOf("displayMoneyHelpMenu") &&
		-1 == location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps") &&
		-1 == location_url.indexOf("Bharath_gas_booking_steps") &&
		-1 == location_url.indexOf("post-office-nsc") &&
		-1 == location_url.indexOf("SBI_ETDR_INTEREST") &&
		-1 == location_url.indexOf("post-office-mis") &&
		-1 != location_url.indexOf("fd-and-savings-all-banks" )
	)
	{
		document.write(	`<TD style="text-align:right;vertical-align:top;">`);
	}
	else
	{
		if(	-1 === location_url.indexOf("index")					  &&
			-1 === location_url.indexOf("Sustainable_Living")			&&
			-1 === location_url.indexOf("NMurugesan_cv")				&&
			-1 === location_url.indexOf("spending")					&&
			-1 == location_url.indexOf("ShareKnowledgeTransferToPeople")		&&
			-1 == location_url.indexOf("Visitor_count")				&&
			-1 == location_url.indexOf("my_exercise")				&&
			-1 == location_url.indexOf("MyUniverseDream")				&&
			-1 == location_url.indexOf("Windows_network_icon")			&&
			-1 == location_url.indexOf("windows-network")				&&
			-1 == location_url.indexOf("Set-Unlimited-Windows-10-Network")		&&
			-1 == location_url.indexOf("Windows_ERR_HELP")				&&
			-1 == location_url.indexOf("privacy")					&&
			-1 == location_url.indexOf("tamil-calendar")				&&
			-1 == location_url.indexOf("poems")					&&
			-1 == location_url.indexOf("cygwin_laptop_battery_alert")		&&
			-1 == location_url.indexOf("remove-blockages-kitchen-pvc-outflow-pipe")	&&
			-1 === location_url.indexOf("openssl_speed")
		)
		{
			document.write(	`<TD style="background-color:orange;text-align:right;vertical-align:top;">`);
		}
		else
		{
			document.write(	`<TD style="text-align:right;vertical-align:top;">`);
		}
	}
	document.write(		`<DIV class="menu">`);
	if(	-1 == location_url.indexOf("poems")					&&
		-1 == location_url.indexOf("privacy")					&&
		-1 == location_url.indexOf("Sustainable_Living")			&&
		-1 == location_url.indexOf("NMurugesan_cv")				&&
		-1 == location_url.indexOf("openssl_speed")				&&
		-1 == location_url.indexOf("displayMoneyHelpMenu")			&&
		-1 == location_url.indexOf("Visitor_count")				&&
		-1 == location_url.indexOf("tamil-calendar")				&&
		-1 == location_url.indexOf("my_exercise")				&&
		-1 == location_url.indexOf("Windows_ERR_HELP")				&&
		-1 == location_url.indexOf("Windows_network_icon")			&&
		-1 == location_url.indexOf("cygwin_laptop_battery_alert")		&&
		-1 == location_url.indexOf("windows-network")				&&
		-1 == location_url.indexOf("spending")					&&
		-1 == location_url.indexOf("post-office-mis")				&&
		-1 == location_url.indexOf("Increase-Daily-Salary")			&&
		-1 == location_url.indexOf("post-office-nsc")				&&
		-1 == location_url.indexOf("Bharath_gas_booking_steps")			&&
		-1 == location_url.indexOf("SBI_ETDR_")					&&
		-1 == location_url.indexOf("earth_politics_or_general_age")		&&
		-1 == location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps")	&&
		-1 == location_url.indexOf("Set-Unlimited-Windows-10-Network")		&&
		-1 == location_url.indexOf("remove-blockages-kitchen-pvc-outflow-pipe")	&&
		-1 == location_url.indexOf("ShareKnowledgeTransferToPeople")		&&
		-1 == location_url.indexOf("index")	
	)
	{
		document.write(			`<A href='../displayMoneyHelpMenu.html'>Moneyhelp1</A>`);
	}
	else if( -1 == location_url.indexOf("displayMoneyHelpMenu")			&&
		-1 == location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps")	&&
		-1 == location_url.indexOf("post-office-nsc")				&&
		-1 == location_url.indexOf("SBI_ETDR_INTEREST")				&&
		-1 == location_url.indexOf("post-office-mis")				&&
		-1 == location_url.indexOf("spending")					&&
		-1 == location_url.indexOf("windows-network")				&&
		-1 == location_url.indexOf("poems")					&&
		-1 == location_url.indexOf("cygwin_laptop_battery_alert")		&&
		-1 == location_url.indexOf("ShareKnowledgeTransferToPeople")		&&
		-1 == location_url.indexOf("fd-and-savings-all-banks" )
	)
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'><Font color='black'>Moneyhelp2</FONT></A>`);
	}
	else if(	-1 !== location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps")
	)
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp5</A>`);
	}
	else if(	-1 !== location_url.indexOf("post-office-mis") &&
				-1 != location_url.indexOf("SBI_ETDR_INTEREST") &&
				-1 != location_url.indexOf("post-office-nsc")   &&
				-1 != location_url.indexOf("fd-and-savings-all-banks" )
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
			-1 !== location_url.indexOf("post-office-mis")  &&
			-1 != location_url.indexOf("fd-and-savings-all-banks" )
		)
		{
			document.write(			`<A>Moneyhelp3</A>`);
		}
		else if(	-1 !== location_url.indexOf("poems")			&&
				-1 != location_url.indexOf("fd-and-savings-all-banks" )	&&
				-1 != location_url.indexOf("spending" )
		)
		{
			document.write(			`<A href='../displayMoneyHelpMenu.html'>Moneyhelp4</A>`);
		}
		else
		{
			if(	-1 == location_url.indexOf("ShareKnowledgeTransferToPeople")   &&
				-1 == location_url.indexOf("cygwin_laptop_battery_alert")   	
			)
			{
				document.write(			`<A href='displayMoneyHelpMenu.html'><Font color='black'>Moneyhelp7</FONT></A>`);
			}
			else
			{
				document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp8</A>`);
			}
		}
	}
document.write(`<DIV class="submenu">`);
if( -1 !== location_url.indexOf("poems") )
{
	/* Financial Resource (with children) - using span for hover trigger */
	document.write(`<SPAN style="position:relative;display:block;">`);
	document.write(`<A href="../displayMoneyHelpMenu.html?#FinanceServices">Financial Resource</A>`);
	document.write(`<DIV class="submenu" style="display:none;position:absolute;left:100%;top:0;background:#fff;border:1px solid black;padding:5px 0;z-index:999;min-width:180px;">`);
	document.write(`<A href="../Increase-Daily-Salary.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Increase Daily Salary</A>`);
	document.write(`<A href="../post-office-nsc.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Post Office NSC</A>`);
	document.write(`<A href="../post-office-mis.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Post Office MIS1</A>`);
	document.write(`<A href="../Bharath_gas_booking_steps.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Bharath Gas Online</A>`);
	document.write(`<A href="../Indian-Oil-Cylinder-Booking-Online-Steps.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Indian Gas Online</A>`);
	document.write(`<A href="../SBI_ETDR_INTEREST.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">SBI Fixed Deposit</A>`);
	document.write(`</DIV>`);
	document.write(`</SPAN>`);
	
	/* Government Resource (with children) - using span for hover trigger */
	document.write(`<SPAN style="position:relative;display:block;">`);
	document.write(`<A href="../displayMoneyHelpMenu.html?#GovtResourceMenu">Government Resource</A>`);
	document.write(`<DIV class="submenu" style="display:none;position:absolute;left:100%;top:0;background:#fff;border:1px solid black;padding:5px 0;z-index:999;min-width:180px;">`);
	document.write(`<A href="../earth_politics_or_general_age.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">India GDP</A>`);
	document.write(`</DIV>`);
	document.write(`</SPAN>`);
}
else
{
	/* Financial Resource (with children) - using span for hover trigger */
	document.write(`<SPAN style="position:relative;display:block;">`);
	document.write(`<A href="displayMoneyHelpMenu.html?#FinanceServices">Financial Resource</A>`);
	document.write(`<DIV class="submenu" style="display:none;position:absolute;left:100%;top:0;background:#fff;border:1px solid black;padding:5px 0;z-index:999;min-width:180px;">`);
	document.write(`<A href="Increase-Daily-Salary.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Increase Daily Salary</A>`);
	document.write(`<A href="post-office-nsc.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Post Office NSC</A>`);
	document.write(`<A href="post-office-mis.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Post Office MIS2</A>`);
	document.write(`<A href="Bharath_gas_booking_steps.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Bharath Gas Online</A>`);
	document.write(`<A href="Indian-Oil-Cylinder-Booking-Online-Steps.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">Indian Gas Online</A>`);
	document.write(`<A href="SBI_ETDR_INTEREST.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">SBI Fixed Deposit</A>`);
	document.write(`</DIV>`);
	document.write(`</SPAN>`);
	
	/* Government Resource (with children) - using span for hover trigger */
	document.write(`<SPAN style="position:relative;display:block;">`);
	document.write(`<A href="displayMoneyHelpMenu.html?#GovtResourceMenu">Government Resource</A>`);
	document.write(`<DIV class="submenu" style="display:none;position:absolute;left:100%;top:0;background:#fff;border:1px solid black;padding:5px 0;z-index:999;min-width:180px;">`);
	document.write(`<A href="earth_politics_or_general_age.html" style="display:block;padding:6px 10px;text-decoration:none;color:black;">India GDP</A>`);
	document.write(`</DIV>`);
	document.write(`</SPAN>`);
}
let currentPage = window.location.pathname.split("/").pop();
document.write(`
	</DIV>
	</DIV>
</TD>
`);
	if( -1 !== location_url.indexOf( "poem" ) )
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;">`);
		document.write(		`<A href='../spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Prevent wasting money to save money</A>`);
	}
	else if( -1 !== location_url.indexOf( "spending.html" ) )
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;background-color:orange;">`);
		document.write(		`<A onclick="toggleTable(event)" id="PreventWastagehref" style='text-color:black;'>Prevent wasting money to save money</A>`);
	}
	else if( -1 !== location_url.indexOf( "spending-chart.html" ) )
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;background-color:orange;">`);
		document.write(		`<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Prevent wasting money to save money</A>`);
	}
	else
	{
		document.write(			`<TD style="text-align:right;vertical-align:top;">`);
		document.write(		`<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref"><FONT color='black'>Prevent wasting money to save money</FONT></A>`);
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
	else if( -1 !== location_url.indexOf("poems") )
	{
		document.write(`<DIV class="menu"><A href="../ShareKnowledgeTransferToPeople.html">Share knowledge transfer</A></DIV>`);
	}
	else
	{
		document.write(`<DIV class="menu"><A href="ShareKnowledgeTransferToPeople.html"><FONT color='black'>Share knowledge transfer</FONT></A></DIV>`);
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
	else if( -1 !== location_url.indexOf("poems") )
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="../remove-blockages-kitchen-pvc-outflow-pipe.html">Unclog Kitchen Drain</A>
				</DIV>
			</TD>
		`);
	}
	else
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="remove-blockages-kitchen-pvc-outflow-pipe.html"><FONT color='black'>Unclog Kitchen Drain</FONT></A>
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
	else if( -1 !== location_url.indexOf("poems") )
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="../Visitor_count.html">Visitor count</A>
				</DIV>
			</TD>
		`);
	}
	else
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="Visitor_count.html"><FONT color='black'>Visitor count</FONT></A>
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
					<DIV class="submenu no-link"><FONT color='black'>Tamil/Gregorian calendar</FONT></DIV>
				</DIV>
			</TD>
		`);
	}
	else if( -1 !== location_url.indexOf("poems") )
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="../tamil-calendar.html"><FONT color='black'>Tamil/Gregorian calendar</FONT></A>
				</DIV>
			</TD>
		`);
	}
	else
	{
		document.write(`
			<TD style="text-align:right;vertical-align:top;">
				<DIV class="menu">
					<A href="tamil-calendar.html"><FONT color='black'>Tamil/Gregorian calendar</FONT></A>
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
			document.write( `<FONT color='black'>My exercise</FONT>`);
		}
		else if( -1 !== location_url.indexOf("poems") )
		{
			document.write( `<A href='../my_exercise.html'><FONT color='black'>My exercise</FONT></A>`);
		}
		else
		{
			document.write( `<A href='my_exercise.html'><FONT color='black'>My exercise</FONT></A>`);
		}
		if( -1 !== location_url.indexOf("Windows_ERR_HELP") )
		{
			document.write(`
				<TD style="text-align:right;vertical-align:top;background-color:orange;">
					<DIV class="menu active-menu">
						<DIV class="submenu no-link"><FONT color='black'>Windows_ERR_HELP1</FONT></DIV>
					</DIV>
				</TD>
			`);
		}
		else if( -1 !== location_url.indexOf("poems") )
		{
			document.write(`
				<TD style="text-align:right;vertical-align:top;">
					<DIV class="menu active-menu">
						<A href="../Windows_ERR_HELP.html"><FONT color='black'>Windows_ERR_HELP2</FONT></A>
					</DIV>
				</TD>
			`);
		}
		else
		{
			if(	-1 !== location_url.indexOf("Windows_network_icon")		||
				-1 !== location_url.indexOf("cygwin_laptop_battery_alert")	||
				-1 !== location_url.indexOf("Set-Unlimited-Windows-10-Network")	||
				-1 !== location_url.indexOf("windows-network")			
			)
			{
				document.write(`
					<TD style="text-align:right;vertical-align:top;background-color:orange;">
						<DIV class="menu active-menu">
							<A href="Windows_ERR_HELP.html"><FONT color='black'>Windows_ERR_HELP3</FONT></A>
						</DIV>
					</TD>
				`);
			}
			else
			{
				document.write(`
					<TD style="text-align:right;vertical-align:top;">
						<DIV class="menu active-menu">
							<A href="Windows_ERR_HELP.html"><FONT color='black'>Windows_ERR_HELP4</FONT></A>
						</DIV>
					</TD>
				`);
			}
		}
		if( -1 === location_url.indexOf("poems") )
		{
			privacyPolicyName='privacy.html';
		}
		else
		{
			privacyPolicyName='../privacy.html';
		}
		if(	-1 !== location_url.indexOf("poems")	||
			-1 !== location_url.indexOf("privacy")	
		)
		{
			document.write( `</DIV>
						</TD>
						<TD style="text-align:left;vertical-align:top;background-color:orange;">
							<DIV class="menu">
								<A href="`+privacyPolicyName+`"><FONT color='black'>Privacy policy</FONT></A>
							</DIV>
						</TD>
					</TR>
				</TABLE>`);
		}
		else
		{
			document.write( `</DIV>
						</TD>
						<TD style="text-align:left;vertical-align:top;">
							<DIV class="menu">
									<A href="`+privacyPolicyName+`"><FONT color='black'>Privacy policy</FONT></A>
							</DIV>
						</TD>
					</TR>
				</TABLE>`);
		}
}
// New code Sun 07-Dec-2025 01:19 PM
function showDefault() 
{
    document.getElementById("CategoryAmountDetailsTab").style.display = "none";
    document.getElementById("HomeTable").style.display = "none";

    let p = document.getElementById("PreventWastage"); // <<— FIXED ID
    if (p) p.style.display = "table";
}
