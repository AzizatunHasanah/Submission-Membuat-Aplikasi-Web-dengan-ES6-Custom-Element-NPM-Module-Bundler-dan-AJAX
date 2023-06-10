class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `

    <div id="search-container" class="input-group mt-3">
  <input id="searchElement" type="text" class="form-control" placeholder="Search for a movie..." aria-label="Recipient's username" aria-describedby="button-addon2">
  <button id="searchButtonElement" class="btn btn-info" type="button">Search</button>
</div>
            `;

    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
