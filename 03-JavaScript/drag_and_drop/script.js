const draggableItems = Object.values(
  document.getElementsByClassName("draggables"),
);

const containers = Object.values(document.getElementsByClassName("containers"));

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();

    const draggedItem = document.querySelector(".dragging");
    container.appendChild(draggedItem);
  });
});

draggableItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});