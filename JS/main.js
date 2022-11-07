// data-open and data-close are the data attributes we will apply to the elements that will trigger the modal to open
const modalOpen = '[data-open]'; // stored in an array to iterate
const modalClose = '[data-close]';//stored in a node list
const isVisible = 'is-visible';


//find every single button/element that will trigger these modals in the html 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


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

