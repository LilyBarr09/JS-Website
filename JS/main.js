// variables are good bc if the class name changes the data attribute is not affected rather it is updated throughout the JS file
const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab'; //period needed to access the css class-selector
const switcherBtn = '.switcher-btn'; // period needed to access the css selector
const dark = 'dark'; // string for the data attribute
const light = 'light'; // string for the data attribute
const open = 'open'; //the css class applied to the theme panel
const active = 'active'; // the css class applied to this

// data-open and data-close are the data attributes we will apply to the elements that will trigger the modal to open
const modalOpen = '[data-open]'; // stored in a node list to iterate
const modalClose = '[data-close]';//stored in a node list which is iterable
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

// THEME
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// PORTFOLIO
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search'); //must use the css selector # when using selector and not a variable

//MODALS
//find every single button/element that will trigger these modals in the html 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
	if (document.querySelector(`${selector}.${active}`) !== null) {
		document.querySelector(`${selector}.${active}`).classList.remove(active);
	}
	elm.classList.add(active);
};

const setTheme = (val) => {
	if (val === dark) {
		root.setAttribute(dataTheme, dark);
		localStorage.setItem(theme, dark);
	}
	else {
		root.setAttribute(dataTheme, light);
		localStorage.setItem(theme, light);
	}
};

if (currentTheme) {
	root.setAttribute(dataTheme, currentTheme);
	switcher.forEach((btn) => {
		btn.classList.remove(active);
	});

	if (currentTheme === dark) {
		switcher[1].classList.add(active);
	}
	else {
		switcher[0].classList.add(active)
	}
};

toggleTheme.addEventListener('click', function () {
	const tab = this.parentElement.parentElement;
	if (!tab.className.includes(open)) {
		tab.classList.add(open); // open is our css class we're including
	}
	else {
		tab.classList.remove(open);
	}
});

for (const elm of switcher) {
	elm.addEventListener('click', function () {
		const toggle = this.dataset.toggle;
		setActive(elm, switcherBtn);
		setTheme(toggle);
	})
};

searchBox.addEventListener('keyup', (e) => {
	const searchInput = e.target.value.toLowerCase().trim();
	
portfolioItems.forEach((card) => {
	if(card.dataset.item.includes(searchInput)) {
		card.style.display = 'block';
	}
	else {
		card.style.display = 'none';
	}
})
});

for (const link of filterLink) {
	link.addEventListener('click', function () {
		setActive(link, '.filter-link');
		const filter = this.dataset.filter;
		portfolioItems.forEach((card) => {
			if (filter === 'all') {
				card.style.display = 'block';
			}
			else if (card.dataset.item === filter) {
				card.style.display = 'block';
			}
			else {
				card.style.display = 'none';
			}
		})
	})
};

// Full-Site Modal "open buttons"
for(const elm of openModal) {
	elm.addEventListener('click', function() {
		const modalId = this.dataset.open; // all data attributes with "open" assigned to them
		document.getElementById(modalId).classList.add(isVisible);
	})
};

for(const elm of closeModal) {
	elm.addEventListener('click', function() {
		this.parentElement.parentElement.classList.remove(isVisible);
	})
};

