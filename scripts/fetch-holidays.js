const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchHolidays() {
	const url = 'https://api.allorigins.win/raw?url=https://www.indiapost.gov.in/holidays-list';
	const res = await fetch(url);
	const html = await res.text();

	const dom = new JSDOM(html);
	const rows = dom.window.document.querySelectorAll('table tr');
	const data = [];

	rows.forEach(row => {
		const cells = row.querySelectorAll('td');
		if (cells.length >= 2) {
			const name = cells[0].textContent.trim();
			const date = cells[1].textContent.trim();
			data.push([name, date]);
		}
	});

	fs.writeFileSync('holidays.json', JSON.stringify(data, null, 2));
	console.log('holidays.json updated with', data.length, 'entries');
}

fetchHolidays().catch(err => console.error(err));
