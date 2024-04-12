document.addEventListener("DOMContentLoaded", function () {
  const runningSection = document.querySelector(".running-line");
  const reusedSectionContainer = document.querySelector(".cloned_runner");
  const clonedSection = runningSection.cloneNode(true);

  reusedSectionContainer.appendChild(clonedSection);
});
