const yesterdayRadio = document.querySelector('#yesterday-radio');
const todayRadio = document.querySelector('#today-radio');
const tomorrowRadio = document.querySelector('#tomorrow-radio');

const yesterdayItems = document.querySelector('#yesterday-items');
const todayItems = document.querySelector('#today-items');
const tomorrowItems = document.querySelector('#tomorrow-items');

yesterdayRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', yesterdayItems, [todayItems, tomorrowItems]);
});

todayRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', todayItems, [yesterdayItems, tomorrowItems]);
});
tomorrowRadio.addEventListener('click', () => {
	toggleClassFromElements('display-none', tomorrowItems, [yesterdayItems, todayItems]);
});

function toggleClassFromElements(className, starterElement, elements) {
	starterElement.classList.remove(className);
	elements.forEach((element) => {
		element.classList.add(className);
	});
}

window.addEventListener('load', () => {
	todayRadio.click();
});
