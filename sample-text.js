let Home1Toggle = false;

const contentData = {
	home: "Prevent-Service-Charge-Loss.html",
	home1: "spending.html",
	home2: "home2.html",
	home3: "home3.html",
	programs: "programs.html",
	programs1: "programs1.html",
	programs2: "programs2.html",
	programs3: "programs3.html",
	about: "about.html",
	about1: "about1.html",
	about2: "about2.html",
	about3: "about3.html",
	contact: "contact.html",
	contact1: "contact1.html",
	contact2: "contact2.html",
	contact3: "contact3.html",
	sectionA: "snake-dharmapuri-catch.html",
	sectionA1: "snake-dharmapuri-catch.html",
	sectionA2: "sectionA2.html",
	sectionA3: "sectionA3.html",
	sectionB: "sectionB.html",
	sectionB1: "sectionB1.html",
	sectionB2: "sectionB2.html",
	sectionB3: "sectionB3.html",
	sectionC: "sectionC.html",
	sectionC1: "sectionC1.html",
	sectionC2: "sectionC2.html",
	sectionC3: "sectionC3.html"
};

document.addEventListener('DOMContentLoaded', () => {
	const mainContent = document.getElementById('mainContent');
	const topLinks = document.querySelectorAll('.main-menu > ul > li > a');

	function setActiveMenu(key, file) {
		topLinks.forEach(link => {
			link.style.backgroundColor = "";
			link.removeAttribute('disabled');
			link.href = "#";
		});
		const activeLink = document.querySelector(`.main-menu > ul > li > a[data-content="${key}"]`);
		if(activeLink) {
			if(file === "Prevent-Service-Charge-Loss.html" || file === "spending.html") {
				activeLink.style.backgroundColor = "orange";
				activeLink.removeAttribute('href');
			}
		}
	}

	function updateTableDisplay(key) {
    const homeTable = document.getElementById("HomeTable");
    const preventTable = document.getElementById("PreventWastage");
    const categoryTable = document.getElementById("CategoryAmountDetailsTab");

    if(!preventTable || !categoryTable) return;

    // Reset all tables first
    if(homeTable) homeTable.style.display = "none";
    preventTable.style.display = "none";
    categoryTable.style.display = "none";

    if(key === "home1")
	{
        // categoryTable.style.display = "table";
		Home1Toggle = true;
    }
	else if(key === "home")
	{
        preventTable.style.display = "table";
    }
}

	function loadFile(key) {
		const file = contentData[key];
		if(!file) return;

		if(key === "home1") Home1Toggle = !Home1Toggle;

		setActiveMenu(key, file);

		fetch(file)
			.then(response => {
				if(!response.ok) throw new Error("Failed to load: " + file);
				return response.text();
			})
			.then(html => {
				mainContent.innerHTML = html;

				// Re-run scripts from fetched HTML
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');
				const scripts = doc.querySelectorAll('script');
				scripts.forEach(oldScript => {
					const newScript = document.createElement('script');
					if(oldScript.src) newScript.src = oldScript.src;
					else newScript.textContent = oldScript.textContent;
					document.body.appendChild(newScript);
				});

				if(file === "spending.html" || file === "Prevent-Service-Charge-Loss.html") {
					setTimeout(() => updateTableDisplay(key), 200);
				}
			})
			.catch(err => {
				mainContent.innerHTML = `<h1>Error</h1><p>${err.message}</p>`;
			});
	}

	// Attach click handlers
	topLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const key = link.dataset.content;
			loadFile(key);
		});
	});

	// Load default page
	loadFile("home");
});

// Optional: global function to trigger spending.html manually
function loadPage(event) {
	if(event) {
		event.preventDefault();
		event.stopPropagation();
	}
	loadFile('home1');
}