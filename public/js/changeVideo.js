
$(".list-video button").click(function () {
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
  });
  