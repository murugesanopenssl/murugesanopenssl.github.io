(	function injectDisabledLinkStyles()
	{
		if (document.getElementById('disabled-link-styles')) {
			return;
		}
		
		const style = document.createElement('style');
		style.id = 'disabled-link-styles';
		style.textContent = `
			/* Disabled navigation link styling */
			.nav-item a[style*="not-allowed"],
			.submenu a[style*="not-allowed"] {
				cursor: not-allowed !important;
				pointer-events: none !important;
				opacity: 0.5 !important;
				text-decoration: none !important;
				color: #888 !important;
				background-color: rgba(0, 0, 0, 0.1) !important;
			}
			
			/* Prevent hover effects on disabled links */
			.nav-item a[style*="not-allowed"]:hover,
			.submenu a[style*="not-allowed"]:hover {
				background-color: rgba(0, 0, 0, 0.1) !important;
				color: #888 !important;
				padding-left: 20px !important;
			}
			
			/* Visual indicator for disabled state */
			.nav-item a[style*="not-allowed"]::after,
			.submenu a[style*="not-allowed"]::after {
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
function handleSpendingPage() {
    console.log("=== Handling spending.html ===");
    
    const messageDiv = document.getElementById("message");
    if (messageDiv) {
        messageDiv.textContent = "Initializing...";
    }
    if (typeof firebase !== 'undefined' && firebase.database) {
        console.log("Firebase already available, reinitializing...");
        firebaseInitialized = false;
        initializeSpendingApp();
        return;
    }
    if (!firebaseScriptsLoaded) {
        console.log("Loading Firebase scripts...");
        loadFirebaseScripts(() => {
            console.log("Firebase scripts loaded successfully");
            firebaseScriptsLoaded = true;
            initializeSpendingApp();
        });
    }
	else
	{
        // Scripts loaded but Firebase not initialized yet
        waitForFirebase(() => {
            initializeSpendingApp();
        });
    }
}

function loadFirebaseScripts(callback) {
    // Remove any existing Firebase scripts first
    const existingScripts = document.querySelectorAll('script[src*="firebase"]');
    existingScripts.forEach(script => {
        console.log("Removing existing Firebase script:", script.src);
        script.remove();
    });
    
    // Load Firebase App first
    const appScript = document.createElement('script');
    appScript.src = 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js';
    appScript.onload = () => {
        console.log("Firebase App script loaded");
        
        // Then load Firebase Database
        const dbScript = document.createElement('script');
        dbScript.src = 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database-compat.js';
        dbScript.onload = () => {
            console.log("Firebase Database script loaded");
            callback();
        };
        dbScript.onerror = () => {
            console.error("Failed to load Firebase Database script");
            alert("Failed to load Firebase Database. Please check your internet connection.");
        };
        document.head.appendChild(dbScript);
    };
    appScript.onerror = () => {
        console.error("Failed to load Firebase App script");
        alert("Failed to load Firebase. Please check your internet connection.");
    };
    document.head.appendChild(appScript);
}

function waitForFirebase(callback, maxAttempts = 20) {
    let attempts = 0;
    const checkInterval = setInterval(() => {
        attempts++;
        console.log("Waiting for Firebase... attempt", attempts);
        
        if (typeof firebase !== 'undefined' && firebase.database) {
            console.log("✓ Firebase available!");
            clearInterval(checkInterval);
            callback();
        }
	else if (attempts >= maxAttempts)
	{
            console.error("Firebase not available after", attempts, "attempts");
            clearInterval(checkInterval);
            const messageDiv = document.getElementById("message");
            if (messageDiv) {
                messageDiv.textContent = "Error: Firebase failed to load. Please refresh the page.";
            }
            alert("Firebase initialization timeout.\n\nPlease refresh the page (F5).");
        }
    }, 300);
}

function initializeSpendingApp() {
    console.log("=== Initializing spending app ===");
    
    const messageDiv = document.getElementById("message");
    if (messageDiv) {
        messageDiv.textContent = "Loading data from Firebase...";
    }
    
    // Wait a bit for DOM to settle
    setTimeout(() => {
        // Execute the spending.html initialization code
        if (typeof window.initAndLoad === 'function') {
            console.log("Calling window.initAndLoad()");
            window.initAndLoad();
        }
	else if (typeof initAndLoad === 'function')
	{
            console.log("Calling initAndLoad()");
            initAndLoad();
        }
	else
	{
            console.error("initAndLoad function not found!");
            
            // Try to extract and execute inline scripts
            const scripts = document.querySelectorAll('.main-content script');
            console.log("Found", scripts.length, "scripts in main-content");
            
            scripts.forEach((script, index) => {
                if (!script.src) {
                    console.log("Executing inline script", index);
                    try {
                        eval(script.textContent);
                    } catch (error) {
                        console.error("Error executing script", index, ":", error);
                    }
                }
            });
            
            // Try again after script execution
            setTimeout(() => {
                if (typeof window.initAndLoad === 'function') {
                    window.initAndLoad();
                }
		else if (typeof initAndLoad === 'function')
		{
                    initAndLoad();
                }
		else
		{
                    console.error("Still can't find initAndLoad!");
                    if (messageDiv) {
                        messageDiv.textContent = "Error: Failed to initialize. Please refresh the page.";
                    }
                }
            }, 500);
        }
    }, 100);
}

function processPageScripts(content, htmlFileName) {
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
        }
	else
	{
            var scriptText = script.textContent;
            if (!scriptText.includes('DisplayMainMenu')) {
                console.log("Inline script, length:", scriptText.length);
                
                if (htmlFileName === "my_exercise.html") {
                    scriptText = scriptText.replace(
                        /window\.onload\s*=\s*function\s*\(\s*\)\s*\{/g,
                        '(function() {'
                    );
                    scriptText = scriptText.replace(/\}\s*;\s*$/, '})();');
                }
                
                newScript.textContent = scriptText;
            }
		else
		{
                console.log("Skipping DisplayMainMenu script");
                return;
            }
        }
        
        if (script.type) {
            newScript.type = script.type;
        }
        
        document.body.appendChild(newScript);
    });
    
    // Special handling for my_exercise.html
    if (htmlFileName === "my_exercise.html") {
        console.log("=== Initializing My Exercise page ===");
        setTimeout(function() {
            if (typeof buildMonthSelect === 'function') {
                console.log("Calling buildMonthSelect()");
                buildMonthSelect();
            }
            if (typeof generateExerciseTable === 'function') {
                console.log("Calling generateExerciseTable()");
                generateExerciseTable();
            }
		else
		{
                console.warn("generateExerciseTable() not found!");
            }
        }, 100);
    }
}

function updateNavigationState(htmlFileName) {
    // Update "Life Finance Helper" link
    let lifeFinanceHelperLink = document.querySelector(".sidebar-header #life-finance-helper");
    if (lifeFinanceHelperLink) {
        lifeFinanceHelperLink.setAttribute("href", "#");
        lifeFinanceHelperLink.setAttribute("onclick", "loadMainContent(event)");
    }
    
    // Reset ALL nav links first (re-enable everything)
    document.querySelectorAll(".nav-item a, .submenu a").forEach(link => {
        // Restore original attributes if they exist
        if (link.dataset.originalHref) {
            link.setAttribute("href", link.dataset.originalHref);
            delete link.dataset.originalHref;
        }
        if (link.dataset.originalOnclick) {
            link.setAttribute("onclick", link.dataset.originalOnclick);
            delete link.dataset.originalOnclick;
        }
        
        // Reset styles to enabled state
        link.style.cursor = "";
        link.style.textDecoration = "";
        link.style.pointerEvents = "";
        link.style.color = "";
        link.style.opacity = "";
        link.style.backgroundColor = "";
        
        // Remove disabled class if exists
        link.classList.remove("disabled-link");
    });
    
    // Remove active class from all nav items
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    
    // Find and disable the current page's link
    let activeLink = document.querySelector(`[onclick*="${htmlFileName}"]`);
    if (activeLink) {
        // Mark parent nav-item as active
        const parentNavItem = activeLink.closest(".nav-item");
        if (parentNavItem) {
            parentNavItem.classList.add("active");
        }
        
        // Save original attributes before disabling
        const originalHref = activeLink.getAttribute("href");
        const originalOnclick = activeLink.getAttribute("onclick");
        
        if (originalHref) {
            activeLink.dataset.originalHref = originalHref;
        }
        if (originalOnclick) {
            activeLink.dataset.originalOnclick = originalOnclick;
        }
        
        // Disable the link (make it non-clickable)
        activeLink.removeAttribute("href");
        activeLink.removeAttribute("onclick");
        
        // Visual feedback - make it look disabled
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

// Keep all your other existing functions...
// (showDefault, getTodaysDate, addTodaysRow, toggleSubmenu01, etc.)

// Add CSS for disabled links
(function addDisabledLinkStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .disabled-link {
            cursor: not-allowed !important;
            pointer-events: none !important;
            opacity: 0.5 !important;
            text-decoration: none !important;
            color: #888 !important;
            background-color: rgba(0,0,0,0.1) !important;
        }
        
        .disabled-link:hover {
            background-color: rgba(0,0,0,0.1) !important;
            color: #888 !important;
        }
        
        .nav-item.active > .nav-link {
            background: rgba(255, 255, 255, 0.1);
            padding-left: 25px;
        }
    `;
    document.head.appendChild(style);
})();
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
			function loadHomeContent(event, htmlFileName)
			{
				console.log("=== loadHomeContent called ===");
				console.log("Loading file:", htmlFileName);
				if( "HandleBankAMB.html" == htmlFileName )
				{
					document.title = "ATM Card exception usage";
				}
				else if ("displayMoneyHelpMenu.html" == htmlFileName) {
					document.title = "Money Help Menu";
				}
				else if ("post-office-mis.html" == htmlFileName) {
					document.title = "Post Office MIS";
				}
				else if ("spending.html" == htmlFileName) {
					document.title = "Daily Spending";
					console.log("Setting title to 'Daily Spending'");
				}
				else if ("my_exercise.html" == htmlFileName) {
					document.title = "My exercise";
				}
				else if ("SavedAmt.html" == htmlFileName) {
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
				}
				else {
				var scriptText = script.textContent;
				if (!scriptText.includes('DisplayMainMenu')) {
				console.log("Inline script, length:", scriptText.length);
				if ("my_exercise.html" === htmlFileName) {
				scriptText = scriptText.replace(
				/window\.onload\s*=\s*function\s*\(\s*\)\s*\{/g,
				'(function() {'
				);
				scriptText = scriptText.replace(/\}\s*;\s*$/, '})();');
				}
				newScript.textContent = scriptText;
				}
				else {
				console.log("Skipping DisplayMainMenu script");
				}
				}

				if (script.type) {
				newScript.type = script.type;
				}
				document.body.appendChild(newScript);
				});

				console.log("All scripts processed");

				if ("my_exercise.html" === htmlFileName) {
				console.log("=== Initializing My Exercise page ===");
				setTimeout(function() {
				if ("function" === typeof buildMonthSelect) {
				console.log("Calling buildMonthSelect()");
				buildMonthSelect();
				}
				if ("function" === typeof generateExerciseTable) {
				console.log("Calling generateExerciseTable()");
				generateExerciseTable();
				}
				else {
				console.warn("generateExerciseTable() not found!");
				}
				}, 100);
				}

				if ("spending.html" === htmlFileName) {
				console.log("=== Special handling for spending.html ===");

				// First, check if Firebase compat scripts are already loaded
				const existingFirebaseApp = document.querySelector('script[src*="firebase-app-compat"]');
				const existingFirebaseDB = document.querySelector('script[src*="firebase-database-compat"]');

				if (existingFirebaseApp || existingFirebaseDB) {
				console.log("Removing existing Firebase compat scripts");
				if (existingFirebaseApp) existingFirebaseApp.remove();
				if (existingFirebaseDB) existingFirebaseDB.remove();
				}

				// Wait for scripts to load and execute
				setTimeout(function() {
				console.log("Checking Firebase compat availability...");

				// Show loading message
				const messageDiv = document.getElementById("message");
				if (messageDiv) {
				messageDiv.textContent = "Loading Firebase...";
				}

				// Wait for Firebase compat to be available
				let checkCount = 0;
				const checkFirebase = setInterval(function() {
				checkCount++;
				console.log("Check attempt", checkCount, "- typeof firebase:", typeof firebase);

				if (typeof firebase !== 'undefined' && firebase.database) {
				console.log("✓ Firebase compat is available!");
				clearInterval(checkFirebase);

				// Now call initAndLoad
				setTimeout(function() {
				if (typeof window.initAndLoad === 'function') {
				console.log("Calling window.initAndLoad()");
				window.initAndLoad();
				}
				else if (typeof initAndLoad === 'function') {
				console.log("Calling initAndLoad()");
				initAndLoad();
				}
				else {
				console.error("initAndLoad function not found!");
				if (messageDiv) {
				messageDiv.textContent = "Error: Initialization function not found";
				}
				}
				}, 100);

				}
				else if (checkCount >= 20) {
				console.error("Firebase compat not loaded after 6 seconds");
				clearInterval(checkFirebase);

				if (messageDiv) {
				messageDiv.textContent = "Error: Firebase failed to load. Please refresh the page.";
				}
				alert("Firebase initialization timeout.\n\nPlease refresh the page (F5) or open spending.html directly.");
				}
				else {
				console.log("Waiting for Firebase compat... attempt", checkCount);
				}
				}, 300); // Check every 300ms

				}, 500);
				}
				}

				// Update Life Finance Helper link
				let lifeFinanceHelperLink = document.querySelector(".sidebar-header #life-finance-helper");
				if (lifeFinanceHelperLink) {
				lifeFinanceHelperLink.setAttribute("href", "#");
				lifeFinanceHelperLink.setAttribute("onclick", "loadMainContent(event)");
				}

				// FIRST: Re-enable ALL links
				document.querySelectorAll(".nav-item a, .submenu a").forEach(link => {
				link.style.cursor = "pointer";
				link.style.textDecoration = "underline";
				link.style.pointerEvents = "auto";
				link.style.color = "";
				link.style.opacity = "";
				link.style.backgroundColor = "";

				if (link.dataset.originalHref) {
				link.setAttribute("href", link.dataset.originalHref);
				}
				if (link.dataset.originalOnclick) {
				link.setAttribute("onclick", link.dataset.originalOnclick);
				}
				});

				// SECOND: Find the active link and disable it
				let activeLink = document.querySelector(`[onclick*="${htmlFileName}"]`);
				if (activeLink) {
				activeLink.closest(".nav-item").classList.add("active");

				// Check if this is a page that should have its link disabled
				const shouldDisableLink = 
				(htmlFileName === "HandleBankAMB.html" && activeLink.textContent.trim() === "AtmTips0") ||
				(htmlFileName === "displayMoneyHelpMenu.html" && activeLink.textContent.trim() === "Money Help0") ||
				(htmlFileName === "Increase-Daily-Salary.html" && activeLink.textContent.trim() === "Increase daily salary") ||
				(htmlFileName === "Bharath_gas_booking_steps.html" && activeLink.textContent.trim() === "Bharath gas online booking steps") ||
				(htmlFileName === "Indian-Oil-Cylinder-Booking-Online-Steps.html" && activeLink.textContent.trim() === "Indian oil gas online booking steps") ||
				(htmlFileName === "spending.html" && activeLink.textContent.trim() === "Daily spending");

				if (shouldDisableLink) {
				console.log("Disabling link for:", activeLink.textContent.trim());

				// Save original attributes
				if (!activeLink.dataset.originalHref) {
				activeLink.dataset.originalHref = activeLink.getAttribute("href") || "#";
				}
				if (!activeLink.dataset.originalOnclick) {
				activeLink.dataset.originalOnclick = activeLink.getAttribute("onclick") || "";
				}

				// Disable the link
				activeLink.removeAttribute("href");
				activeLink.removeAttribute("onclick");
				activeLink.style.cursor = "not-allowed";
				activeLink.style.textDecoration = "none";
				activeLink.style.pointerEvents = "none";
				activeLink.style.color = "#888";
				activeLink.style.opacity = "0.5";
				activeLink.style.backgroundColor = "rgba(0,0,0,0.1)";

				// Special logging for spending.html
				if (htmlFileName === "spending.html") {
				console.log("✓ Daily spending link disabled successfully");
				console.log("Link href:", activeLink.getAttribute("href"));
				console.log("Link onclick:", activeLink.getAttribute("onclick"));
				}
				}
				}

				console.log("=== loadHomeContent complete ===");
				}
				else {
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
					<SPAN class="nav-text"><FONT color='black'>HandleMoneyErrs</FONT></SPAN>
					<SPAN class="nav-arrow">&gt;</SPAN>
				</A>
				<UL class="submenu">
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
		<A href="#" onclick='javascript:window.open( "post-office-mis.html" );' class="nav-link"><FONT color='#00ff00'>Post office MIS</FONT></A>
	</LI>
	<LI>
		<A href="#" onclick='javascript:window.open( "post-office-nsc.html" );' class="nav-link"><FONT color='#00ff00'>Post office NSC</FONT></A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent( event, 'why-to-open-fixed-deposit.html' );" class="nav-link">Why Fixed deposit?</A>
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
		<A href="#" onclick="javascript:loadHomeContent( event, 'Last-year-investment-provit-at-earth.html' );" class="nav-link">Last Year Investment Trends</A>
	</LI>
	<LI>
		<A href="#" onclick="javascript:loadHomeContent( event, 'gold-loan.html' );" class="nav-link">When to pay loan?</A>
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
				<A href="#" id="spending" onclick="javascript:window.open( 'spending.html' );" class="nav-link"><FONT color='#00ff00'>Daily spending</FONT></A>
			</LI>
			<LI>
				<A href="#" onclick="javascript:loadHomeContent( event, 'SavedAmt.html' );" class="nav-link">Saved amount</A>
			</LI>
			<LI>
				<A href="#" onclick='javascript:window.open( "spending-chart.html" );' class="nav-link"><FONT color='#00ff00'>Spending chart</FONT></A>
			</LI>
			<LI>
				<A href="#" onclick="javascript:loadHomeContent( event, 'my_exercise.html' );" class="nav-link">My exercise</A>
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
	<LI>
		<A href="#" onclick='javascript:window.open( "ShareKnowledgeTransferToPeople.html" );' class="nav-link"><FONT color='#00ff00'>Share knowledge transfer</FONT></A>
	</LI>
	<LI>
		<A href="#" onclick='javascript:window.open( "remove-blockages-kitchen-pvc-outflow-pipe.html" );' class="nav-link"><FONT color='#00ff00'>Kitchen Drain</FONT></A>
	</LI>
	<LI>
		<A href="#" onclick='javascript:window.open( "washing-machine-repair.html" );' class="nav-link"><FONT color='#00ff00'>Washing Machine</FONT></A>
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
				<A href="#" onclick='window.open( "earth_politics_or_general_age.html" );'><FONT color='#00ff00'>Earth politics</FONT></A>
			</LI>
		</UL>
	</LI>
	<LI class="nav-item">
	<A onclick='window.open( "tamil-calendar.html" );' class="nav-link">
	<SPAN class="nav-icon">&#x1F4C5;</SPAN>
	<SPAN class="nav-text"><FONT color='#00ff00'>Calendar</FONT></SPAN>
	</A>
	</LI>
<LI class="nav-item">
    <A href="#" class="nav-link">
        <SPAN class="nav-icon"><FONT color="black">&#x2705;</FONT></SPAN>
        <SPAN class="nav-text"><FONT color='black'>About</FONT></SPAN>
        <SPAN class="nav-arrow">&gt;</SPAN>
    </A>
    <UL class="submenu">
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
