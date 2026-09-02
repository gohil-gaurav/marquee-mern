let cursorBox = document.getElementById("animated-cursor-box");
let topSection = document.getElementById("top-section");
let cursorFollower = document.getElementById("follower");

let modeChangeText = document.getElementById("mode");
let menuText = document.getElementById("menu");
let overlayMenus = document.getElementById("overlay");
let overlayHeading = document.querySelectorAll(".overlay-item h3");
let isDarkMode = false;
let overlayIsOpen = false;
let contactText = document.getElementById("contact");
let contactFormOverlay = document.getElementById("contact-form-overlay");
let navbar = document.getElementById("nav-ribbon");

document.addEventListener("mousemove", (e) => {
  // console.log(e.clientX);
  cursorFollower.style.left = `${e.clientX}px `;
  cursorFollower.style.top = `${e.clientY}px`;
  cursorFollower.style.transform = "translate(-30px,-30px)";
});

// Navbar
modeChangeText.addEventListener("click", (e) => {
  isDarkMode = !isDarkMode;
  e.target.textContent == "DARK MODE"
    ? (e.target.textContent = "LIGHT MODE")
    : (e.target.textContent = "DARK MODE");
  // To change the BG of html page
  this.document.body.classList.toggle("dark");
  // console.log(ove);

  overlayHeading.forEach((menu) => {
    if (isDarkMode) {
      menu.style.color = "black";
      document.getElementById("nav-ribbon").style.color = "white";
      ("");
      topSection.style.backgroundColor = "black";
    } else {
      document.getElementById("nav-ribbon").style.color = "black";
      topSection.style.backgroundColor = "#e4e4e4";
    }
  });
});
// Top Section
topSection.addEventListener("mousemove", (e) => {
  cursorBox.style.opacity = " 1";
  cursorBox.style.left = `${e.clientX}px`;
  cursorBox.style.top = `${e.clientY}px`;
  cursorBox.style.transition = `all linear .5s`;
});

topSection.addEventListener("mouseleave", (e) => {
  cursorBox.style.opacity = 0;
});

// Overlays Menu Text

menuText.addEventListener("mouseenter", (e) => {
  e.target.textContent = "CLOSE";
});
menuText.addEventListener("mouseleave", (e) => {
  e.target.textContent = "MENU";
});

/*FIXME:  OVERLAY: STEP 1*/
menuText.addEventListener("click", (e) => {
  overlayIsOpen = !overlayIsOpen;
  if (isDarkMode && overlayIsOpen) {
    document.getElementById("nav-ribbon").style.color = "black";
  }

  if (overlayIsOpen) {
    e.target.textContent = "CLOSE";
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = "-0%";
    // Dark Mode
    document.getElementById("nav-ribbon").style.color = "black";
    modeChangeText.style.visibility = "hidden";
    // TODO: Add Translate Effect
    overlayHeading.forEach((heading) => {
      heading.style.translate = "0% 0%";
    });

    // overlayMenus.style.transform = 'translateY(0%)';
  } else {
    e.target.textContent = "MENU";
    overlayMenus.style.opacity = 1;
    overlayMenus.style.top = "-110%";
    modeChangeText.style.visibility = "visible";

    // TODO: Add Translate Effect
    overlayHeading.forEach((heading) => {
      heading.style.translateY = "-100% 100%";
    });
  }
  if (isDarkMode) {
    document.getElementById("nav-ribbon").style.color = "white";
  }
});

// Move Left all the Heading of Overlays
// FIXME: Overlay Items
let overlayItems = document
  .querySelectorAll(".overlay-item")
  .forEach((item) => {
    console.log(item);
    item.addEventListener("mouseenter", (e) => {
      // FIXME:  FOr images
      item.firstElementChild.style.width = "200px";

      // FIXME: For Heading
    });

    item.addEventListener("mouseleave", (e) => {
      item.firstElementChild.style.width = "0px";
      //  item.firstElementChild.style.left = '0%';
      item.lastElementChild.style.transform = "translateX(0px)";
    });
  });

// Also handle cursor-box on overlay

overlayMenus.addEventListener("mouseenter", (e) => {
  cursorBox.style.display = "none";
});

