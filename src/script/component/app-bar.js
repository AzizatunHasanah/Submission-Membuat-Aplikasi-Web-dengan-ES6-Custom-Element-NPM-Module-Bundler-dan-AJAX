class AppBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top">
      <div class="container-fluid">
      <a class="navbar-brand" >
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo" width="200" height="24" class="d-inline-block align-text-top">
      </a>
        <ul>
        <search-bar></search-bar>
        </ul>
      </div>
    </nav>
        `;
  }
}

customElements.define("app-bar", AppBar);
