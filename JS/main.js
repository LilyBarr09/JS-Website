// variables are good bc if the class name changes the data attribute is not affected rather it is updated throughout the JS file
const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab'; //period needed to access the css class-selector
const switcherBtn = '.switcher-btn'; // period needed to access the css selector
const dark = 'dark'; // string for the data attribute
const light = 'light'; // string for the data attribute
const open = 'open'; //the css class applied to the theme panel
const active = 'active'; // the css class applied to this


const root = document.documentElement;

// THEME
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);




//MODALS
// data-open and data-close are the data attributes we will apply to the elements that will trigger the modal to open
const modalOpen = '[data-open]'; // stored in a node list to iterate
const modalClose = '[data-close]';//stored in a node list which is iterable
const isVisible = 'is-visible';


//find every single button/element that will trigger these modals in the html 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

toggleTheme.addEventListener('click', function () {
	const tab = this.parentElement.parentElement;
	if (!tab.className.includes(open)) {
		tab.classList.add(open); // open is our css class we're including
	}
	else {
		tab.classList.remove(open);
	}
});


//  iterate - Full-Site Modal "open buttons"
for(const elm of openModal) {
	elm.addEventListener('click', function() {
		const modalId = this.dataset.open; // all data attributes with "open" assigned to them
		document.getElementById(modalId).classList.add(isVisible);
	})
}

for(const elm of closeModal) {
	elm.addEventListener('click', function() {
		this.parentElement.parentElement.classList.remove(isVisible);
	})
}