overlayMenus.addEventListener("mouseleave", (e) => {
  cursorBox.style.display = "block";
});

// PopOut Area

let highlights = document.querySelectorAll(".highlight");
// debugger;
highlights.forEach((highlight) => {
  let images = highlight.querySelectorAll("img");
  if (!images.length) return;

  let idx = 0;
  let zIndex = images.length;
  let interval = null;

  highlight.addEventListener("mouseenter", () => {
    if (interval) return;
    interval = setInterval(() => {
      const current = images[idx % images.length];

      if (idx < images.length) {
        current.classList.add("show");
        current.style.zIndex = ++zIndex;
      } else {
        current.classList.remove("show");
        requestAnimationFrame(() => {
          current.style.zIndex = ++zIndex;
          requestAnimationFrame(() => {
            current.classList.add("show");
          });
        });
      }
      idx++;
    }, 300);
  });

  highlight.addEventListener("mouseleave", () => {
    clearInterval(interval);
    interval = null;
    images.forEach((img) => {
      img.classList.remove("show");
      img.style.zIndex = "";
    });
    idx = 0;
    zIndex = images.length;
  });
});

// Overlays Contact Text

contactText.addEventListener("mouseenter", (e) => {
  e.target.textContent = "CONTACT US";
});
contactText.addEventListener("mouseleave", (e) => {
  e.target.textContent = "LET'S TALK";
});

let contactOverlayIsOpen = false;
contactText.addEventListener("click", (e) => {
  contactOverlayIsOpen = !contactOverlayIsOpen;
  if (contactOverlayIsOpen) {
    e.target.textContent = "CONTACT US";
    contactFormOverlay.style.top = "0%";
  } else {
    e.target.textContent = "LET'S TALK";
    contactFormOverlay.style.top = "-100%";
  }
});

let interestItems = document.querySelectorAll(".interest-item span");
interestItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    interestItems.forEach((span) => {
      console.log(span);
      
      span.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// PopUp Area
//TODO: Explanation PopOut Area

const ImageTriggersBox = document.querySelectorAll('.highlight');

ImageTriggersBox.forEach((element) => {
  let interval;
  let index = 0;
  //NOTE: When Mouseenter
  element.addEventListener('mouseenter', () => {
    const images = element.querySelectorAll('.image-highlight');

    // Start from the first image
    index = 0;

    images[index].style.opacity = '1';

    interval = setInterval(() => {
      // Hide current image
      images[index].style.opacity = '0';

      // TODO: Rotate

      // if (index % 2 == 0) {
      //   images[index].style.rotate = `${Math.random() * images.length}deg`;
      //   images[index].style.bottom = `20px`;
      // } else {
      //   images[index].style.rotate = `-${Math.random() * images.length}deg`;
      //   images[index].style.bottom = `20px`;
      // }

      // Move to next image
      index++;

      // Loop back to first image
      if (index >= images.length) {
        index = 0;
      }

      // Show next image
      images[index].style.opacity = '1';
    }, 300);
  });

  // NOTE: when mouseleave
  element.addEventListener('mouseleave', () => {
    // console.log(interval);

    // Stop the loop
    clearInterval(interval);

    const images = element.querySelectorAll('.image-highlight');

    // Hide all images
    images.forEach((image) => {
      image.style.opacity = '0';
    });

    index = 0;
  });
});
// TODO: Playgroud

let playgroundHeading = document.getElementById('playground-heading');
// let playgroundItem = ;

playgroundHeading.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  console.log(`${offsetY}px`);

  // FIXME: Move Item
  document.getElementById('playground-item').style.top = `56px`;
  document.getElementById('playground-item').style.left = `${offsetX}px`;
  playgroundHeading.addEventListener('mouseleave',(e)=>{
    document.getElementById('playground-item').style.display='none';
  });
  playgroundHeading.addEventListener('mouseenter',(e)=>{
    document.getElementById('playground-item').style.display='block';
  })
});



// let gridVedioItems=document.querySelectorAll('.grid-vedio-items');
// gridVedioItems.forEach((item)=>{
//   item.addEventListener('mouseenter',(e)=>{
//     e.target.style.transform='scale(.95)';
//     e.target.firstElementChild.style.filter='blur(5px)';
//   });
//   item.addEventListener('mouseleave',(e)=>{
//     e.target.style.transform='scale(1)';
//     e.target.firstElementChild.style.filter='blur(0px)';
//   });

