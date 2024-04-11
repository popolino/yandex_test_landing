// Код для раздела Stages
let stagesCards = document.querySelectorAll(".stages__item");
let stagesLeftBtn = document.querySelector(".stages__left-btn");
let stagesRightBtn = document.querySelector(".stages__right-btn");
let stagesDontsElements = document.querySelectorAll(".stages__dots svg");

// Index текущего слайда
let currentStagesCard = 0;

// Сброс активного классов у карточек и у точек
function resetStagesClass() {
  // Сбрасывает активный класс со всех карточек
  stagesCards.forEach((item) => item.classList.remove("stages__item-active"));
  // Сбрасывает активный класс со всех точек
  stagesDontsElements.forEach((item) =>
    item.classList.remove("stages__dots-active")
  );
}

// Установка активного класса для карточки и точки
function activeStagesClass(index) {
  // Ставим активный класс для выбранной карточки
  stagesCards[index].classList.add("stages__item-active");
  // Ставим активный класс для нажатой точки
  stagesDontsElements[index].classList.add("stages__dots-active");

  // Обновляем состояние кнопок навигации
  stagesLeftBtn.disabled = index === 0;
  stagesRightBtn.disabled = index === stagesCards.length - 1;
}

// Инициализация первого слайда
resetStagesClass();
activeStagesClass(currentStagesCard);

// Обработчик нажатых точек
stagesDontsElements.forEach((item, index) =>
  item.addEventListener("click", function () {
    currentStagesCard = index;
    resetStagesClass();
    activeStagesClass(currentStagesCard);
  })
);

// Обработчик левой кнопки
stagesLeftBtn.addEventListener("click", function () {
  if (currentStagesCard > 0) {
    currentStagesCard--;
    resetStagesClass();
    activeStagesClass(currentStagesCard);
  }
});

// Обработчик правой кнопки
stagesRightBtn.addEventListener("click", function () {
  if (currentStagesCard < stagesCards.length - 1) {
    currentStagesCard++;
    resetStagesClass();
    activeStagesClass(currentStagesCard);
  }
});
