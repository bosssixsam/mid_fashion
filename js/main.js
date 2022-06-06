// -- Menu ---
let burger = document.querySelector(".hamburger");
let backdrop = document.querySelector(".backdrop");
let nav = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  //   console.log("click");
  burger.classList.toggle("active");
  backdrop.classList.toggle("active");
  nav.classList.toggle("open");
  window.document.body.classList.toggle("open_menu_mobile");
});

//-- scroll Menu ---
let slider = document.querySelector(".slider");
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let top = document.querySelector("html").scrollTop;
  if (top > slider.offsetHeight - header.offsetHeight) {
    header.style.backgroundColor = "#000";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

//-- slider-flickity ---
let slide_container = document.querySelector(".slider__images");
let next = document.querySelector(".control__btn.--right");
let pre = document.querySelector(".control__btn.--left");
let dots = document.querySelectorAll(".paging ul li");
let num = document.querySelector(".paging span");

const flkty = new Flickity(slide_container, {
  prevNextButtons: false,
  pageDots: false,
  setGallerySize: false,
  autoPlay: 2000,
  on: {
    change: function (index) {
      // console.log(index);
      $(dots).removeClass("active");
      $(dots).eq(index).addClass("active");

      num.textContent = (index + 1).toString().padStart(2, "0");
    },
  },
});

next.addEventListener("click", function () {
  flkty.next(true);
});
pre.addEventListener("click", function () {
  flkty.previous(true);
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", () => {
    console.log("clicked dot");

    flkty.select(index, true);
  });
});

// jQuery
// flkty.on("select.flickity", function (event, index) {
//   console.log("Flickity select " + index);
// });

// -- slider ---
// let slide = document.querySelectorAll(".slider__images-item");
// let next = document.querySelector(".control__btn.--right");
// let pre = document.querySelector(".control__btn.--left");
// let num = document.querySelector(".paging span");

// let slidecurrent = 0;

// next.addEventListener("click", () => {
//   console.log("click right");
//   nextslide();
// });
// pre.addEventListener("click", () => {
//   console.log("click left");
//   //   nextslide();
// });

// const nextslide = (num) => {
//   // let current = document.querySelector(".slider__images-item.current");

//   // current.classList.remove("current");
//   // if (current.nextElementSibling) {
//   //   current.nextElementSibling.classList.add("current");
//   // } else {
//   //   slide[0].classList.add("current");
//   // }

//   if (num < slide.length) {
//     slide[num];
//   }
// };

// -- video ---
let videobtn = document.querySelectorAll(".video-cover");
let pop = document.querySelector(".popvideo");
let popclose = document.querySelector(".close");
let iframe = document.querySelector("#video-iframe");

videobtn.forEach((vd) => {
  vd.addEventListener("click", function () {
    let src = this.getAttribute("data-video-src");
    console.log("video click");
    iframe.src = `https://www.youtube.com/embed/${src}`;
    pop.style.display = "flex";
  });
});

popclose.addEventListener("click", () => {
  pop.style.display = "none";
  iframe.src = "";
});

// -- Back-to-top
const bcktop = document.querySelector(".backtop");

bcktop.addEventListener("click", (e) => {
  e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollBy({
    top: -document.body.offsetHeight,
    behavior: "smooth",
  });
});

//-- menu scroll ---
let menu = $("header .navigation a");
let section = [];

for (let i = 0; i < menu.length; i++) {
  const s = $($(menu[i]).attr("data-section"));
  section.push(s);
}

let hash = window.location.hash;
console.log(hash);
// hash = hash.replace("#", "");

for (let i = 0; i < menu.length; i++) {
  const s = $(menu[i]).attr("data-section");
  if (hash == s.replace(".", "")) {
    $("html").animate(
      {
        scrollTop: $(hash).position().top,
      },
      300
    );
  }
}

$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  for (let i = 0; i < section.length; i++) {
    //  console.log(section[i].position().top);

    let top = section[i].position().top;

    if (
      scrollTop + 300 > top &&
      scrollTop + 300 < top + section[i].outerHeight()
    ) {
      menu.removeClass("active");
      $(menu[i]).addClass("active");
      break;
    }
  }
});

// -- carousel ---------------
let carousel = document.querySelector(".carousel");

const flic_carousel = new Flickity(carousel, {
  prevNextButtons: false,
  pageDots: false,
  cellAlign: "center",

  // setGallerySize: false,
  // on: {
  //   change: function (index) {
  //     console.log(index);
  //     $(dots).removeClass("active");
  //     $(dots).eq(index).addClass("active");

  //     num.textContent = (index + 1).toString().padStart(2, "0");
  //   },
  // },
});
