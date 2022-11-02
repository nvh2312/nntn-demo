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

// scroll to top
// Get the button
const myButton = $(".scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.css("display", "block");
  } else {
    myButton.css("display", "none");
  }
}
