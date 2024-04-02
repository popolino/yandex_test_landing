document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.running-line__container');
  const spans = document.querySelectorAll('.running-line__container > span');
  let containerWidth = 0;

  // Вычисляем общую ширину всех span элементов
  spans.forEach(span => {
    containerWidth += span.offsetWidth + 20; // Добавляем небольшой отступ между элементами
  });

  // Устанавливаем ширину контейнера, чтобы все span поместились в одну строку
  container.style.width = ${containerWidth}px;

  // Функция для запуска анимации
  function startAnimation() {
    let currentPos = 0;
    const speed = 2; // Скорость анимации

    function animate() {
      if (-currentPos >= containerWidth) {
        currentPos = window.innerWidth;
      }
      currentPos -= speed;
      container.style.transform = translateX(${currentPos}px);
      requestAnimationFrame(animate);
    }

    animate();
  }

  startAnimation();
});
