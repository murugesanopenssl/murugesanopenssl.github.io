function writeMenu()
{
	location_url=window.location.href;
	document.write(`
			<TABLE border='1' style='width:100%;height=30px;'>
				<TR>`);
	if( -1 == location_url.indexOf("index.html") && -1 != location_url.indexOf("NMurugesan_cv") )
	{
		if( -1 != location_url.indexOf("NMurugesan_cv") )
		{
			document.write( `<TD style="text-align:right;vertical-align:top;" bgcolor='orange'>`);
		}
		else
		{
			document.write( `<TD style="text-align:right;vertical-align:top;">`);
		}
	}
	else
	{
		document.write( `<TD style="text-align:right;vertical-align:top;" bgcolor='orange'>`);
	}
	document.write( `<DIV class="submenu">`);
	if( -1 == location_url.indexOf("index.html") )
	{
		document.write(	`<A href='index.html'>Home12</A>`);
	}
	else
	{
		document.write(	`<A>Home2</A>`);
	}
	if( -1 != location_url.indexOf("NMurugesan_cv") )
	{
		document.write(		`<DIV class="submenu no-link">Murugesan N CV`);
	}
	else
	{
		document.write(		`<DIV class="submenu"><A href="NMurugesan_cv.html">Murugesan N CV</A>`);
	}
	if( -1 != location_url.indexOf("openssl_speed") )
	{
		document.write(		`<DIV class="submenu no-link">OpenSSL Speed`);
	}
	else
	{
		document.write(		`<DIV class="submenu"><A href="openssl_speed.html">OpenSSL Speed</A>`);
	}
	document.write(		`</DIV>
						</DIV>
					</TD>`);
	if( -1 == location_url.indexOf("spending.html") && -1 == location_url.indexOf("displayMoneyHelpMenu") )
	{
		document.write(	`<TD style="text-align:right;vertical-align:top;">`);
	}
	else
	{
		document.write(	`<TD style="background-color:orange;text-align:right;vertical-align:top;">`);
	}
	document.write(		`<DIV class="menu">`);
	if( -1 == location_url.indexOf("spending.html") && -1 == location_url.indexOf("displayMoneyHelpMenu") )
	{
		document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp</A>`);
	}
	else
	{
		if( -1 !== location_url.indexOf("displayMoneyHelpMenu"))
		{
			document.write(			`<A>Moneyhelp</A>`);
		}
		else
		{
			document.write(			`<A href='displayMoneyHelpMenu.html'>Moneyhelp</A>`);
		}
	}
	document.write(				`<DIV class="submenu">
								<A href="displayMoneyHelpMenu.html">Financial Resource</A>
								<A href="displayMoneyHelpMenu.html">Government Resource</A>`);
	let currentPage = window.location.pathname.split("/").pop();  // gets "index.html" or "spending.html"
	if( "spending.html" !== currentPage )
	{
		document.write(			`<A href="spending.html" onclick='toggleTable(event);'>Save Money Daily</A>`);
	}
	else
	{
		// document.write( `<A onclick='toggleTable(event);' style='display:block;'><B><U><FONT color='red'>Save1 Money Daily</B></U></FONT>`);
		document.write( `<A href='spending.html' onclick="toggleTable(event)" id="PreventWastagehref">Save Money Daily</A>`);
	}
	document.write(			`</DIV>
						</DIV>
					</TD>
					<TD style="text-align:right;vertical-align:top;">
						<DIV class="menu">
							<A href='ShareKnowledgeTransferToPeople.html'>Share knowledge transfer</A>
							<DIV class="submenu">
								<A href="NMurugesan_cv.html">Murugesan N CV</A>
								<A href="openssl_speed.html">OpenSSL Speed</A>
							</DIV>
						</DIV>
					</TD>
					<TD style="text-align:right;vertical-align:top;">
						<DIV class="menu">
							<A href="remove-blockages-kitchen-pvc-outflow-pipe.html">Unclog Kitchen Drain</A>
							<DIV class="submenu">
								<A href="openssl_speed.html">OpenSSL Speed</A>
							</DIV>
						</DIV>
					</TD>
					<TD style="text-align:right;vertical-align:top;">
						<DIV class="menu">
							<A href="Visitor_count.html">Visitor count</A>
						</DIV>
					</TD>
					<TD style="text-align:right;vertical-align:top;">
						<DIV class="menu">
							<A href="tamil-calendar.html">Tamil/Gregorian calendar</A>
						</DIV>
					</TD>`);
		if( -1 !== location_url.indexOf("my_exercise") )
		{
			document.write( `<TD style="background-color:orange;text-align:right;vertical-align:top;">`);
		}
		else
		{
			document.write( `<TD style="text-align:right;vertical-align:top;">`);
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