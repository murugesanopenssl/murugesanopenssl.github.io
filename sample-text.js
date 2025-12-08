let Home1Toggle = false;
const contentData = {
	home: "Prevent-Service-Charge-Loss.html",
	home1: "spending1.html",
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

document.addEventListener('DOMContentLoaded', function() {
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
			if("Prevent-Service-Charge-Loss.html" === file || "spending1.html" === file) {
				activeLink.style.backgroundColor = "orange";
				activeLink.removeAttribute('href');
			} else {
				activeLink.style.backgroundColor = "";
				activeLink.href = "#";
			}
		}
	}
	
	function updateTableDisplay(key) {
		const homeTable = document.getElementById("HomeTable");
		const preventTable = document.getElementById("PreventWastage");
		const categoryTable = document.getElementById("CategoryAmountDetailsTab");
		
		if(!preventTable || !categoryTable) {
			return;
		}
		
		if("home1" === key) {
			if(Home1Toggle) {
				preventTable.style.display = "table";
				categoryTable.style.display = "none";
			} else {
				preventTable.style.display = "none";
				categoryTable.style.display = "table";
			}
			if(homeTable) homeTable.style.display = "none";
		} else if("home" === key) {
			if(homeTable) homeTable.style.display = "none";
			preventTable.style.display = "table";
			categoryTable.style.display = "none";
		}
	}
	
	document.querySelectorAll('[data-content]').forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			const key = this.dataset.content;
			const file = contentData[key];
			
			if(!file) return;
			
			if("home1" === key) {
				Home1Toggle = !Home1Toggle;
			}
			
			setActiveMenu(key, file);
			
			if(file.endsWith('.html')) {
				fetch(file)
					.then(response => {
						if(!response.ok) throw new Error("Failed to load: " + file);
						return response.text();
					})
					.then(html => {
						mainContent.innerHTML = html;
						if(file === "spending1.html" || file === "Prevent-Service-Charge-Loss.html") {
							setTimeout(() => {
								updateTableDisplay(key);
							}, 200);
						}
					})
					.catch(err => {
						mainContent.innerHTML = `<h1>Error</h1><p>${err.message}</p>`;
					});
			} else {
				mainContent.innerHTML = "<h1>Content Not Found</h1>";
			}
		});
	});
	const defaultFile = "Prevent-Service-Charge-Loss.html";
	setActiveMenu('home', defaultFile);
	
	fetch(defaultFile)
		.then(response => {
			if(!response.ok) {
				throw new Error("Failed to load: " + defaultFile);
			}
			return response.text();
		})
		.then(html => {
			mainContent.innerHTML = html;
		})
		.catch(err => {
			mainContent.innerHTML = `<h1>Error</h1><p>${err.message}</p>`;
		});
});
function loadPage(event) {
	file="spending1.html";
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;

    let key = 'home1';
    if (file === 'Prevent-Service-Charge-Loss.html') {
        key = 'home';
    }
    
    const topLinks = document.querySelectorAll('.main-menu > ul > li > a');
    topLinks.forEach(link => {
        link.style.backgroundColor = "";
        link.removeAttribute('disabled');
        link.href = "#";
    });
    
    const activeLink = document.querySelector(`.main-menu > ul > li > a[data-content="${key}"]`);
    if(activeLink) {
        if(file === "Prevent-Service-Charge-Loss.html" || file === "spending1.html") {
            activeLink.style.backgroundColor = "orange";
            activeLink.removeAttribute('href');
        }
    }

    fetch(file)
        .then(response => {
            if(!response.ok) throw new Error("Failed to load: " + file);
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyContent = doc.body.innerHTML;
            
            mainContent.innerHTML = bodyContent;
            
            const scripts = doc.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.body.appendChild(newScript);
            });
            
            if(file === "spending1.html" || file === "Prevent-Service-Charge-Loss.html") {
                setTimeout(() => {
                    const homeTable = document.getElementById("HomeTable");
                    const preventTable = document.getElementById("PreventWastage");
                    const categoryTable = document.getElementById("CategoryAmountDetailsTab");
                    
                    if(preventTable && categoryTable) {
                        if(file === "spending1.html") {
                            if(Home1Toggle) {
                                preventTable.style.display = "table";
                                categoryTable.style.display = "none";
                            } else {
                                preventTable.style.display = "none";
                                categoryTable.style.display = "table";
                            }
                            if(homeTable) homeTable.style.display = "none";
                        } else if(file === "Prevent-Service-Charge-Loss.html") {
                            if(homeTable) homeTable.style.display = "none";
                            preventTable.style.display = "table";
                            categoryTable.style.display = "none";
                        }
                    }
                }, 200);
            }
        })
        .catch(err => {
            mainContent.innerHTML = `<h1>Error</h1><p>${err.message}</p>`;
        });
}