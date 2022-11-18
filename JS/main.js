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

// THEME - THEME LIGHT/DARK JS:
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

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

// PORTFOLIO CARDS DYNAMIC HTML DATA
const portfolioCards = [
	{
	image: 1,
	dataItem: "web",
	dataOpen: "web-1",
	title: "Web Development",
	header: "Travel Website"
},
{
	image: 2,
	dataItem: "web",
	dataOpen: "web-2",
	title: "Web Development",
	header: "Skate Website"
},
{
	image: 3,
	dataItem: "web",
	dataOpen: "web-3",
	title: "Web Development",
	header: "Eating Website"
},
{
	image: 4,
	dataItem: "ui",
	dataOpen: "ui-1",
	title: "UI Design",
	header: "Cool Design"
},
{
	image: 5,
	dataItem: "app",
	dataOpen: "app-1",
	title: "App Development",
	header: "Game App"
},
{
	image: 6,
	dataItem: "app",
	dataOpen: "app-2",
	title: "App Development",
	header: "Shopping App"
},
{
	image: 7,
	dataItem: "app",
	dataOpen: "app-3",
	title: "App Development",
	header: "Money App"
},
{
	image: 8,
	dataItem: "ui",
	dataOpen: "ui-2",
	title: "UI Design",
	header: "Fantastic Design"
},
];

const createPortfolioCards = ({image, dataItem, dataOpen, title, header}) => {
	const portfolioCard = document.createElement("div");
	// portfolioCard.className = "portfolio-card";
	portfolioCard.classList.add('portfolio-card');
	portfolioCard.setAttribute(`data-item`, dataItem);
	portfolioCard.setAttribute(`data-open`, dataOpen);

	portfolioCard.innerHTML += `
	<div class="card-body">
		<img src="/assets/images/portfolio-${image}.jpg" alt="portfolio icon">
		<div class="card-popup-box">
			<div>${title}</div>
			<h3>${header}</h3>
		</div>
	</div>
`;

console.log(portfolioCards);

document.querySelector(".portfolio-grid").appendChild(portfolioCard);
	
};

portfolioCards.forEach((card) => {
	createPortfolioCards(card);
});

//MODALS
//find every single button/element that will trigger these modals in the html 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// PORTFOLIO
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search'); //must use the css selector # when using selector and not a variable

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

const popupCards = [
	{
		id: 'web-1',
		dataAnimation: 'slideInOutTop',
		header3: 'Web Project 1',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 1,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'web-2',
		dataAnimation: 'slideInOutTop',
		header3: 'Web Project 2',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 2,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'web-3',
		dataAnimation: 'slideInOutTop',
		header3: 'Web Project 3',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 3,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'ui-1',
		dataAnimation: 'slideInOutTop',
		header3: 'UI Project 1',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 4,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'app-1',
		dataAnimation: 'slideInOutTop',
		header3: 'App Project 1',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 5,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'app-2',
		dataAnimation: 'slideInOutTop',
		header3: 'App Project 2',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 6,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'app-3',
		dataAnimation: 'slideInOutTop',
		header3: 'App Project 3',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 7,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
	{
		id: 'ui-2',
		dataAnimation: 'slideInOutTop',
		header3: 'UI Project 2',
		icon: 'fas fa-times',
		data: 'data-close',
		image: 8,
		title: 'My first awesome website',
		text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et posuere massa. Nulla eget mauris tincidunt',
	},
];

const createPopupCards = ({id, dataAnimation, header, icon, data, image, title, text}) => {
	const popupCard = document.createElement("div");
	popupCard.setAttribute('id', id);
	popupCard.classList.add('modal');
	popupCard.setAttribute(`data-animation`, dataAnimation);

	popupCard.innerHTML += `
	<div class="modal-dialogue">
		<header class="modal-header">
			<h3>${header}</h3>
			<i class=${icon} ${data}></i>
		</header>
		<div class="modal-body">
			<div class="img-wrapper">
				<img src="/assets/images/portfolio-${image}.jpg" alt="portfolio image">
			</div>
			<div class="text-wrapper">
				<p><strong>${title}</strong></p>
				<p>${text}</p>
				<p>${text}</p>
			</div>
		</div>
	</div>
`;

console.log(popupCards);

document.querySelector('.site-wrapper').appendChild(popupCard);
	
};

popupCards.forEach((card) => {
	createPopupCards(card);
});

// MODALS/Full-Site Modal "open buttons"
for(const elm of openModal) {
	elm.addEventListener('click', function() {
		const modalId = this.dataset.open; // all data attributes with "open" assigned to them
		document.getElementById(modalId).classList.add(isVisible);
	})
};

for(const elm of closeModal) {
	elm.addEventListener('click', function() {
		this.parentElement.parentElement.parentElement.classList.remove(isVisible);
	})
};

// MODAL
document.addEventListener('click', (e) => {
	if(e.target === document.querySelector('.modal.is-visible'))
	document.querySelector('.modal.is-visible').classList.remove(isVisible);
});

document.addEventListener('keyup', (e) => {
	if(e.key === 'Escape')
	document.querySelector('.modal.is-visible').classList.remove(isVisible);
});

// get elements displayed
const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
// node list length
// assign --marquee-elms node list length
const marqueeContent = document.querySelector('ul.marquee-content');
root.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};