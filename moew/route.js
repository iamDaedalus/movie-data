const routes = {
  home: `<div class="meow">
        <div class="backdropContainer">
          <div id="backdropWrapper" class="swiper-wrapper"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="posterContainer">
          <div id="posterWrapper" class="swiper-wrapper"></div>
        </div>
      </div>

      <div class="blank">
      <div class="arrowUp">
 <span class="material-symbols-rounded">
keyboard_arrow_up
</span>
 <span class="material-symbols-rounded">
keyboard_arrow_up
</span>
      </div>
      </div>
      <div id="companiesContainer" class="content1"></div>`,
  movie: `
  <div class="meow-movie">
   <div class="swiper-container genreContainer">
      <div id="genreWrapper" class="swiper-wrapper"></div>
    </div>
    <div id="genreMovieContainer"></div>
  </div>
  `,
  tv: `<h1 style=" padding-top: 120px;">TV</h1>`,
};

function renderRoute() {
  const hash = location.hash.slice(1) || "home";
  const content = routes[hash] || `<h1>Page not found</h1>`;
  document.getElementById("contents").innerHTML = content;

  if (hash == "home") {
    landingShows(showlist);
    companiesLoop();
  } else if (hash == "movie") {
    movieSection();
  }
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);