// });
let box1 = document.querySelector(".box1");
let img1 = document.querySelector(".img1");
let v1 = document.querySelector(".v1");
let c1 = document.getElementById("c1");

box1.addEventListener("mouseenter", () => {
  img1.style.zIndex = 1;
  v1.style.zIndex = 100;
  img1.style.filter = "blur(8px)";
  c1.style.zIndex = 200; // Show custom cursor
});

box1.addEventListener("mouseleave", () => {
  img1.style.zIndex = 100;
  v1.style.zIndex = 1;
  img1.style.filter = "blur(0px)";
  c1.style.zIndex = 0; // Hide custom cursor
});

3
box1.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  console.log(`${offsetY}px`);

  // FIXME: Move Item
  document.getElementById('c1').style.top = `56px`;
  document.getElementById('c1').style.left = `${offsetX}px`;
  box1.addEventListener('mouseleave',(e)=>{
    document.getElementById('c1').style.display='none';
  });
  box1.addEventListener('mouseenter',(e)=>{
    document.getElementById('c1').style.display='block';
  })
});

let box2 = document.querySelector(".box2")
let img2 = document.querySelector(".img2")
let v2 = document.querySelector(".v2")


box2.addEventListener("mouseenter",(e)=>{
  img2.style.zIndex = 1
  v2.style.zIndex = 100
  img2.style.filter="blur(8px)"
  c2.style.zIndex = 200;
})


box2.addEventListener("mouseleave",(e)=>{
  img2.style.zIndex = 100
  v2.style.zIndex = 1
  img2.style.filter="blur(0px)"
  c2.style.zIndex = 0;
})

box2.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  console.log(`${offsetY}px`);

  // FIXME: Move Item
  document.getElementById('c2').style.top = `56px`;
  document.getElementById('c2').style.left = `${offsetX}px`;
  box2.addEventListener('mouseleave',(e)=>{
    document.getElementById('c2').style.display='none';
  });
  box2.addEventListener('mouseenter',(e)=>{
    document.getElementById('c2').style.display='block';
  })
});



let box3 = document.querySelector(".box3")
let img3 = document.querySelector(".img3")
let v3 = document.querySelector(".v3")


box3.addEventListener("mouseenter",(e)=>{
  img3.style.zIndex = 1
  v3.style.zIndex = 100
  img3.style.filter="blur(8px)"
  c3.style.zIndex = 200;
})


box3.addEventListener("mouseleave",(e)=>{
  img3.style.zIndex = 100
  v3.style.zIndex = 1
  img3.style.filter="blur(0px)"
  c3.style.zIndex = 0;
})
box3.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  console.log(`${offsetY}px`);

  // FIXME: Move Item
  document.getElementById('c3').style.top = `56px`;
  document.getElementById('c3').style.left = `${offsetX}px`;
  box3.addEventListener('mouseleave',(e)=>{
    document.getElementById('c3').style.display='none';
  });
  box3.addEventListener('mouseenter',(e)=>{
    document.getElementById('c3').style.display='block';
  })
});

let box4 = document.querySelector(".box4")
let img4 = document.querySelector(".img4")
let v4 = document.querySelector(".v4")


box4.addEventListener("mouseenter",(e)=>{
  img4.style.zIndex = 1
  v4.style.zIndex = 100
  img4.style.filter="blur(8px)"
  c4.style.zIndex = 200;
})


box4.addEventListener("mouseleave",(e)=>{
  img4.style.zIndex = 100
  v4.style.zIndex = 1
  img4.style.filter="blur(0px)"
  c4.style.zIndex = 0;
})

box4.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  console.log(`${offsetY}px`);

  // FIXME: Move Item
  document.getElementById('c4').style.top = `56px`;
  document.getElementById('c4').style.left = `${offsetX}px`;
  box4.addEventListener('mouseleave',(e)=>{
    document.getElementById('c4').style.display='none';
  });
  box4.addEventListener('mouseenter',(e)=>{
    document.getElementById('c4').style.display='block';
  })
});