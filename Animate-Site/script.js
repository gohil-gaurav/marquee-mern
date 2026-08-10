const main = document.querySelector("main");
const video = document.querySelector(".video");
const navbar = document.querySelector("nav");

const modechange = document.getElementById("mode");

modechange.addEventListener('click',
    function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modechange.textContent = 'LIGHT MODE';
            const body = document.querySelector('body');
            body.style.backgroundColor = '#000';
            body.style.color = '#fff';
            document.head.appendChild(style);
        }
        else {
            modechange.textContent = 'DARK MODE';
            const body = document.querySelector('body');
            body.style.backgroundColor = '#fff';
            body.style.color = '#000';
            
            document.head.appendChild(style);
        }
    }

)

// Show + move video in main
main.addEventListener("mousemove", (e) => {
  video.classList.remove("hide");

  document.getElementById("main-video").style.visibility = "visible";
  video.style.left = (e.clientX - 150) + "px";
  video.style.top = (e.clientY - 100) + "px";
});

// Hide video when entering navbar
navbar.addEventListener("mouseenter", () => {
  video.classList.add("hide");
});

// Optional: show again when leaving navbar
navbar.addEventListener("mouseleave", () => {
  video.classList.remove("hide");
});

main.addEventListener("mouseenter", () => {
  video.classList.remove("hide");
});

main.addEventListener("mouseleave", () => {
  video.classList.add("hide");
});