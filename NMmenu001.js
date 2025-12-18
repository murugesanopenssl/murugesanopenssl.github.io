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
function initBankingInterface()
{
	const tips = document.querySelectorAll('.tip');
	tips.forEach((tip, index) =>
		{
			const title = tip.querySelector('.tip-title');
			if( title )
			{
				title.addEventListener( 'click', () =>
					{
						tip.classList.toggle('expanded');
					}
				);
				if( 0 === index )
				{
					tip.classList.add('expanded');
				}
			}
		}
	);
	document.querySelectorAll('a[href^="#"]').forEach(anchor =>
		{
			anchor.addEventListener('click', function (e)
				{
					e.preventDefault();
					const target = document.querySelector(this.getAttribute('href'));
					if( target )
					{
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
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};
	const observer = new IntersectionObserver( (entries) =>
		{
			entries.forEach( entry =>
				{
					if( entry.isIntersecting )
					{
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
					}
				}
			);
		}, observerOptions);
	tips.forEach( tip =>
		{
			tip.style.opacity = '0';
			tip.style.transform = 'translateY(20px)';
			tip.style.transition = 'all 0.5s ease';
			observer.observe(tip);
		}
	);
	setTimeout(initMenuHover, 100);
}
function initMenuHover()
{
	const menuWrappers = document.querySelectorAll('.menu-wrapper, .menu');
	menuWrappers.forEach( wrapper =>
		{
			const submenu = wrapper.querySelector('.submenu');
			if( !submenu )
			{
				return;
			}
			let timeout;
			wrapper.addEventListener( 'mouseenter', () =>
				{
					clearTimeout(timeout);
					submenu.classList.add('show');
				}
			);
			wrapper.addEventListener( 'mouseleave', () =>
				{
					timeout = setTimeout( () =>
						{
							submenu.classList.remove('show');
						}, 200
					);
				}
			);
			submenu.addEventListener( 'mouseenter', () =>
				{
					clearTimeout(timeout);
					submenu.classList.add('show');
				}
			);
			submenu.addEventListener( 'mouseleave', () =>
				{
					timeout = setTimeout( () =>
						{
							submenu.classList.remove('show');
						}, 200
					);
				}
			);
		}
	);
	const submenuItems = document.querySelectorAll('.submenu-item');
	submenuItems.forEach( item =>
		{
			const nested = item.querySelector('.nested-submenu');
			if( !nested )
			{
				return;
			}
			let timeout;
			item.addEventListener('mouseenter', () =>
				{
					clearTimeout(timeout);
					nested.classList.add('show');
				}
			);
			item.addEventListener( 'mouseleave', () =>
				{
					timeout = setTimeout( () =>
						{
							nested.classList.remove('show');
						}, 200
					);
				}
			);
			nested.addEventListener( 'mouseenter', () =>
				{
				clearTimeout(timeout);
				nested.classList.add('show');
				}
			);
			nested.addEventListener('mouseleave', () =>
				{
					timeout = setTimeout( () =>
						{
							nested.classList.remove('show');
						}, 200
					);
				}
			);
		}
	);
}
let currentLanguage = 'tamil';
function toggleLanguage(lang)
{
	currentLanguage = lang;
	const englishBtn = document.getElementById('englishBtn');
	const tamilBtn = document.getElementById('tamilBtn');
	if( !englishBtn || !tamilBtn )
	{
		return;
	}
	englishBtn.classList.remove('active');
	tamilBtn.classList.remove('active');
	if( 'english' === lang )
	{
		englishBtn.classList.add('active');
		showEnglishFirst();
	}
	else if( 'tamil' === lang )
	{
		tamilBtn.classList.add('active');
		showTamilFirst();
	}
	const contentSection = document.querySelector('.content-section');
	if( contentSection )
	{
		contentSection.style.opacity = '0';
		setTimeout( () =>
			{
				contentSection.style.opacity = '1';
			}, 150
		);
	}
}
function showEnglishFirst()
{
	const mainTitle = document.getElementById('mainTitle');
	const mainTitleTamil = document.getElementById('mainTitleTamil');
	if( mainTitle )
	{
		mainTitle.classList.remove('hidden');
	}
	if( mainTitleTamil )
	{
		mainTitleTamil.classList.add('hidden');
	}
	for( let i = 1; 7 >= i; ++i)
	{
		const titleEn = document.getElementById(`tip${i}Title`);
		const titleTa = document.getElementById(`tip${i}TitleTa`);
		if( titleEn )
		{
			titleEn.classList.remove('hidden');
		}
		if( titleTa )
		{
			titleTa.classList.add('hidden');
		}
	}
	const allEnTexts = document.querySelectorAll('.en-text');
	const allTaTexts = document.querySelectorAll('.ta-text');
	allEnTexts.forEach(el => el.classList.remove('hidden'));
	allTaTexts.forEach(el => el.classList.add('hidden'));
}
function showTamilFirst()
{
	const mainTitle = document.getElementById('mainTitle');
	const mainTitleTamil = document.getElementById('mainTitleTamil');
	if( mainTitle )
	{
		mainTitle.classList.add('hidden');
	}
	if( mainTitleTamil )
	{
		mainTitleTamil.classList.remove('hidden');
	}
	for (let i = 1; i <= 7; i++)
	{
		const titleEn = document.getElementById(`tip${i}Title`);
		const titleTa = document.getElementById(`tip${i}TitleTa`);
		if( titleEn )
		{
			titleEn.classList.add('hidden');
		}
		if( titleTa )
		{
			titleTa.classList.remove('hidden');
		}
	}
	const allEnTexts = document.querySelectorAll('.en-text');
	const allTaTexts = document.querySelectorAll('.ta-text');
	allEnTexts.forEach(el => el.classList.add('hidden'));
	allTaTexts.forEach(el => el.classList.remove('hidden'));
}
function writeMenu()
{
}
window.addEventListener( 'DOMContentLoaded', () =>
	{
		initBankingInterface();
		showTamilFirst();
		const tamilBtn = document.getElementById('tamilBtn');
		if( tamilBtn )
		{
			tamilBtn.classList.add('active');
		}
	}
);
function showDefault()
{
	const categoryTab = document.getElementById("CategoryAmountDetailsTab");
	const homeTable = document.getElementById("HomeTable");
	const preventWastage = document.getElementById("PreventWastage");
	if( categoryTab )
	{
		categoryTab.style.display = "none";
	}
	if( homeTable )
	{
		homeTable.style.display = "none";
	}
	if( preventWastage )
	{
		preventWastage.style.display = "table";
	}
}
function toggleTable(event)
{
	if( event )
	{
		event.preventDefault();
	}
}
document.addEventListener("DOMContentLoaded", function ()
{
	location_url = window.location.href;
	var m = "";
	m += "<div id='nm_menu' style='background:#111;color:cyan;font-family:Arial;'>";
	m += "<ul style='list-style:none;margin:0;padding:0;display:flex;'>";
	if(		-1 !== location_url.indexOf("index.html")								||
			-1 !== location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps")	||
			-1 !== location_url.indexOf("earth_politics_or_general_age")			||
			-1 !== location_url.indexOf("Pay_Book_Bharat_gas_online.html")	
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'><A><FONT color='white'>Home</FONT></A>";
	}
	else if(	-1 !== location_url.indexOf("displayMoneyHelpMenu")	||
			-1 !== location_url.indexOf("Increase-Daily-Salary")	||
			-1 !== location_url.indexOf("fd-and-savings-all-banks")	
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'><A href='index.html'><FONT color='cyan'>Home</FONT></A>";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'><A href='index.html'><FONT color='cyan'>Home</FONT></A>";
	}

m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
m += "<li class='submenu-item'>";

// Remove the <li> tags here - just the <a> tag
if( -1 !== location_url.indexOf("displayMoneyHelpMenu.html") )
{
    m += "<a>Money Help</a>";  // ← Removed <li> tags
}
else
{
    m += "<a href='displayMoneyHelpMenu.html'>Money Help</a>";  // ← Removed <li> tags
}

m += "<ul class='nested-submenu' style='display:none;position:absolute;left:100%;top:0;background:#222;list-style:none;padding:0;margin:0;min-width:220px;'>";
if( -1 !== location_url.indexOf("Increase-Daily-Salary.html") )
{
    m += "<li><a>Increase Daily Salary</a></li>";
}
else
{
    m += "<li><a href='Increase-Daily-Salary.html'>Increase Daily Salary</a></li>";
}
if( -1 !== location_url.indexOf("Pay_Book_Bharat_gas_online.html") )
{
    m += "<li><a>Steps to book bharath gas online</a></li>";
}
else
{
    m += "<li><a href='Pay_Book_Bharat_gas_online.html'>Steps to book bharath gas online</a></li>";
}
if( -1 !== location_url.indexOf("Indian-Oil-Cylinder-Booking-Online-Steps.html") )
{
    m += "<li><a>Indian Oil Cylinder Booking Online Steps</a></li>";
}
else
{
    m += "<li><a href='Indian-Oil-Cylinder-Booking-Online-Steps.html'>Indian Oil Cylinder Booking Online Steps</a></li>";
}
if( -1 !== location_url.indexOf("earth_politics_or_general_age.html") )
{
    m += "<li><a>GDP / Economic Output</a></li>";
}
else
{
    m += "<li><a href='earth_politics_or_general_age.html'>GDP / Economic Output</a></li>";
}
m += "</ul>"; // Close nested submenu
m += "</li>"; // Close submenu-item

	if( -1 !== location_url.indexOf("fd-and-savings-all-banks.html")  )
	{
		m += "<li><a>FD & Savings</a></li>";
	}
	else
	{
		m += "<li><a href='fd-and-savings-all-banks.html'>FD & Savings</a></li>";
	}
	m += "</ul></li>";
	if(	-1 !== location_url.indexOf("post-office-mis.html")				||
		-1 !== location_url.indexOf("post-office-nsc.html")				||
		-1 !== location_url.indexOf("HandleBankAMB")					||
		-1 !== location_url.indexOf("Indian-bank-to-other-bank.html")			||
		-1 !== location_url.indexOf("SBI_ETDR_")			
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'>Banking";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'>Banking";
	}
	m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
	if( -1 !== location_url.indexOf("post-office-mis.html")  )
	{
		m += "<li><a>Post Office MIS</a></li>";
	}
	else
	{
		m += "<li><a href='post-office-mis.html'>Post Office MIS</a></li>";
	}
	if( -1 !== location_url.indexOf("post-office-nsc.html")  )
	{
		m += "<li><a>Post Office NSC</a></li>";
	}
	else
	{
		m += "<li><a href='post-office-nsc.html'>Post Office NSC</a></li>";
	}
	if( -1 !== location_url.indexOf("SBI_ETDR_INTEREST.html")  )
	{
		m += "<li><a>SBI FD Interest</a></li>";
	}
	else
	{
		m += "<li><a href='SBI_ETDR_INTEREST.html'>SBI FD Interest</a></li>";
	}
	if( -1 !== location_url.indexOf("Indian-bank-to-other-bank.html")  )
	{
		m += "<li><a>Inter Bank Transfer</a></li>";
	}
	else
	{
		m += "<li><a href='Indian-bank-to-other-bank.html'>Inter Bank Transfer</a></li>";
	}
	if( -1 !== location_url.indexOf("HandleBankAMB.html")  )
	{
		m += "<li><a>AMB Handling</a></li>";
	}
	else
	{
		m += "<li><a href='HandleBankAMB.html'>AMB Handling</a></li>";
	}
	m += "</ul></li>";
	if(	-1 !== location_url.indexOf("spending.html")				||
		-1 !== location_url.indexOf("spending-chart.html")			||
		-1 !== location_url.indexOf("SavedAmt.html")				||
		-1 !== location_url.indexOf("my_exercise.html")			
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'>Spending";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'>Spending";
	}
	// m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
	// m += "<ul class='submenu' style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
	m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
	if( -1 !== location_url.indexOf("spending.html")  )
	{
		m += "<li><a>Daily Spending</a></li>";
	}
	else
	{
		m += "<li><a href='spending.html'>Daily Spending</a></li>";
	}
	if( -1 !== location_url.indexOf("SavedAmt.html")  )
	{
		m += "<li><a>Saved amount</a></li>";
	}
	else
	{
		m += "<li><a href='SavedAmt.html'>Saved amount</a></li>";
	}
	if( -1 !== location_url.indexOf("spending-chart.html")  )
	{
		m += "<li><a>Spending Chart</a></li>";
	}
	else
	{
		m += "<li><a href='spending-chart.html'>Spending Chart</a></li>";
	}
	if( -1 !== location_url.indexOf("my_exercise.html")  )
	{
		m += "<li><a>My exercise</a></li>";
	}
	else
	{
		m += "<li><a href='my_exercise.html'>My exercise</a></li>";
	}
	m += "</ul></li>";
	if(	-1 !== location_url.indexOf("washing-machine-repair")				||
		-1 !== location_url.indexOf("ShareKnowledgeTransferToPeople")			||
		-1 !== location_url.indexOf("remove-blockages-kitchen-pvc-outflow-pipe")	
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'>Utilities";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'>Utilities";
	}
	m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
	if( -1 !== location_url.indexOf("ShareKnowledgeTransferToPeople")  )
	{
		m += "<li><a>Share knowledge transfer</a></li>";
	}
	else
	{
		m += "<li><a href='ShareKnowledgeTransferToPeople.html'>Share knowledge transfer</a></li>";
	}
	if( -1 !== location_url.indexOf("remove-blockages-kitchen-pvc-outflow-pipe")  )
	{
		m += "<li><a>Kitchen Drain</a></li>";
	}
	else
	{
		m += "<li><a href='remove-blockages-kitchen-pvc-outflow-pipe.html'>Kitchen Drain</a></li>";
	}
	if( -1 !== location_url.indexOf("washing-machine-repair")  )
	{
		m += "<li><a>Washing Machine</a></li>";
	}
	else
	{
		m += "<li><a href='washing-machine-repair.html'>Washing Machine</a></li>";
	}
	m += "</ul></li>";
	if(	-1 !== location_url.indexOf("Windows_ERR_HELP")			  ||
		-1 !== location_url.indexOf("windows-network")			||
		-1 !== location_url.indexOf("PuttyLog")				||
		-1 !== location_url.indexOf("cygwin_laptop_battery_alert")	
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'>Technology";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'>Technology";
	}
	if( -1 !== location_url.indexOf("Windows_ERR_HELP.html")  )
	{
		m += "<ul style='background-color:orange;display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
		m += "<li><a>Windows Help1</a></li>";
	}
	else
	{
		m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
		m += "<li><a href='Windows_ERR_HELP.html'>Windows Help2</a></li>";
	}
	if( -1 !== location_url.indexOf("windows-network.html")  )
	{
		m += "<li><a>Windows Network</a></li>";
	}
	else
	{
		m += "<li><a href='windows-network.html'>Windows Network</a></li>";
	}
	if( -1 !== location_url.indexOf("cygwin_laptop_battery_alert.html")  )
	{
		m += "<li><a>Battery Alert</a></li>";
	}
	else
	{
		m += "<li><a href='cygwin_laptop_battery_alert.html'>Battery Alert</a></li>";
	}
	if( -1 !== location_url.indexOf("PuttyLog.html")  )
	{
		m += "<li><a>Putty Logs</a></li>";
	}
	else
	{
		m += "<li><a href='PuttyLog.html'>Putty Logs</a></li>";
	}
	m += "</ul></li>";
	if(	-1 !== location_url.indexOf("Visitor_count.html")			  
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'><A>Visitor count</A>";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'><A href='Visitor_count.html'>Visitor count</A>";
	}
	if(	-1 !== location_url.indexOf("tamil-calendar.html")			  
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'><A>Tamil/Gregorian calendar</A>";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'><A href='tamil-calendar.html'>Tamil/Gregorian calendar</A>";
	}
	if(	-1 !== location_url.indexOf("NMurugesan_cv.html")  	||
		-1 !== location_url.indexOf("openssl_speed.html")	||
		-1 !== location_url.indexOf("Sustainable_Living")	||
		-1 !== location_url.indexOf("privacy")			||
		-1 !== location_url.indexOf("murugesan_achievements")
	)
	{
		m += "<li style='background-color:orange;position:relative;padding:10px;'>About";
	}
	else
	{
		m += "<li style='position:relative;padding:10px;'>About";
	}
	if( -1 !== location_url.indexOf("NMurugesan_cv.html")  )
	{
		m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
		m += "<li><a>My Profile</a></li>";
	}
	else
	{
		m += "<ul style='display:none;position:absolute;background:#222;list-style:none;padding:0;margin:0;'>";
		m += "<li><a href='NMurugesan_cv.html'>My Profile</a></li>";
	}
	if( -1 !== location_url.indexOf("openssl_speed.html") )
	{
		m += "<li><a>openssl.exe speed</a></li>";
	}
	else
	{
		m += "<li><a href='openssl_speed.html'>openssl.exe speed</a></li>";
	}
	if( -1 !== location_url.indexOf("murugesan_achievements.html")  )
	{
		m += "<li><a>Achievements</a></li>";
	}
	else
	{
		m += "<li><a href='murugesan_achievements.html'>Achievements</a></li>";
	}
	if( -1 !== location_url.indexOf("Sustainable_Living.html")  )
	{
		m += "<li><a>Sustainable Living</a></li>";
	}
	else
	{
		m += "<li><a href='Sustainable_Living.html'>Sustainable Living</a></li>";
	}
	if( -1 !== location_url.indexOf("privacy.html")  )
	{
		m += "<li><a>Privacy Policy</a></li>";
	}
	else
	{
		m += "<li><a href='privacy.html'>Privacy Policy</a></li>";
	}
	m += "</ul></li>";
	m += "</ul></div>";
		document.body.insertAdjacentHTML("afterbegin", m);
		var items = document.querySelectorAll("#nm_menu > ul > li");
		for( var i=0;i<items.length;i++ )
		{
			(function(li)
			{
				var sub = li.querySelector("ul");
				if( !sub ) return;
				li.addEventListener("mouseenter", function ()
				{
					sub.style.display = "block";
				});
				li.addEventListener("mouseleave", function ()
				{
					sub.style.display = "none";
				});
			})(items[i]);
		}
	}
);
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var submenuItems = document.querySelectorAll("#nm_menu .submenu-item");
        
        for(var i = 0; i < submenuItems.length; i++) {
            (function(item) {
                var nestedSubmenu = item.querySelector(".nested-submenu");
                if(!nestedSubmenu) return;
                
                var timeout;
                
                item.addEventListener("mouseenter", function() {
                    clearTimeout(timeout);
                    nestedSubmenu.style.display = "block";
                });
                
                item.addEventListener("mouseleave", function() {
                    timeout = setTimeout(function() {
                        nestedSubmenu.style.display = "none";
                    }, 200);
                });
                
                nestedSubmenu.addEventListener("mouseenter", function() {
                    clearTimeout(timeout);
                    nestedSubmenu.style.display = "block";
                });
                
                nestedSubmenu.addEventListener("mouseleave", function() {
                    timeout = setTimeout(function() {
                        nestedSubmenu.style.display = "none";
                    }, 200);
                });
            })(submenuItems[i]);
        }
    }, 200);
});
