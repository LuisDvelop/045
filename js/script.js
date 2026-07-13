const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const yearEl = document.getElementById('year');

if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
	menuToggle.addEventListener('click', () => {
		const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!expanded));
		nav.classList.toggle('open');
	});

	nav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('open');
			menuToggle.setAttribute('aria-expanded', 'false');
		});
	});
}

window.addEventListener('scroll', () => {
	if (!header) return;
	header.classList.toggle('scrolled', window.scrollY > 10);
});

/* ── Scroll-reveal ── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);
	revealEls.forEach((el) => observer.observe(el));
}
