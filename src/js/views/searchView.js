class SearchView {
  constructor() {
    this._parentEl = document.querySelector('.search');
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
      this.reset();
    });
  }

  getQuery() {
    const query = this._parentEl.querySelector('input').value;

    return query;
  }
}
export default new SearchView();
