(function () {
	const r = document.createElement('link').relList;
	if (r && r.supports && r.supports('modulepreload')) return;
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
	new MutationObserver((e) => {
		for (const t of e)
			if (t.type === 'childList')
				for (const o of t.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && c(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function s(e) {
		const t = {};
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === 'use-credentials'
				? (t.credentials = 'include')
				: e.crossOrigin === 'anonymous'
				? (t.credentials = 'omit')
				: (t.credentials = 'same-origin'),
			t
		);
	}
	function c(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = s(e);
		fetch(e.href, t);
	}
})();
let i = 0;
const n = document.querySelector('#app');
setInterval(() => {
	console.log('acceleration: ', (i = DeviceMotionEvent.acceleration)), (n.innerHTML = i);
}, 2e3);
n.addEventListener('click', () => {
	n.appendChild(document.createElement('p')).innerHTML = 'clicked';
});

n.addEventListener('devicemotion', (e) => {
	n.innerHTML = `acc including gravity: ${e.accelerationIncludingGravity}
  acceleration: ${e.acceleration}`;
});
