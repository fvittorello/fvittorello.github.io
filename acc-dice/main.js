import './style.css';

let acceleration = 0;
const APP = document.querySelector('#app');

setInterval(() => {
	console.log('acceleration: ', (acceleration = DeviceMotionEvent.acceleration));
	APP.innerHTML = acceleration;
}, 2000);

APP.addEventListener('click', () => {
	APP.appendChild(document.createElement('p')).innerHTML = 'clicked';
});
