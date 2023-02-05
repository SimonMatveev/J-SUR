let header = document.querySelector(".header");

let firstScreenPrev = document.querySelector(".first-screen__button-prev");
let firstScreenNext = document.querySelector(".first-screen__button-next");
let advertisments = document.querySelectorAll(".first-screen__advertisment");
let headerLogo = document.querySelector(".header__logo");
let circle = document.querySelector(".first-screen__circle");

advertisments[0].classList.add("first-screen__advertisment--active");
advertisments[0].classList.add("first-screen__advertisment--opacity");
let currentActive = 0;
let cycle = 0;

new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	onLeave: function (origin, destination, direction, trigger) {
		var leavingSection = this;
		if (origin.index == 0) {
			header.style.backgroundColor = '#121212';
			headerLogo.style.color = 'white';
		}
		if (destination.index == 0) {
			header.style.backgroundColor = 'transparent';
			changeTitleColorInv(getCurrentActive());
		}
	}
});



// =============================MENU========================== //

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector(".body");
let firstScreen = document.querySelector(".first-screen");

if (burger) {
	burger.onclick = function () {
		if (menu.classList.contains("header__menu--active")) {
			fullpage_api.setAllowScrolling(true, 'down, up');
			firstScreen.style.filter = 'brightness(100%)';
		} else {
			fullpage_api.setAllowScrolling(false, 'down, up');
			firstScreen.style.filter = 'brightness(50%)';
		}
		menu.classList.toggle("header__menu--active");
		burger.classList.toggle("header__burger--active");
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


firstScreenNext.onclick = function () {
	let currentActive = getCurrentActive();

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
	changeTitleColor(currentActive);
	cycle++;
	circle.style.transform = 'translate(-50%) rotate(' + cycle * 120 + 'deg)';
}

firstScreenPrev.onclick = function () {

		let currentActive = getCurrentActive();
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
		changeTitleColor(currentActive);
		cycle--;
		circle.style.transform = 'translate(-50%) rotate(' + cycle * 120 + 'deg)';
	}


let scrollButton = document.querySelector(".first-screen__scroll-down");

scrollButton.onclick = function () {
	fullpage_api.moveSectionDown();
}

function changeTitleColor(cur) {
	const screenWidth = window.screen.width;
	if (cur != 1 && screenWidth > 575) {
		headerLogo.style.color = 'black';
		
	} else {
		headerLogo.style.color = 'white';
		
	}
}

function changeTitleColorInv(cur) {
	const screenWidth = window.screen.width;
	if (cur != 1 && screenWidth > 575) {
		headerLogo.style.color = 'white';
		
	} else {
		headerLogo.style.color = 'black';
		
	}
}


function getCurrentActive() {
	for (let i = 0; i < advertisments.length; i++) {
		if (advertisments[i].classList.contains("first-screen__advertisment--active")) {
			return i;
		}
	}
}