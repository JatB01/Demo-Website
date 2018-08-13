const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("mouseover", function() {
    console.log("mouseover");
    video.play();
  });

  video.addEventListener("mouseout", function() {
    video.pause();
  });
});
