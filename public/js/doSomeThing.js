import jquery from "jquery";

export const scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const changeVideo = function () {
  $(".video-container").empty();
  const html = `<div class="show-video">
                    <video width="300" height="200" controls>
                      <source src="/videos/${this.id}.mp4" type="video/mp4">
                    </video>
                  </div>
                  <div class="title-video">
                    <i class="fas fa-play-circle"></i>
                    <span class="title-name">Giới thiệu Trường Đại học Vinh</span>
                    <hr>
                  </div>`;
  $(".video-container").append(html);
};
export const scrollFunction = function () {
  // scroll to top
  // Get the button
  const myButton = $(".scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.css("display", "block");
  } else {
    myButton.css("display", "none");
  }
};
