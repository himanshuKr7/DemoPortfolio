let hamburger = document.querySelector(".hamburger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-nav");
let navLinks = document.querySelectorAll(".mobile-nav a"); 

hamburger.addEventListener("click", function () {
	mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
	mobileNav.classList.remove("open");
});

navLinks.forEach((link) => {
	link.addEventListener("click", function () {
		mobileNav.classList.remove("open");
	});
});
