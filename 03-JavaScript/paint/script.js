const board = document.getElementById("drawing-board");
const clearButton = document.getElementById("clear-board");
const brushSizeInput = document.getElementById("slider");
const colorInput = document.getElementById("colorPicker");
const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");

let isDrawing = false;

lightThemeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#c7d3c0";
    board.style.backgroundColor = "#e8f5e9";
});

darkThemeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "#2c3e50";
    board.style.backgroundColor = "grey";
});

board.addEventListener("mousedown", function () {
    isDrawing = true;
});

board.addEventListener("mousemove", function (event) {
    if (isDrawing) {
        const size = brushSizeInput.value;
        const rect = board.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const point = document.createElement("div");
        point.className = "drawing";
        point.style.width = size + "px";
        point.style.height = size + "px";
        point.style.left = x - size / 2 + "px";
        point.style.top = y - size / 2 + "px";
        point.style.backgroundColor = colorInput.value;

        board.appendChild(point);
    }
});

board.addEventListener("mouseup", function () {
    isDrawing = false;
});

clearButton.addEventListener("click", function () {
    board.innerHTML = "";
});