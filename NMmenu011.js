function showDefault()
{
	if( document.getElementById( "CategoryAmountDetailsTab" ) )
	{
		document.getElementById( "CategoryAmountDetailsTab" ).style.display = "none";
	}
	if( document.getElementById( "HomeTable" ) )
	{
		document.getElementById( "HomeTable" ).style.display = "none";
	}
	let p = document.getElementById( "PreventWastage" );
	if( p )
	{
		p.style.display = "table";
	}
}
function getTodaysDate()
{
	var today = new Date();
	var day = today.getDate();
	var month = today.toLocaleString( 'default', { month: 'short' } );
	var year = today.getFullYear();
	return day + '-' + month + '-' + year;
}
function addTodaysRow()
{
	var table = document.getElementById( "PreventWastage" ).getElementsByTagName( 'tbody' )[0];
	var newRow = table.insertRow(table.rows.length );
	var cell1 = newRow.insertCell(0);
}
function toggleSubmenu01()
{
	var submenu = document.getElementById( 'financialResourcesMenu01' );
	var button = document.getElementById( 'toggleButton01' );
	if( 'none' === submenu.style.display )
	{
		submenu.style.display = 'block';
		button.innerHTML = 'Close Financial Service Menu';
	}
	else
	{
		submenu.style.display = 'none';
		button.innerHTML = 'Show Financial Resources';
	}
}
function toggleSubmenu02()
{
	var submenu = document.getElementById( 'financialResourcesMenu02' );
	var button = document.getElementById( 'toggleButton02' );
	if( 'none' === submenu.style.display )
	{
		submenu.style.display = 'block';
		button.innerHTML = 'Close GOVT RESOURCE Menu';
	}
	else
	{
		submenu.style.display = 'none';
		button.innerHTML = 'Show GOVT Resources';
	}
}
			function MainPageHomeLoadContent(event, htmlFileName )
			{
				if( "HandleBankAMB.html" == htmlFileName )
				{
					document.title = "ATM Card exception usage";
				}
				else if( "displayMoneyHelpMenu.html" == htmlFileName )
				{
					document.title = "Money Help Menu";
				}
				else if( "SavedAmt.html" == htmlFileName )
				{
					document.title = "My saved amount";
				}
				event.preventDefault();
				var xhr = new XMLHttpRequest();
				var url = htmlFileName;
				xhr.open( "GET", url, true );
				xhr.responseType = "document";
				xhr.onload = function()
				{
					if( 200 === xhr.status )
					{
						var content = xhr.response.documentElement.innerHTML;
						document.querySelector( ".main-content" ).innerHTML = content;
						let lifeFinanceHelperLink = document.querySelector( ".sidebar-header #life-finance-helper" );
						if( lifeFinanceHelperLink )
						{
							lifeFinanceHelperLink.setAttribute( "href", "#" );
							lifeFinanceHelperLink.setAttribute( "onclick", "loadMainContent(event )" );
						}
						document.querySelectorAll( ".nav-item" ).forEach( item =>
							{
								item.classList.remove( "active" );
							}
						);
						let activeLink = document.querySelector(`[href="${htmlFileName}"]`);
						if( activeLink )
						{
							activeLink.closest( ".nav-item" ).classList.add( "active" );
						}
					}
					else
					{
						alert( "Failed to load content: " + xhr.status );
					}
				};
				xhr.onerror = function()
				{
					alert( "Request error occurred." );
				};
				xhr.send();
			}
			function loadMainContent(event )
			{
				event.preventDefault();
				var originalContent = `<HEADER class="content-header">
							<H1>Welcome to Life Finance Helper1</H1>
							<P class="tagline">Empowering financial literacy for low and middle-class families</P>
				</HEADER>
				<SECTION class="hero-section">
						<TABLE class="content-table">
							<TR>
								<TD class="content-column">
									<DIV class="mission-card">
										<H2>Our Mission</H2>
										<P>
											After 2019, I noticed increasing financial difficulties among low and middle-class families. This website shares practical information to help people handle money issues throughout their lifetime.
										</P>
									</DIV>
								</TD>
								<TD class="content-column">
									<DIV class="purpose-card">
										<H2>Our Purpose</H2>
										<P>
											Based on the challenges people face, this site provides comprehensive guidance on banking, spending management, utilities, and technology - all aimed at helping you make better financial decisions and live more comfortably.
										</P>
									</DIV>
								</TD>
							<TD class="content-column">
								<DIV class="feature-box">
									<DIV class="feature-icon">&#x1F3E6;</DIV>
									<H3>Banking Solutions</H3>
									<P>Learn about Post Office schemes, FD interest rates, inter-bank transfers, and more.</P>
								</DIV>
							</TD>
							</TR>
							<TR>
							<TD class="content-column">
								<DIV class="feature-box">
									<DIV class="feature-icon">&#x1F4B0;</DIV>
										<H3>Smart Spending</H3>
										<P>Track your daily expenses, visualize spending patterns, and discover saving strategies.</P>
									</DIV>
								</TD>
								<TD class="content-column">
									<DIV class="feature-box">
										<DIV class="feature-icon">&#x1F527;</DIV>
										<H3>Practical Utilities</H3>
										<P>Home maintenance tips and knowledge sharing for everyday household problems.</P>
									</DIV>
								</TD>
							</TR>
						</TABLE>
				</SECTION>
				`;
				document.querySelector( ".main-content" ).innerHTML = originalContent;
				document.querySelector( ".sidebar-header #life-finance-helper" ).removeAttribute( "href" );
				document.querySelector( ".sidebar-header #life-finance-helper" ).removeAttribute( "onclick" );
			}
