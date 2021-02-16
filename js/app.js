const navItems = document.getElementsByClassName('nav-item');



for(i = 0; i < navItems.length; i++){
	let item = navItems[i];
	console.log(item);
	item.addEventListener('click', (e) => {
		window.location.href = "#" + e.target.innerHTML.toLowerCase();
		console.log(e.target.innerHTML);
		for(i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove('active');
		}
		e.target.classList.add('active');
	});
}


window.addEventListener('scroll', function() {
	var navbar = document.querySelector('.navbar');
	navbar.classList.toggle('sticky', window.scrollY > 0);
	
});