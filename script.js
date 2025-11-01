const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuIcon.onclick = () => {
	navLinks.classList.toggle('active');
}

navItems.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('active');
	});
});

document.addEventListener('click', (event) => {
	if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
		navLinks.classList.remove('active');
		}
});

window.addEventListener('scroll', () => {
	navLinks.classList.remove('active');
});
