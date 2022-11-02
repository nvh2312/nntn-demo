$(document).ready(function () {
  //jquery for toggle sub menus
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
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
