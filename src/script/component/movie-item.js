class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
          <div id="${this._movie.id}" class="card text-bg-dark">
      <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img" alt="Poster Movie">
      <div class="card-img-overlay">
        <h5 class="card-title"><strong>${this._movie.original_title}</strong></h5>
        <p class="card-text">${this._movie.release_date ? this._movie.release_date.substring(0, 4) : ""}</p>
      </div>
    </div>
    
        `;
  }
}

customElements.define("movie-item", MovieItem);
