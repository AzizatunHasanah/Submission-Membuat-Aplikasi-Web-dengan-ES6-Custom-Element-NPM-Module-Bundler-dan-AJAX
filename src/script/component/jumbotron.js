class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
        <div class="image">
          <img src="./src/img/movie.jpeg" alt="" />
        </div>
    
        <div class="text">
          <h1><b>Welcome.</b></h1>
          <h2>Millions of movies to discover. Explorer now.</h2>
        </div>
      </div>
          `;
  }
}

customElements.define("jumbotron", Jumbotron);
