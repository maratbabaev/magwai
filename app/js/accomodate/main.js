//= ../components/header.js
//= ../components/setVh.js

const url = "https://jsonplaceholder.typicode.com/posts";
const cards = document.querySelector(".cards__list");
const btnMore = document.querySelector(".cards__btn");
let cardsLimit = 10;
let count = 5;

if (window.innerWidth <= 1024) {
	count = 2;
}

btnMore.addEventListener("click", () => {
	cardsLimit += count;
	if (cardsLimit >= 30) {
		btnMore.classList.add("not-active");
	}
	cards.innerHTML = "";
	mainFunction(cardsLimit);
});

mainFunction(cardsLimit);

function mainFunction(x) {
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok " + response.statusText);
			}
			return response.json();
		})
		.then((data) => {
			const cards = data.slice(0, x);
			cards.forEach((card) => {
				createCard(card);
			});
		})
		.catch((error) => {
			console.error("There was a problem with the fetch operation:", error);
		});
}

function createCard(item) {
	const card = document.createElement("div");
	card.className = `cards__item`;
	const cardImg = document.createElement("div");
	const img = document.createElement("img");
	cardImg.className = "cards__item__img";
	img.src = `./images/cards/${item.id}.webp`;
	img.alt = `${item.title}`;
	img.title = `${item.title}`;
	const cardInfo = document.createElement("div");
	cardInfo.className = "cards__item__info";
	const cardTag = document.createElement("h3");
	cardTag.className = "cards__item__tag";
	cardTag.textContent = `bridge`;
	const cardTitle = document.createElement("p");
	cardTitle.className = "cards__item__title";
	cardTitle.textContent = `${item.title}`;
	const cardText = document.createElement("p");
	cardText.className = "cards__item__text";
	cardText.textContent = `${item.body}`;
	const cardDate = document.createElement("p");
	cardDate.className = "cards__item__date";
	cardDate.innerHTML = `Posted by <strong>Eugenia</strong>, on July  24, 2019`;
	const cardBtn = document.createElement("a");
	cardBtn.className = "btn cards__item__btn";
	cardBtn.href = "#";
	cardBtn.innerHTML = `<span>Continue reading</span>`;

	card.appendChild(cardImg);
	cardImg.appendChild(img);
	card.appendChild(cardInfo);
	cardInfo.appendChild(cardTag);
	cardInfo.appendChild(cardTitle);
	cardInfo.appendChild(cardText);
	cardInfo.appendChild(cardDate);
	cardInfo.appendChild(cardBtn);
	cards.appendChild(card);
}
