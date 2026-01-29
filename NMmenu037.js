(
	function injectDisabledLinkStyles()
	{
		if( document.getElementById('disabled-link-styles'))
		{
			return;
		}
		const style = document.createElement('style');
		style.id = 'disabled-link-styles';
		style.textContent = `
			.nav-item a[style*="not-allowed"],
			.submenu a[style*="not-allowed"]
			{
				cursor: not-allowed !important;
				pointer-events: none !important;
				opacity: 0.5 !important;
				text-decoration: none !important;
				color: #888 !important;
				background-color: rgba(0, 0, 0, 0.1) !important;
			}
			.nav-item a[style*="not-allowed"]:hover,
			.submenu a[style*="not-allowed"]:hover
			{
				background-color: rgba(0, 0, 0, 0.1) !important;
				color: #888 !important;
				padding-left: 20px !important;
			}
			.nav-item a[style*="not-allowed"]::after,
			.submenu a[style*="not-allowed"]::after
			{
				content: " 🚫";
				font-size: 0.8em;
				margin-left: 5px;
			}
		`;
		document.head.appendChild(style);
		console.log('✓ Disabled link styles injected');
	}
)();
let firebaseScriptsLoaded = false;
let firebaseInitialized = false;
function handleSpendingPage()
{
	console.log("=== Handling spending.html ===");
	const messageDiv = document.getElementById("message");
	if( messageDiv )
	{
		messageDiv.textContent = "Initializing...";
	}
	if( typeof firebase !== 'undefined' && firebase.database )
	{
		console.log("Firebase already available, reinitializing...");
		firebaseInitialized = false;
		initializeSpendingApp();
		return;
	}
	if( !firebaseScriptsLoaded )
	{
		console.log("Loading Firebase scripts...");
		loadFirebaseScripts(() =>
			{
			console.log("Firebase scripts loaded successfully");
			firebaseScriptsLoaded = true;
			initializeSpendingApp();
			}
		);
	}
	else
	{
		waitForFirebase(() =>
			{
			initializeSpendingApp();
			}
		);
	}
}
function loadFirebaseScripts(callback)
{
	const existingScripts = document.querySelectorAll('script[src*="firebase"]');
	existingScripts.forEach(script =>
		{
		console.log("Removing existing Firebase script:", script.src);
		script.remove();
		}
	);
	const appScript = document.createElement('script');
	appScript.src = 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js';
	appScript.onload = () =>
	{
		console.log("Firebase App script loaded");
		const dbScript = document.createElement('script');
		dbScript.src = 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database-compat.js';
		dbScript.onload = () =>
		{
			console.log("Firebase Database script loaded");
			callback();
		};
		dbScript.onerror = () =>
		{
			console.error("Failed to load Firebase Database script");
			alert("Failed to load Firebase Database. Please check your internet connection.");
		};
		document.head.appendChild(dbScript);
	};
	appScript.onerror = () =>
	{
		console.error("Failed to load Firebase App script");
		alert("Failed to load Firebase. Please check your internet connection.");
	};
	document.head.appendChild(appScript);
}
function waitForFirebase(callback, maxAttempts = 20)
{
	let attempts = 0;
	const checkInterval = setInterval(() =>
		{
			attempts++;
			console.log("Waiting for Firebase... attempt", attempts);
			if( typeof firebase !== 'undefined' && firebase.database)
			{
				console.log("✓ Firebase available!");
				clearInterval(checkInterval);
				callback();
			}
			else if(attempts >= maxAttempts)
			{
				console.error("Firebase not available after", attempts, "attempts");
				clearInterval(checkInterval);
				const messageDiv = document.getElementById("message");
				if( messageDiv )
				{
					messageDiv.textContent = "Error: Firebase failed to load. Please refresh the page.";
				}
				alert("Firebase initialization timeout.\n\nPlease refresh the page (F5).");
			}
		},
	300);
}
function initializeSpendingApp()
{
	console.log("=== Initializing spending app ===");
	const messageDiv = document.getElementById("message");
	if( messageDiv)
	{
		messageDiv.textContent = "Loading data from Firebase...";
	}
	setTimeout(() =>
	{
		if( typeof window.initAndLoad === 'function')
		{
			console.log("Calling window.initAndLoad()");
			window.initAndLoad();
		}
		else if(typeof initAndLoad === 'function')
		{
			console.log("Calling initAndLoad()");
			initAndLoad();
		}
		else
		{
			console.error("initAndLoad function not found!");
			const scripts = document.querySelectorAll('.main-content script');
			console.log("Found", scripts.length, "scripts in main-content");
			scripts.forEach((script, index) =>
				{
					if( !script.src )
					{
						console.log("Executing inline script", index);
						try
						{
							eval(script.textContent);
						}
						catch( error )
						{
							console.error("Error executing script", index, ":", error);
						}
					}
				}
			);
			setTimeout( () =>
			{
				if( 'function' === typeof window.initAndLoad )
				{
					window.initAndLoad();
				}
				else if(typeof initAndLoad === 'function')
				{
					initAndLoad();
				}
				else
				{
					console.error("Still can't find initAndLoad!");
					if( messageDiv )
					{
						messageDiv.textContent = "Error: Failed to initialize. Please refresh the page.";
					}
				}
			}, 500);
		}
	}, 100);
}
function processPageScripts(content, htmlFileName)
{
	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = content;
	var scripts = tempDiv.querySelectorAll('script');
	console.log("Found", scripts.length, "script tags");
	scripts.forEach(function(script, index)
		{
			console.log("Processing script", index + 1);
			var newScript = document.createElement('script');
			if( script.src )
			{
				console.log("External script:", script.src);
				newScript.src = script.src;
			}
			else
			{
				var scriptText = script.textContent;
				if( !scriptText.includes( 'DisplayMainMenu' ) )
				{
					console.log("Inline script, length:", scriptText.length);
					newScript.textContent = scriptText;
				}
				else
				{
					console.log("Skipping DisplayMainMenu script");
					return;
				}
			}
			if( script.type )
			{
				newScript.type = script.type;
			}
			document.body.appendChild(newScript);
		}
	);
}
function updateNavigationState(htmlFileName)
{
	let lifeFinanceHelperLink = document.querySelector(".sidebar-header #life-finance-helper");
	if( lifeFinanceHelperLink )
	{
		lifeFinanceHelperLink.setAttribute("href", "#");
		lifeFinanceHelperLink.setAttribute("onclick", "loadMainContent(event)");
	}
	document.querySelectorAll(".nav-item a, .submenu a").forEach(link =>
		{
			if( link.dataset.originalHref )
			{
				link.setAttribute("href", link.dataset.originalHref);
				delete link.dataset.originalHref;
			}
			if( link.dataset.originalOnclick )
			{
				link.setAttribute("onclick", link.dataset.originalOnclick);
				delete link.dataset.originalOnclick;
			}
			link.style.cursor = "";
			link.style.textDecoration = "";
			link.style.pointerEvents = "";
			link.style.color = "";
			link.style.opacity = "";
			link.style.backgroundColor = "";
			link.classList.remove("disabled-link");
		}
	);
	document.querySelectorAll(".nav-item").forEach(item =>
		{
		item.classList.remove("active");
		}
	);
	let activeLink = document.querySelector(`[onclick*="${htmlFileName}"]`);
	if( activeLink )
	{
		const parentNavItem = activeLink.closest(".nav-item");
		if( parentNavItem )
		{
			parentNavItem.classList.add("active");
		}
		const originalHref = activeLink.getAttribute("href");
		const originalOnclick = activeLink.getAttribute("onclick");
		if( originalHref )
		{
			activeLink.dataset.originalHref = originalHref;
		}
		if( originalOnclick )
		{
			activeLink.dataset.originalOnclick = originalOnclick;
		}
		activeLink.removeAttribute("href");
		activeLink.removeAttribute("onclick");
		activeLink.style.cursor = "not-allowed";
		activeLink.style.textDecoration = "none";
		activeLink.style.pointerEvents = "none";
		activeLink.style.color = "#888";
		activeLink.style.opacity = "0.5";
		activeLink.style.backgroundColor = "rgba(0,0,0,0.1)";
		activeLink.classList.add("disabled-link");
		console.log("✓ Disabled link for currently displayed page:", htmlFileName);
	}
}
(	function addDisabledLinkStyles()
	{
		const style = document.createElement('style');
		style.textContent = `
		.disabled-link
		{
			cursor: not-allowed !important;
			pointer-events: none !important;
			opacity: 0.5 !important;
			text-decoration: none !important;
			color: #888 !important;
			background-color: rgba(0,0,0,0.1) !important;
		}
		.disabled-link:hover
		{
			background-color: rgba(0,0,0,0.1) !important;
			color: #888 !important;
		}
		.nav-item.active > .nav-link
		{
			background: rgba(255, 255, 255, 0.1);
			padding-left: 25px;
		}
		`;
		document.head.appendChild(style);
	}
)();
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
	var newRow = table.insertRow( table.rows.length );
	var cell1 = newRow.insertCell( 0 );
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
function MainPageHomeLoadContent( event, htmlFileName )
{
	if( "HandleBankAMB.html" == htmlFileName )
	{
		document.title = "ATM Card exception usage";
	}
	else if( "displayMoneyHelpMenu.html" == htmlFileName )
	{
		document.title = "Money Help Menu";
	}
	else if( "my-kt-rank-chatgpt-Fri-09-Jan-2026.html" == htmlFileName )
	{
		document.title = "Knowledge Transfer Case Study – SBI Fixed Deposit Optimization";
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
				lifeFinanceHelperLink.setAttribute( "onclick", "loadMainContent( event )" );
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
function loadMainContent( event )
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
								navLink.addEventListener( 'click', function( e )
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
						submenuLink.addEventListener( 'click', function( e )
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
				focusableElements.forEach( ( element, index ) =>
				{
					element.addEventListener( 'keydown', function( e )
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
							sidebar.style.transform = 'translateX( 0 )';
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
					link.addEventListener( 'click', function( e )
						{
							const href = this.getAttribute( 'href' );
								if( '#' !== href && document.querySelector( href ) )
								{
									e.preventDefault();
									const target = document.querySelector( href );
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
					}, 100
				);
				console.log( 'Sidebar navigation initialized' );
				console.log( 'Total navigation items:', navItems.length );
				console.log( 'Total submenu items:', submenuItems.length );
				function saveMenuState()
				{
				const activeItems = [];
				document.querySelectorAll( '.nav-item.active' ).forEach( ( item, index ) =>
					{
						activeItems.push( index );
					}
				);
				sessionStorage.setItem( 'activeMenuItems', JSON.stringify( activeItems ) );
				}
				function restoreMenuState()
				{
				const savedState = sessionStorage.getItem( 'activeMenuItems' );
				if( savedState )
				{
					const activeItems = JSON.parse( savedState );
					const allNavItems = document.querySelectorAll( '.nav-item' );
					activeItems.forEach( index =>
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
			function loadHomeContent( event, htmlFileName )
			{
				console.log("=== loadHomeContent called ===");
				console.log("Loading file:", htmlFileName );
				if( "HandleBankAMB.html" == htmlFileName )
				{
					document.title = "ATM Card exception usage";
				}
				else if( "displayMoneyHelpMenu.html" == htmlFileName )
				{
					document.title = "Money Help Menu";
				}
				else if( "post-office-mis.html" == htmlFileName )
				{
					document.title = "Post Office MIS";
				}
				else if( "Steps-to-save-money-from-mis.html" == htmlFileName )
				{
					document.title = "STEPS TO SAVE MONEY FROM MIS";
				}
				else if( "spending.html" == htmlFileName )
				{
					document.title = "Daily Spending";
					console.log("Setting title to 'Daily Spending'");
				}
				else if( "2-wheeler-4-wheeler-rank.html" == htmlFileName )
				{
					document.title = "Vehicle ranking";
					console.log("Setting title to 'Daily Spending'");
				}
				else if( "my-gold-loan.html" == htmlFileName )
				{
					document.title = "My Gold Loan Summary KLM Axiva";
					console.log("Setting title to 'Daily Spending'");
				}
				else if( "my-kt-rank-chatgpt-Fri-09-Jan-2026.html" == htmlFileName )
				{
					document.title = "Knowledge Transfer Case Study – SBI Fixed Deposit Optimization";
				}
				event.preventDefault();
				var xhr = new XMLHttpRequest();
				var url = htmlFileName;
				xhr.open("GET", url, true);
				xhr.responseType = "text";
				xhr.onload = function()
				{
					console.log("XHR onload - status:", xhr.status);
					if( 200 === xhr.status )
					{
						var content = xhr.responseText;
						console.log("Content loaded, length:", content.length);
						content = content.replace(/<SCRIPT>\s*DisplayMainMenu\(\);\s*<\/SCRIPT>/gi, '');
						content = content.replace(/DisplayMainMenu\(\);?/gi, '');
						const mainContent = document.querySelector(".main-content");
						console.log("Main content area:", mainContent ? "FOUND" : "NOT FOUND");
						if( mainContent)
						{
							mainContent.innerHTML = content;
							var tempDiv = document.createElement('div');
							tempDiv.innerHTML = content;
							var scripts = tempDiv.querySelectorAll('script');
							console.log("Found", scripts.length, "script tags");
							scripts.forEach(function(script, index)
								{
									console.log("Processing script", index + 1);
									var newScript = document.createElement('script');
									if( script.src )
									{
										console.log("External script:", script.src);
										newScript.src = script.src;
										if( script.src.includes('firebase'))
										{
											console.log("Firebase script detected");
											newScript.onload = function()
											{
												console.log("Firebase script loaded:", script.src);
											};
										}
									}
									else
									{
										var scriptText = script.textContent;
										if( !scriptText.includes( 'DisplayMainMenu' ) )
										{
											console.log("Inline script, length:", scriptText.length);
											newScript.textContent = scriptText;
										}
										else
										{
											console.log("Skipping DisplayMainMenu script");
										}
									}
									if( script.type )
									{
										newScript.type = script.type;
									}
									document.body.appendChild(newScript);
								}
							);
							console.log("All scripts processed");
							if( "spending.html" === htmlFileName )
							{
								console.log("=== Special handling for spending.html ===");
								const existingFirebaseApp = document.querySelector('script[src*="firebase-app-compat"]');
								const existingFirebaseDB = document.querySelector('script[src*="firebase-database-compat"]');
								if( existingFirebaseApp || existingFirebaseDB )
								{
									console.log("Removing existing Firebase compat scripts");
									if( existingFirebaseApp )
									{
										existingFirebaseApp.remove();
									}
									if( existingFirebaseDB )
									{
										existingFirebaseDB.remove();
									}
								}
								setTimeout( function()
									{
										console.log("Checking Firebase compat availability...");
										const messageDiv = document.getElementById("message");
										if( messageDiv )
										{
											messageDiv.textContent = "Loading Firebase...";
										}
										let checkCount = 0;
										const checkFirebase = setInterval( function()
											{
												checkCount++;
												console.log("Check attempt", checkCount, "- typeof firebase:", typeof firebase);
												if( typeof firebase !== 'undefined' && firebase.database)
												{
													console.log("✓ Firebase compat is available!");
													clearInterval(checkFirebase);
													setTimeout( function()
														{
															if( typeof window.initAndLoad === 'function')
															{
																console.log("Calling window.initAndLoad()");
																window.initAndLoad();
															}
															else if(typeof initAndLoad === 'function')
															{
																console.log("Calling initAndLoad()");
																initAndLoad();
															}
															else
															{
																console.error("initAndLoad function not found!");
																if( messageDiv )
																{
																	messageDiv.textContent = "Error: Initialization function not found";
																}
															}
														},
													100);
												}
												else if(checkCount >= 20)
												{
													console.error("Firebase compat not loaded after 6 seconds");
													clearInterval(checkFirebase);
													if( messageDiv)
													{
														messageDiv.textContent = "Error: Firebase failed to load. Please refresh the page.";
													}
													alert("Firebase initialization timeout.\n\nPlease refresh the page (F5) or open spending.html directly.");
												}
												else
												{
													console.log("Waiting for Firebase compat... attempt", checkCount);
												}
											},
										300);
									},
								500);
							}
						}
						let lifeFinanceHelperLink = document.querySelector(".sidebar-header #life-finance-helper");
						if( lifeFinanceHelperLink)
						{
							lifeFinanceHelperLink.setAttribute("href", "#");
							lifeFinanceHelperLink.setAttribute("onclick", "loadMainContent(event)");
						}
						document.querySelectorAll(".nav-item a, .submenu a").forEach(link =>
							{
								link.style.cursor = "pointer";
								link.style.textDecoration = "underline";
								link.style.pointerEvents = "auto";
								link.style.color = "";
								link.style.opacity = "";
								link.style.backgroundColor = "";
								if( link.dataset.originalHref )
								{
									link.setAttribute("href", link.dataset.originalHref);
								}
								if( link.dataset.originalOnclick )
								{
									link.setAttribute("onclick", link.dataset.originalOnclick);
								}
							}
						);
						let activeLink = document.querySelector(`[onclick*="${htmlFileName}"]`);
						if( activeLink )
						{
							activeLink.closest(".nav-item").classList.add("active");
							const shouldDisableLink = 
							(htmlFileName === "HandleBankAMB.html" && activeLink.textContent.trim() === "AtmTips0") ||
							(htmlFileName === "displayMoneyHelpMenu.html" && activeLink.textContent.trim() === "Money Help0") ||
							(htmlFileName === "Increase-Daily-Salary.html" && activeLink.textContent.trim() === "Increase daily salary") ||
							(htmlFileName === "Bharath_gas_booking_steps.html" && activeLink.textContent.trim() === "Bharath gas online booking steps") ||
							(htmlFileName === "Indian-Oil-Cylinder-Booking-Online-Steps.html" && activeLink.textContent.trim() === "Indian oil gas online booking steps") ||
							(htmlFileName === "spending.html" && activeLink.textContent.trim() === "Daily spending");
							if( shouldDisableLink )
							{
								console.log("Disabling link for:", activeLink.textContent.trim());
								if (!activeLink.dataset.originalHref )
								{
									activeLink.dataset.originalHref = activeLink.getAttribute("href") || "#";
								}
								if (!activeLink.dataset.originalOnclick )
								{
									activeLink.dataset.originalOnclick = activeLink.getAttribute("onclick") || "";
								}
								activeLink.removeAttribute("href");
								activeLink.removeAttribute("onclick");
								activeLink.style.cursor = "not-allowed";
								activeLink.style.textDecoration = "none";
								activeLink.style.pointerEvents = "none";
								activeLink.style.color = "#888";
								activeLink.style.opacity = "0.5";
								activeLink.style.backgroundColor = "rgba(0,0,0,0.1)";
								if( "spending.html" === htmlFileName )
								{
									console.log("✓ Daily spending link disabled successfully");
									console.log("Link href:", activeLink.getAttribute("href"));
									console.log("Link onclick:", activeLink.getAttribute("onclick"));
								}
							}
						}
						console.log("=== loadHomeContent complete ===");
					}
					else
					{
						console.error("XHR failed with status:", xhr.status);
						alert("Failed to load content: " + xhr.status);
					}
				};
				xhr.onerror = function()
				{
					console.error("XHR error occurred");
					alert("Request error occurred.");
				};
				console.log("Sending XHR request...");
				xhr.send();
			}
function DispIndx( tdcolor )
{
	if( 'undefined' == typeof indx )
	{
			indx=0;
	}
	++indx;
	if( 10>indx )
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
				document.write( "<H2><A id='life-finance-helper' href='index.html' onclick='loadHomeContent( event, \"index.html\" )'>Life Finance Helper10</A></H2>" );
			}
}
function Display_Copy_rights()
{
	let yyyy=new Date().getFullYear();
	document.write( "&copy; "+yyyy+" Life Finance Helper11" );
}
function loadMoneyHelpContent( event, htmlFileName )
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
				lifeFinanceHelperLink.setAttribute( "onclick", "loadMainContent( event )" );
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
			var currentLanguage = 'ta';
			var englishData = {};
			var tamilData = {};
			function toggleLanguage()
			{
				if( 'ta' === currentLanguage )
				{
					currentLanguage = 'en';
					document.getElementById('title').innerText = "Your Location";
					document.getElementById('labelDistrict').innerText = "District";
					document.getElementById('labelState').innerText = "State";
					document.getElementById('labelCountry').innerText = "Country";
					document.getElementById('labelContinent').innerText = "Continent";
					document.getElementById('toggleLink').innerText = "Display in Tamil";
					document.getElementById("district").innerText = englishData.district;
					document.getElementById("state").innerText = englishData.state;
					document.getElementById("country").innerText = englishData.country;
					document.getElementById("continent").innerText = englishData.continent;
				}
				else
				{
					currentLanguage = 'ta';
					document.getElementById('title').innerText = "உங்கள் இருப்பிடம்";
					document.getElementById('title').style.color = 'black';
					document.getElementById('labelDistrict').innerText = "மாவட்டம்";
					document.getElementById('labelDistrict').style.color = 'black';
					document.getElementById('labelState').innerText = "மாநிலம்";
					document.getElementById('labelState').style.color = 'black';
					document.getElementById('labelCountry').innerText = "நாடு";
					document.getElementById('labelCountry').style.color = 'black';
					document.getElementById('labelContinent').innerText = "கண்டம்";
					document.getElementById('labelContinent').style.color = 'black';
					document.getElementById('toggleLink').innerText = "Display in English";
					( async () =>
						{
							document.getElementById('title').innerText = "உங்கள் இருப்பிடம்";
							document.getElementById("district").innerText = await toTamil(englishData.district);
							document.getElementById("state").innerText = await toTamil(englishData.state);
							document.getElementById("country").innerText = await toTamil(englishData.country);
							document.getElementById("continent").innerText = continentToTamil(englishData.continent);
						}
					)();
				}
			}
			function getLocation()
			{
				document.getElementById('title').innerText = "உங்கள் இருப்பிடம் (காத்திருக்கவும்)";
				if ( !navigator.geolocation )
				{
					document.getElementById("output").innerText =
						currentLanguage === 'ta' ?
						"உங்கள் உலாவியில் Geolocation ஆதரிக்கப்படவில்லை." :
						"Geolocation is not supported by this browser.";
					return;
				}
				navigator.geolocation.getCurrentPosition(
					async ( position ) =>
						{
							const lat = position.coords.latitude;
							const lon = position.coords.longitude;
							const url =
								"https://nominatim.openstreetmap.org/reverse" +
								"?format=json" +
								"&lat=" + lat +
								"&lon=" + lon;
							try
							{
								const response = await fetch( url,
									{
										headers: { "User-Agent": "location-demo" }
									}
								);
								const data = await response.json();
								const addr = data.address || {};
								if(addr.state_district)
								{
								}
								else
								{
									if( addr.county )
									{
									}
									else
									{
									}
								}
								englishData.district = addr.state_district || addr.county || addr.state || addr.country || "District information not available";
								englishData.state = addr.state || "State information not available";
								englishData.country = addr.country || "Country information not available";
								englishData.continent = getContinent((addr.country_code || "").toUpperCase()) || "Continent information not available";
								(async () =>
									{
										document.getElementById("district").innerText = await toTamil(englishData.district);
										document.getElementById("state").innerText = await toTamil(englishData.state);
										document.getElementById("country").innerText = await toTamil(englishData.country);
										document.getElementById("continent").innerText = continentToTamil(englishData.continent);
										document.getElementById('title').innerText = "உங்கள் இருப்பிடம்";
									}
								)();
							}
							catch( e )
							{
								document.getElementById("output").innerText =
									currentLanguage === 'ta' ?
									"மீட்டமைப்பு தோல்வியடைந்தது." :
									"Reverse geocoding failed.";
							}
						},
						( error ) =>
							{
								document.getElementById("output").innerText =
									currentLanguage === 'ta' ?
									"பிழை: " + error.message :
									"Error: " + error.message;
							},
							{ enableHighAccuracy: true, timeout: 10000 }
				);
			}
			function getContinent(cc)
			{
				const map = {
					"IN": "Asia",
					"US": "North America",
					"GB": "Europe",
					"DE": "Europe",
					"AU": "Australia",
					"ZA": "Africa"
				};
				return map[cc] || "Unknown";
			}
			const tamilOverrides = {
				"Karnataka": "கர்நாடகா",
				"England": "இங்கிலாந்து"
			};
			async function toTamil(text)
			{
				if( !text )
				{
					return "அறியப்படவில்லை";
				}
				if( tamilOverrides[text] )
				{
					return tamilOverrides[text];
				}
				try
				{
					const response = await fetch(
						`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ta`
					);
					const data = await response.json();
					TamilLocationName = (data.responseData && data.responseData.translatedText) || text;
					if( "தரமுரிமாறம்" == TamilLocationName )
					{
							TamilLocationName="தருமபுரி";
					}
					return TamilLocationName;
				}
				catch (e)
				{
					return text;
				}
			}
			function continentToTamil(continent)
			{
				const map = {
					"Asia": "ஆசியா",
					"North America": "வட அமெரிக்கா",
					"Europe": "ஐரோப்பா",
					"Australia": "ஆஸ்திரேலியா",
					"Africa": "ஆப்பிரிக்கா",
					"Unknown": "அறியப்படவில்லை"
				};
				return map[continent] || continent;
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
					document.write( "<H2><A id='life-finance-helper'><FONT color='#FFD700'><B><U>Life Finance Helper3</FONT></B></U></A></H2>" );
				}
				document.write( `</DIV>
				<NAV class="sidebar-nav">
					<UL class="nav-list">
						<LI class="nav-item">
							<A href='javascript:void( 0 );' class="nav-link" style="cursor: text; text-decoration: none;">
								<SPAN class="nav-icon">&#127974;</SPAN>
								<SPAN class="nav-text"><FONT color='black'>Location</FONT></SPAN>
								<SPAN class="nav-arrow">&gt;</SPAN>
							</A>
							<UL class="submenu">
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'my-location.html' );" class="nav-link">Display my location</A>
								</LI>
							</UL>
						</LI>
						<LI class="nav-item">
							<A href='javascript:void( 0 );' class="nav-link" style="cursor: text; text-decoration: none;">
								<SPAN class="nav-icon">&#127974;</SPAN>
								<SPAN class="nav-text"><FONT color='black'>HandleMoneyErrs</FONT></SPAN>
								<SPAN class="nav-arrow">&gt;</SPAN>
							</A>
							<UL class="submenu">
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'steps-to-recharge-any-sim.html' );" class="nav-link">Internet Recharge Exception</A>
								</LI>
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'HandleBankAMB.html' );" class="nav-link">AtmTips0</A>
								</LI>
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'displayMoneyHelpMenu.html' );" class="nav-link">Money Help0</A>
								</LI>
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'Increase-Daily-Salary.html' );" class="nav-link">Increase daily salary</A>
								</LI>
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'Bharath_gas_booking_steps.html' );" class="nav-link">Bharath gas online booking steps</A>
								</LI>
								<LI>
									<A href="#" onclick="javascript:loadHomeContent( event, 'Indian-Oil-Cylinder-Booking-Online-Steps.html' );" class="nav-link">Indian oil gas online booking steps</A>
								</LI>
							</UL>
						</LI>
				<LI class="nav-item">
				<A href="#" onclick="loadHomeContent( event, 'Prediction_04.html' )" class="nav-link">
				<SPAN class="nav-icon">&#x1F465;<FONT color='black'>MyPredict</FONT></SPAN>
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
					<A href="#" onclick="javascript:loadHomeContent( event, 'new-employee-sbi-account.html' );" class="nav-link">Any Employee Savings Guide</A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "post-office-mis.html" );' class="nav-link"><FONT color='#00ff00'>Post office MIS</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'Steps-to-save-money-from-mis.html' );" class="nav-link">Steps to save money</A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "post-office-nsc.html" );' class="nav-link"><FONT color='#00ff00'>Post office NSC</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:window.open( 'why-to-open-fixed-deposit.html' );" class="nav-link"><FONT color='#00ff00'>Why Fixed deposit?</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "SBI_ETDR_INTEREST.html" );' class="nav-link"><FONT color='#00ff00'>SBI FD INTEREST</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'Indian-bank-to-other-bank.html' );" class="nav-link">Indian bank transfer err</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'HandleBankAMB.html' );" class="nav-link">Handling AMB</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'world-currencies.html' );" class="nav-link">World Currency Rates</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'Last-year-investment-provit-at-earth.html' );" class="nav-link">Last Year Investment Trends</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'gold-loan.html' );" class="nav-link">When to pay loan?</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, '2-wheeler-4-wheeler-rank.html' );" class="nav-link">Vehicle rankings amount</A>
				</LI>
				<LI>
					<A href="#" onclick="javascript:loadHomeContent( event, 'my-gold-loan.html' );" class="nav-link">My Gold Loan Summary</A>
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
						<!-- Health / educational content first -->
						<LI>
							<A href="#" onclick="javascript:loadHomeContent(event, 'vegetables-health.html');" class="nav-link">Vegetables & Health</A>
						</LI>

						<!-- Finance / rewards -->
						<LI>
							<A href="#" onclick="javascript:loadHomeContent(event, 'BIG-MART-POINTS.html');" class="nav-link">Rewards & Smart Spending</A>
						</LI>

						<!-- Personal knowledge -->
						<LI>
							<A href="#" onclick='javascript:window.open("ShareKnowledgeTransferToPeople.html");' class="nav-link">
								<FONT color='#00ff00'>Share knowledge transfer</FONT>
							</A>
						</LI>

						<!-- Home utilities -->
						<LI>
							<A href="#" onclick='javascript:window.open("remove-blockages-kitchen-pvc-outflow-pipe.html");' class="nav-link">
								<FONT color='#00ff00'>Kitchen Drain</FONT>
							</A>
						</LI>
						<LI>
							<A href="#" onclick='javascript:window.open("washing-machine-repair.html");' class="nav-link">
								<FONT color='#00ff00'>Washing Machine</FONT>
							</A>
						</LI>
					</UL>
				</LI>
				<LI class="nav-item">
				<A href="#" class="nav-link">
				<SPAN class="nav-icon">&#x1F4BB;</SPAN>
				<SPAN class="nav-text"><FONT color='black'>Tech</FONT></SPAN>
				<SPAN class="nav-arrow">&gt;</SPAN>
				</A>
				<UL class="submenu">
				<LI>
					<A href="#" onclick='javascript:window.open( "TamilLetters.html" );'><FONT color='#00ff00'>Tamil letters</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "Windows_ERR_HELP.html" );'><FONT color='#00ff00'>Windows Help</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "Windows_network_icon.html" );' class="nav-link"><FONT color='#00ff00'>Windows Network</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "Power_Battery_Alert.html" );' class="nav-link"><FONT color='#00ff00'>Laptop battery alert</FONT></A>
				</LI>
				<LI>
					<A href="#" onclick='javascript:window.open( "PuttyLog.html" );' class="nav-link"><FONT color='#00ff00'>Putty logs</FONT></A>
				</LI>
				</UL>
				</LI>
			<LI class="nav-item">
					<A href="javascript:void(0);" class="nav-link">
						<SPAN class="nav-icon">&#x1F465;</SPAN>
						<SPAN class="nav-text"><FONT color='black'>VisitorCount</FONT></SPAN>
						<SPAN class="nav-arrow">&gt;</SPAN>
					</A>
					<UL class="submenu">
						<LI>
							<A href="#" onclick="javascript:loadHomeContent( event, 'Visitor_count.html' );" class="nav-link">Visitor Count</A>
						</LI>
						<LI>
							<A href="#" onclick="javascript:loadHomeContent( event, 'Responsible-Nations-Index-Jan-2026.html' );" class="nav-link">Responsible Nations Index Jan-2026</A>
						</LI>
						<LI>
							<A href="#" onclick='window.open( "earth_politics_or_general_age.html" );'><FONT color='#00ff00'>Earth politics</FONT></A>
						</LI>
					</UL>
				</LI>
				<LI class="nav-item">
				<A onclick='window.open( "tamil-calendar.html" );' class="nav-link">
				<SPAN class="nav-icon">&#x1F4C5;</SPAN>
				<SPAN class="nav-text"><FONT color='#00ff00'>Calendar</FONT></SPAN>
				</A>
					<UL class="submenu">
						<LI>
							<A href="#" onclick="javascript:loadHomeContent( event, 'IGCSE-EXAM-DATES.html' );" class="nav-link">Cambridge IGCSE Examination Timetable</A>
						</LI>
					</UL>
				</LI>
				<LI class="nav-item">
					<A href="#" class="nav-link">
						<SPAN class="nav-icon"><FONT color="black">&#x2705;</FONT></SPAN>
						<SPAN class="nav-text"><FONT color='black'>About</FONT></SPAN>
						<SPAN class="nav-arrow">&gt;</SPAN>
					</A>
					<UL class="submenu">
					<LI>
						<A href="#" onclick="javascript:loadHomeContent( event, 'My_Drawings.html' );" class="nav-link">My drawings</A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent( event, 'my-kt-rank-chatgpt-Fri-09-Jan-2026.html' );" class="nav-link">My KT to chatgpt</A>
					</LI>
					<LI>
						<A href='#' onclick='window.open( "NMurugesan_cv.html" );'><FONT color='#00ff00'>My Profile</FONT></A>
					</LI>
					<LI>
						<A href='#' onclick='window.open( "openssl_speed.html" );'><FONT color='#00ff00'><FONT color='#00ff00'>openssl.exe speed</FONT></A>
					</LI>
					<LI>
						<A href='#' onclick='window.open( "murugesan_achievements.html" );'><FONT color='#00ff00'>My achievements</FONT></A>
					</LI>
					<LI>
						<A href='#' onclick='window.open( "Sustainable_Living.html" );'><FONT color='#00ff00'>Sustainable Living</FONT></A>
					</LI>
					<LI>
						<A href="#" onclick="javascript:loadHomeContent( event, 'privacy.html' );" class="nav-link">Privacy policy</A>
					</LI>
				</UL>
				</LI>
				</UL>
				</NAV>
				<DIV id='sidefoot-content'>
				<DIV class="sidebar-footer">`);
				yyyy=new Date().getFullYear();
				document.write( "<FONT color='black'>&copy; "+yyyy+" Life Finance Helper4</FONT>" );
				document.write( `<NOSCRIPT>`);
				document.write( `<P>&copy; 900000000 Life Finance Helper5</P>
				</NOSCRIPT>
				</DIV>
				</DIV>
				</ASIDE>` );
			}
