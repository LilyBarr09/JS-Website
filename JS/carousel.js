const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const update = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active', 'prev', 'next');
	});
	slides[current].classList.add('active');
	slides[prev].classList.add('prev');
	slides[next].classList.add('next');

};

// create an eventListener for the prev/next buttons
// goToNext()
// goToPrev ()
// updateIndexes(param)
// updateCSS()

// -- decide how to call the prev/next
// -- update variables
// -- [current] = newIndex
// -- [next] current + 1 : 0
// -- [prev] current - 1 : length - 1
// update the css classes

const goToNum = (number) => {
	current = number;
	next = current < slides.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : slides.length - 1;
	update();

};

const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0);
const goToPrev = () => current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
};

update();