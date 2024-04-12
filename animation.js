// Код для раздела Stages
let items = document.querySelectorAll(".stages__item");
let leftButton = document.querySelector(".stages__left-button");
let rightButton = document.querySelector(".stages__right-button");
let dotsElements = document.querySelectorAll(".stages__dots svg");

let currentItemIndex = 0;

function resetCardClasses() {
  items.forEach((item) => item.classList.remove("stages__item-active"));
  dotsElements.forEach((item) => item.classList.remove("stages__dots-active"));
}

function activateCardClasses(index) {
  items[index].classList.add("stages__item-active");
  dotsElements[index].classList.add("stages__dots-active");
  leftButton.disabled = index === 0;
  rightButton.disabled = index === items.length - 1;
}
resetCardClasses();
activateCardClasses(currentItemIndex);
dotsElements.forEach((item, index) =>
  item.addEventListener("click", function () {
    currentItemIndex = index;
    resetCardClasses();
    activateCardClasses(currentItemIndex);
  })
);
leftButton.addEventListener("click", function () {
  if (currentItemIndex > 0) {
    currentItemIndex--;
    resetCardClasses();
    activateCardClasses(currentItemIndex);
  }
});
rightButton.addEventListener("click", function () {
  if (currentItemIndex < cards.length - 1) {
    currentItemIndex++;
    resetCardClasses();
    activateCardClasses(currentItemIndex);
  }
});

// Код для раздела Stages

let leftButtonUsers = document.querySelector("#users__leftButton");
const rightButtonUsers = document.querySelector("#users__rightButton");
let usersCurrentSlideElement = document.querySelector("#users__currentSlide");
let cards = document.querySelectorAll(".card");
document.addEventListener("DOMContentLoaded", function () {
  // Определение начального количества карточек для показа
  let cardsToShow = window.innerWidth < 1200 ? 1 : 3;
  let visibleIndex = 0;
  let slideNumber = 0;
  function toggleCards(next) {
    cardsToShow = window.innerWidth < 1200 ? 1 : 3;

    if (next) {
      visibleIndex = (visibleIndex + cardsToShow) % cards.length;
    } else {
      visibleIndex = (visibleIndex - cardsToShow + cards.length) % cards.length;
    }

    cards.forEach((card) => (card.style.display = "none"));

    for (
      let i = visibleIndex;
      i < visibleIndex + cardsToShow && i < cards.length;
      i++
    ) {
      cards[i].style.display = "flex";
    }

    if (cardsToShow === 1) {
      slideNumber = Math.floor(visibleIndex / cardsToShow) + 1;
    } else slideNumber = Math.floor(visibleIndex + 1);

    usersCurrentSlideElement.innerHTML = slideNumber.toString();
  }

  // Слушатели событий для кнопок
  leftButtonUsers.addEventListener("click", function () {
    toggleCards(false);
  });

  rightButtonUsers.addEventListener("click", function () {
    toggleCards(true);
  });

  // Слушатель для изменения размера окна
  window.addEventListener("resize", function () {
    // Проверяем, не изменилось ли количество карточек для показа
    let newCardsToShow = window.innerWidth < 1200 ? 1 : 3;
    if (newCardsToShow !== cardsToShow) {
      cardsToShow = newCardsToShow;
      toggleCards(true); // Переключаем карточки для правильного отображения
    }
  });

  // Инициализация начального состояния
  toggleCards(true);
  setInterval(function () {
    toggleCards(true);
  }, 4000);
});

//клонирование бегущей строки
