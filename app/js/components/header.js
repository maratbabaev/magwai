const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const btn = document.querySelectorAll(".btn-submit");
const modalWrap = document.querySelector(".modal-wrap");
const modalBg = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal__btn");

burger.addEventListener("click", () => {
	document.body.classList.toggle("hidden");
	menu.classList.toggle("active");
});

btn.forEach((el) => {
	el.addEventListener("click", () => {
		setTimeout(() => {
			modalWrap.style.transitionDelay = "1s";
			modal.style.transitionDelay = "0s";
			modalBg.style.transitionDelay = "0.3s";
		}, 800);
		document.body.classList.add("hidden");
		modalWrap.classList.add("active");
		modalBg.classList.add("active");
		modal.classList.add("active");
	});
});

modalBtn.addEventListener("click", () => {
	removeActiveModal();
});

modalBg.addEventListener("click", () => {
	removeActiveModal();
});

function removeActiveModal() {
	if (menu.classList.contains("active")) {
		document.body.classList.add("hidden");
	} else {
		document.body.classList.remove("hidden");
	}
	modalWrap.classList.remove("active");
	modalBg.classList.remove("active");
	modal.classList.remove("active");
	setTimeout(() => {
		modalWrap.style.transitionDelay = "0s";
		modal.style.transitionDelay = "0.5s";
		modalBg.style.transitionDelay = "0s";
	}, 800);
}
