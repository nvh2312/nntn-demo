import "@babel/polyfill";
import jQuery from "jquery";
import "slick-carousel";
// import tinymce from "tinymce";

// /* Default icons are required. After that, import custom icons if applicable */
// import "tinymce/icons/default";

// /* Required TinyMCE components */
// import "tinymce/themes/silver";
// import "tinymce/models/dom";

import { signup, login, logout, getCategories, addBlog } from "./login";
import { scrollToTop, changeVideo, scrollFunction } from "./doSomeThing";
window.$ = window.jQuery = jQuery;

tinymce.init({
  selector: 'textarea',
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
getCategories();

$("#signup").on("click", async (e) => {
  e.preventDefault();
  const username = $("#username").val();
  const password = $("#password").val();
  signup(username, password);
});
$("#login").on("click", async (e) => {
  e.preventDefault();
  const username = $("#username").val();
  const password = $("#password").val();
  login(username, password);
});
$("#logout").on("click", logout);

$(".scroll-to-top").on("click", scrollToTop);
$(".list-video button").on("click", changeVideo);

document.onclick = function (div) {
  const a = div.target.className;
  if (
    a != "side-bar active" &&
    a != "sub-btn" &&
    a != "fas fa-angle-right dropdown" &&
    a != "fas fa-angle-right dropdown rotate" &&
    a != "fas fa-bars"
  ) {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  }
};
$(".sub-btn").on("click", function () {
  $(this).next(".sub-menu").slideToggle();
  $(this).find(".dropdown").toggleClass("rotate");
});

//jquery for expand and collapse the sidebar
$(".menu-btn").on("click", function () {
  $(".side-bar").addClass("active");
  $(".menu-btn").css("visibility", "hidden");
});

$(".close-btn").on("click", function () {
  $(".side-bar").removeClass("active");
  $(".menu-btn").css("visibility", "visible");
});

$(".slider-auto").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

const arr_day = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
];
const today = new Date();
const date =
  arr_day[today.getDay()] +
  ", ngày " +
  today.getDate() +
  " tháng " +
  (today.getMonth() + 1) +
  " năm " +
  today.getFullYear();
$(".text-date").html(date);

let listDivImg = document.querySelectorAll(".list-img .col div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

let currentIndex = 0;
setInterval(() => {
  currentIndex++;
  setCurrent(currentIndex);
}, 5000);
setCurrent(currentIndex);

function setCurrent(index) {
  currentIndex = index;
  imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

  // remove all active img
  listDivImg.forEach((item) => {
    item.classList.remove("active");
  });

  // set active
  listDivImg[currentIndex].classList.add("active");
  let array = [...listDivImg];
  $(".list-img .col").empty();
  let a = array.slice(currentIndex, array.length + 1);

  for (let i = 0; i < currentIndex; i++) a.push(array.shift());
  a.forEach((value, index) => {
    $(".list-img .col").append(value);
  });
}

listDivImg.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    setCurrent(index);
  });
});

next.addEventListener("click", () => {
  if (currentIndex == listDivImg.length - 1) {
    currentIndex = 0;
  } else currentIndex++;

  setCurrent(currentIndex);
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = listDivImg.length - 1;
  else currentIndex--;

  setCurrent(currentIndex);
});