document.addEventListener( 'DOMContentLoaded', function()
{
	const navItems = document.querySelectorAll( '.nav-item' );
	const submenuItems = document.querySelectorAll( '.submenu-item' );
	navItems.forEach( item =>
		{
			const navLink = item.querySelector( '.nav-link' );
			const submenu = item.querySelector( '.submenu' );
			if( submenu )
			{
				navLink.addEventListener( 'click', function(e )
					{
						e.preventDefault();
						navItems.forEach( otherItem =>
							{
								if( item !== otherItem )
								{
									otherItem.classList.remove( 'active' );
								}
							}
						);
						item.classList.toggle( 'active' );
					}
				);
			}
		}
	);
submenuItems.forEach( item =>
{
	const submenuLink = item.querySelector( '.submenu-link' );
	const submenuLevel2 = item.querySelector( '.submenu-level-2' );
	if( submenuLevel2 )
	{
		submenuLink.addEventListener( 'click', function(e )
			{
				e.stopPropagation();
				submenuItems.forEach( otherItem =>
					{
						if( item !== otherItem )
						{
							otherItem.classList.remove( 'active' );
						}
					}
				);
				item.classList.toggle( 'active' );
			}
		);
	}
}
);
const currentPath = window.location.pathname;
const allLinks = document.querySelectorAll( '.sidebar a' );
allLinks.forEach( link =>
{
	if( currentPath === link.getAttribute( 'href' ) || link.href === window.location.href )
	{
		link.classList.add( 'active' );
		let parent = link.closest( '.nav-item' );
		if( parent )
		{
			parent.classList.add( 'active' );
		}
		let submenuParent = link.closest( '.submenu-item' );
		if( submenuParent )
		{
			submenuParent.classList.add( 'active' );
		}
	}
}
);
const focusableElements = document.querySelectorAll( '.sidebar a, .sidebar button' );
focusableElements.forEach( (element, index ) =>
{
	element.addEventListener( 'keydown', function(e )
		{
			let nextElement;
			switch( e.key )
			{
				case 'ArrowDown':
					e.preventDefault();
					nextElement = focusableElements[index + 1];
					if( nextElement )
					{
						nextElement.focus();
					}
					break;
				case 'ArrowUp':
					e.preventDefault();
					nextElement = focusableElements[index - 1];
					if( nextElement )
					{
						nextElement.focus();
					}
					break;
				case 'Enter':
				case ' ':
					e.preventDefault();
					element.click();
					break;
			}
		}
	);
}
);
let touchStartX = 0;
let touchEndX = 0;
function handleSwipe()
{
	if( 768 >= window.innerWidth )
	{
		const sidebar = document.querySelector( '.sidebar' );
		if( touchStartX - 50 > touchEndX )
		{
			sidebar.style.transform = 'translateX(-100%)';
		}
		if( touchStartX + 50 < touchEndX )
		{
			sidebar.style.transform = 'translateX(0)';
		}
	}
}
document.addEventListener( 'touchstart', e =>
{
touchStartX = e.changedTouches[0].screenX;
}
);
document.addEventListener( 'touchend', e =>
{
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
}
);
const anchorLinks = document.querySelectorAll( 'a[href^="#"]' );
anchorLinks.forEach( link =>
{
	link.addEventListener( 'click', function(e )
		{
			const href = this.getAttribute( 'href' );
				if( '#' !== href && document.querySelector(href ) )
				{
					e.preventDefault();
					const target = document.querySelector(href );
					target.scrollIntoView(
						{
							behavior: 'smooth',
							block: 'start'
						}
					);
				}
		}
	);
}
);
document.body.style.opacity = '0';
setTimeout( () =>
{
	document.body.style.transition = 'opacity 0.5s ease';
	document.body.style.opacity = '1';
}, 100);
console.log( 'Sidebar navigation initialized' );
console.log( 'Total navigation items:', navItems.length );
console.log( 'Total submenu items:', submenuItems.length );
function saveMenuState()
{
const activeItems = [];
document.querySelectorAll( '.nav-item.active' ).forEach( (item, index ) =>
	{
		activeItems.push(index );
	}
);
sessionStorage.setItem( 'activeMenuItems', JSON.stringify(activeItems ) );
}
function restoreMenuState()
{
const savedState = sessionStorage.getItem( 'activeMenuItems' );
if( savedState )
{
	const activeItems = JSON.parse(savedState );
	const allNavItems = document.querySelectorAll( '.nav-item' );
	activeItems.forEach(index =>
		{
			if( allNavItems[index] )
			{
				allNavItems[index].classList.add( 'active' );
			}
		}
	);
}
}
restoreMenuState();
window.addEventListener( 'beforeunload', saveMenuState );
}
);
			function loadHomeContent(event, htmlFileName )
			{
				console.log("=== loadHomeContent called ===");
				console.log("Loading file:", htmlFileName);
				
				if ("HandleBankAMB.html" == htmlFileName) {
					document.title = "ATM Card exception usage";
				} else if ("displayMoneyHelpMenu.html" == htmlFileName) {
					document.title = "Money Help Menu";
				} else if ("post-office-mis.html" == htmlFileName) {
					document.title = "Post Office MIS";
				} else if ("spending.html" == htmlFileName) {
					document.title = "Daily Spending";
					console.log("Setting title to 'Daily Spending'");
				} else if ("my_exercise.html" == htmlFileName) {
					document.title = "My exercise";
				} else if ("SavedAmt.html" == htmlFileName) {
					document.title = "My saved amount";
				}
				
				event.preventDefault();
				var xhr = new XMLHttpRequest();
				var url = htmlFileName;
				xhr.open("GET", url, true);
				xhr.responseType = "text";
				
				xhr.onload = function() {
					console.log("XHR onload - status:", xhr.status);
					if (200 === xhr.status) {
						var content = xhr.responseText;
						console.log("Content loaded, length:", content.length);
						
						content = content.replace(/<SCRIPT>\s*DisplayMainMenu\(\);\s*<\/SCRIPT>/gi, '');
						content = content.replace(/DisplayMainMenu\(\);?/gi, '');
						
						const mainContent = document.querySelector(".main-content");
						console.log("Main content area:", mainContent ? "FOUND" : "NOT FOUND");
						
						if (mainContent) {
							mainContent.innerHTML = content;
							
							// Process and execute scripts
							var tempDiv = document.createElement('div');
							tempDiv.innerHTML = content;
							var scripts = tempDiv.querySelectorAll('script');
							console.log("Found", scripts.length, "script tags");
							
							scripts.forEach(function(script, index) {
								console.log("Processing script", index + 1);
								var newScript = document.createElement('script');
								
								if (script.src) {
									console.log("External script:", script.src);
									newScript.src = script.src;
									if (script.src.includes('firebase')) {
										console.log("Firebase script detected");
										newScript.onload = function() {
											console.log("Firebase script loaded:", script.src);
										};
									}
								} else {
									var scriptText = script.textContent;
									if (!scriptText.includes('DisplayMainMenu')) {
										console.log("Inline script, length:", scriptText.length);
										
										// CRITICAL FIX: Replace window.onload with immediate execution
										if (htmlFileName === "my_exercise.html") {
											scriptText = scriptText.replace(
												/window\.onload\s*=\s*function\s*\(\s*\)\s*\{/g,
												'(function(){'
											);
											scriptText = scriptText.replace(/\}\s*;\s*$/, '})();');
										}
										
										newScript.textContent = scriptText;
									} else {
										console.log("Skipping DisplayMainMenu script");
									}
								}
								
								if (script.type) {
									newScript.type = script.type;
								}
								document.body.appendChild(newScript);
							});
							
							console.log("All scripts processed");
							
							// Special handling for my_exercise.html
							if (htmlFileName === "my_exercise.html") {
								console.log("=== Initializing My Exercise page ===");
								setTimeout(function() {
									if (typeof buildMonthSelect === "function") {
										console.log("Calling buildMonthSelect()");
										buildMonthSelect();
									}
									if (typeof generateExerciseTable === "function") {
										console.log("Calling generateExerciseTable()");
										generateExerciseTable();
									} else {
										console.warn("generateExerciseTable() not found!");
									}
								}, 100);
							}
							
							// Special handling for spending.html
							if (htmlFileName === "spending.html") {
								console.log("=== Special handling for spending.html ===");
								setTimeout(function() {
									console.log("Timeout 1 (500ms) - checking for elements...");
									const preventTable = document.getElementById("PreventWastage");
									const homeTable = document.getElementById("HomeTable");
									const catTable = document.getElementById("CategoryAmountDetailsTab");
									console.log("PreventWastage:", preventTable ? "EXISTS" : "MISSING");
									console.log("HomeTable:", homeTable ? "EXISTS" : "MISSING");
									console.log("CategoryAmountDetailsTab:", catTable ? "EXISTS" : "MISSING");
									
									if (typeof window.initSpendingPage === 'function') {
										console.log("Calling window.initSpendingPage()");
										window.initSpendingPage();
									} else if (typeof initSpendingPage === 'function') {
										console.log("Calling initSpendingPage()");
										initSpendingPage();
									} else {
										console.error("initSpendingPage NOT FOUND!");
										if (typeof window.initAndLoad === 'function') {
											console.log("Calling window.initAndLoad() directly");
											window.initAndLoad();
										} else if (typeof initAndLoad === 'function') {
											console.log("Calling initAndLoad() directly");
											initAndLoad();
										} else {
											console.error("initAndLoad NOT FOUND either!");
										}
									}
								}, 500);
							}
						}
						
						let lifeFinanceHelperLink = document.querySelector(".sidebar-header #life-finance-helper");
						if (lifeFinanceHelperLink) {
							lifeFinanceHelperLink.setAttribute("href", "#");
							lifeFinanceHelperLink.setAttribute("onclick", "loadMainContent(event)");
						}
						
						document.querySelectorAll(".nav-item").forEach(item => {
							item.classList.remove("active");
						});
						
						let activeLink = document.querySelector(`[onclick*="${htmlFileName}"]`);
						if (activeLink) {
							activeLink.closest(".nav-item").classList.add("active");
						}
						
						console.log("=== loadHomeContent complete ===");
					} else {
						console.error("XHR failed with status:", xhr.status);
						alert("Failed to load content: " + xhr.status);
					}
				};
				
				xhr.onerror = function() {
					console.error("XHR error occurred");
					alert("Request error occurred.");
				};
				
				console.log("Sending XHR request...");
				xhr.send();
			}
