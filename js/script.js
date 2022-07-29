new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true
});



// =============================MENU========================== //

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector(".body");
let firstScreen = document.querySelector(".first-screen");

if (burger) {
	burger.onclick = function () {
		if (menu) {
			menu.classList.toggle("header__menu--active");
			burger.classList.toggle("header__burger--active");
			fullpage_api.setAllowScrolling(false, 'down, up');
			firstScreen.style.filter = 'brightness(50%)';
		}
	}
}

window.addEventListener('click', function (e) {
	if (!menu.contains(e.target) && !burger.contains(e.target) && (menu.classList.contains("header__menu--active"))) {
		menu.classList.remove("header__menu--active");
		burger.classList.remove("header__burger--active");
		fullpage_api.setAllowScrolling(true, 'down, up');
		firstScreen.style.filter = 'brightness(100%)';
	}
})

// =============================FIRST-SCREEN========================== //

let firstScreenPrev = document.querySelector(".first-screen__button-prev");
let firstScreenNext = document.querySelector(".first-screen__button-next");
let advertisments = document.querySelectorAll(".first-screen__advertisment");
let headerLogo = document.querySelector(".header__logo");
let circle = document.querySelector(".first-screen__circle");

advertisments[0].classList.add("first-screen__advertisment--active");
advertisments[0].classList.add("first-screen__advertisment--opacity");
let currentActive = 0;
let cycle = 0;

firstScreenNext.onclick = function () {
	for (let i = 0; i < advertisments.length; i++) {
		if (advertisments[i].classList.contains("first-screen__advertisment--active")) {
			currentActive = i;
		}
	}
	if (advertisments[currentActive + 1]) {
		advertisments[currentActive + 1].classList.add("first-screen__advertisment--active");
		advertisments[currentActive].classList.remove("first-screen__advertisment--active");
		setTimeout(() => {
			advertisments[currentActive + 1].classList.add("first-screen__advertisment--opacity");
			advertisments[currentActive].classList.remove("first-screen__advertisment--opacity");
		}, 5);
	} else {
		advertisments[0].classList.add("first-screen__advertisment--active");
		advertisments[currentActive].classList.remove("first-screen__advertisment--active");
		setTimeout(() => {
			advertisments[0].classList.add("first-screen__advertisment--opacity");
			advertisments[currentActive].classList.remove("first-screen__advertisment--opacity");
		}, 5);
	}
	const screenWidth = window.screen.width;
	if (currentActive != 2 && screenWidth > 575) {
		headerLogo.style.color = 'black';
	} else {
		headerLogo.style.color = 'white';
	}
	cycle++;
	circle.style.transform = 'translate(-50%) rotate(' + cycle * 120 + 'deg)';
}

firstScreenPrev.onclick = function () {
	for (let i = 0; i < advertisments.length; i++) {
		if (advertisments[i].classList.contains("first-screen__advertisment--active")) {
			currentActive = i;
		}
	}
	if (advertisments[currentActive - 1]) {
		advertisments[currentActive - 1].classList.add("first-screen__advertisment--active");
		advertisments[currentActive].classList.remove("first-screen__advertisment--active");
		setTimeout(() => {
			advertisments[currentActive - 1].classList.add("first-screen__advertisment--opacity");
			advertisments[currentActive].classList.remove("first-screen__advertisment--opacity");
		}, 5);
	} else {
		advertisments[advertisments.length - 1].classList.add("first-screen__advertisment--active");
		advertisments[currentActive].classList.remove("first-screen__advertisment--active");
		setTimeout(() => {
			advertisments[advertisments.length - 1].classList.add("first-screen__advertisment--opacity");
			advertisments[currentActive].classList.remove("first-screen__advertisment--opacity");
		}, 5);
	}
	const screenWidth = window.screen.width;
	if (currentActive != 1 && screenWidth > 575) {
		headerLogo.style.color = 'black';
	} else {
		headerLogo.style.color = 'white';
	}
	cycle--;
	circle.style.transform = 'translate(-50%) rotate(' + cycle * 120 + 'deg)';
}