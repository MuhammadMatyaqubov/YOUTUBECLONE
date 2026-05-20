function searchVideos() {

  let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  let videos = document.querySelectorAll(".video-card");

  videos.forEach(video => {

    let title = video.querySelector("h3")
      .innerText
      .toLowerCase();

    if(title.includes(input)){
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }

  });

}