function DispIndx(tdcolor )
{
	if( 'undefined' == typeof indx )
	{
			indx=0;
	}
	++indx;
	if(10>indx )
	{
		document.write( "<TD valign='top' align='right' "+tdcolor+" >0"+indx+"</TD>" );
	}
	else
	{
		document.write( "<TD "+tdcolor+" >"+indx+"</TD>" );
	}
}
let location_url=window.location.href;
function Include_Href_ToLife_Finance_Helper()
{
			if( -1 !== location_url.indexOf( "index.html" ) )
			{
				document.write( "<H2><A id='life-finance-helper'>Life Finance Helper9</A></H2>" );
			}
			else
			{
				document.write( "<H2><A id='life-finance-helper' href='index.html' onclick='loadHomeContent(event, \"index.html\" )'>Life Finance Helper10</A></H2>" );
			}
}
function Display_Copy_rights()
{
	let yyyy=new Date().getFullYear();
	document.write( "&copy; "+yyyy+" Life Finance Helper11" );
}
function loadMoneyHelpContent(event, htmlFileName )
{
	event.preventDefault();
	var xhr = new XMLHttpRequest();
	var url = htmlFileName;
	xhr.open( "GET", url, true );
	xhr.responseType = "document";
	xhr.onload = function()
	{
		if( 200 === xhr.status )
		{
			var content = xhr.response.documentElement.innerHTML;
			document.querySelector( ".main-content" ).innerHTML = content;
			let lifeFinanceHelperLink = document.querySelector( ".sidebar-header #life-finance-helper" );
			if( lifeFinanceHelperLink )
			{
				lifeFinanceHelperLink.setAttribute( "href", "#" );
				lifeFinanceHelperLink.setAttribute( "onclick", "loadMainContent(event )" );
			}
			document.querySelectorAll( ".nav-item" ).forEach(item =>
				{
					item.classList.remove( "active" );
				}
			);
			let activeLink = document.querySelector(`[href="${htmlFileName}"]`);
			if( activeLink )
			{
				activeLink.closest( ".nav-item" ).classList.add( "active" );
			}
		}
		else
		{
			alert( "Failed to load content: " + xhr.status );
		}
	};
	xhr.onerror = function()
	{
		alert( "Request error occurred." );
	};
	xhr.send();
}
function DisplayMainMenu()
{
	document.write( `<ASIDE class="sidebar">
	<DIV class="sidebar-header">`);
	if( 'undefined' === typeof location_url )
	{
		let location_url=window.location.href;
	}
	if( -1 !== location_url.indexOf( "index.html" ) )
	{
		document.write( "<H2><A id='life-finance-helper'><FONT color='#FFD700'><B><U>Life Finance Helper2</B></U></FONT></A></H2>" );
	}
	else
	{
		document.write( "<H2><A id='life-finance-helper'><FONT color='black'>Life Finance Helper3</FONT></A></H2>" );
	}
	document.write( `</DIV>
	<NAV class="sidebar-nav">
		<UL class="nav-list">
			<LI class="nav-item">
				<A class="nav-link">
					<SPAN class="nav-icon">&#127974;</SPAN>
					<SPAN class="nav-text"><FONT color='black'>Handle Money Errs</FONT></SPAN>
					<SPAN class="nav-arrow">&gt;</SPAN>
				</A>
				<UL class="submenu">
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'HandleBankAMB.html');" class="nav-link">AtmTips0</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'displayMoneyHelpMenu.html');" class="nav-link">Money Help0</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'Increase-Daily-Salary.html');" class="nav-link">Increase daily salary</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'Bharath_gas_booking_steps.html');" class="nav-link">Bharath gas online booking steps</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'Indian-Oil-Cylinder-Booking-Online-Steps.html');" class="nav-link">Indian oil gas online booking steps</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent(event, 'my_exercise.html');" class="nav-link">My01 exercise</A>
					</LI>
				</UL>
			</LI>
	<LI class="nav-item">
	<A href="#" onclick="loadHomeContent(event, 'Prediction_04.html' )" class="nav-link">
	<SPAN class="nav-icon">&#x1F465;<FONT color='black'>MyPredicts</FONT></SPAN>
	</A>
	</LI>
	<LI class="nav-item">
	<A href="#" class="nav-link">
	<SPAN class="nav-icon">&#127974;</SPAN>
	<SPAN class="nav-text"><FONT color='black'>Banking</FONT></SPAN>
	<SPAN class="nav-arrow">&gt;</SPAN>
	</A>
	<UL class="submenu">
	<LI>
		<A href="#" onclick="javascript:loadHomeContent(event, 'post-office-mis.html');" class="nav-link">Post office MIS</A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent(event, 'post-office-nsc.html');" class="nav-link">Post office NSC</A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent(event, 'SBI_ETDR_INTEREST.html');" class="nav-link">SBi FD INTEREST</A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent(event, 'Indian-bank-to-other-bank.html');" class="nav-link">Indian bank transfer err</A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent(event, 'HandleBankAMB.html');" class="nav-link">Handling AMB</A>
	</LI>
	</UL>
	</LI>
	<LI class="nav-item">
		<A href="#" class="nav-link">
			<SPAN class="nav-icon">&#x1F4B0;</SPAN>
			<SPAN class="nav-text"><FONT color='black'>Spending</FONT></SPAN>
			<SPAN class="nav-arrow">&gt;</SPAN>
		</A>
		<UL class="submenu">
			<LI>
				<A href="#" onclick="javascript:loadHomeContent(event, 'spending.html');" class="nav-link">Daily spending</A>
			</LI>
			<LI>
				<A href="#" onclick="javascript:loadHomeContent(event, 'SavedAmt.html');" class="nav-link">Saved amount</A>
			</LI>
			<LI>
				<A href="#" onclick="javascript:loadHomeContent(event, 'spending-chart.html');" class="nav-link">Spending chart</A>
			</LI>
			<LI>
				<A href="#" onclick="javascript:loadHomeContent(event, 'my_exercise.html');" class="nav-link">My exercise</A>
			</LI>
		</UL>
	</LI>
	<LI class="nav-item">
	<A href="#" class="nav-link">
	<SPAN class="nav-icon">&#x1F527;</SPAN>
	<SPAN class="nav-text"><FONT color='black'>Utilities</FONT></SPAN>
	<SPAN CLASS="NAV-ARROW">&gt;</SPAN>
	</A>
	<UL class="submenu">
	<LI><A href="#">Share knowledge transfer</A></LI>
	<LI><A href="#">Kitchen Drain</A></LI>
	<LI><A href="#">Washing Machine</A></LI>
	</UL>
	</LI>
	<LI class="nav-item">
	<A href="#" class="nav-link">
	<SPAN class="nav-icon">&#x1F4BB;</SPAN>
	<SPAN class="nav-text"><FONT color='black'>Technology</FONT></SPAN>
	<SPAN class="nav-arrow">&gt;</SPAN>
	</A>
	<UL class="submenu">
	<LI><A href="#" onclick='javascript:window.open("Windows_ERR_HELP.html");'>Windows Help</A></LI>
	<LI><A href="#">Windows Network</A></LI>
	<LI><A href="#">Battery Alert</A></LI>
	<LI><A href="#">Putty Logs</A></LI>
	</UL>
	</LI>
	<LI class="nav-item">
	<A onclick='window.open( "Visitor_count.html" );' class="nav-link">
	<SPAN class="nav-icon">&#x1F465;</SPAN>
	<SPAN class="nav-text"><FONT color='black'>VisitorCnt</FONT></SPAN>
	</A>
	<UL class="submenu">
	<LI><A href="#" onclick='window.open("earth_politics_or_general_age.html");'>Earth politics</A></LI>
	</UL>
	</LI>
	<LI class="nav-item">
	<A onclick='window.open( "tamil-calendar.html" );' class="nav-link">
	<SPAN class="nav-icon">&#x1F4C5;</SPAN>
	<SPAN class="nav-text"><FONT color='black'>Calendar</FONT></SPAN>
	</A>
	</LI>
	<LI class="nav-item">
	<A href="#" class="nav-link">
	<SPAN class="nav-icon"><DIV class="info-box">i</DIV> </SPAN>
	<SPAN class="nav-text"><FONT color='black'>About</FONT></SPAN>
	<SPAN class="nav-arrow">&gt;</SPAN>
	</A>
	<UL class="submenu">
	<LI><A href='#' onclick='window.open( "NMurugesan_cv.html" );'>My Profile</A></LI>
	<LI><A href='#' onclick='window.open( "openssl_speed.html" );'>openssl.exe speed</A></LI>
	<LI><A href='#' onclick='window.open( "murugesan_achievements.html" );'>Achievements</A></LI>
	<LI><A href='#' onclick='window.open( "Sustainable_Living.html" );'>Sustainable Living</A></LI>
	<LI><A href='#' onclick='window.open( "privacy.html" );'>Privacy Policy</A></LI>
	</UL>
	</LI>
	</UL>
	</NAV>
	<DIV id='sidefoot-content'>
	<DIV class="sidebar-footer">`);
	yyyy=new Date().getFullYear();
	document.write( "&copy; "+yyyy+" Life Finance Helper4" );
	document.write( `<NOSCRIPT>`);
	document.write( `<P>&copy; 900000000 Life Finance Helper5</P>
	</NOSCRIPT>
	</DIV>
	</DIV>
	</ASIDE>` );
}
