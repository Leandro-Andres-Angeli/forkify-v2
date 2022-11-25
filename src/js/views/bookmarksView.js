import View from './view';
import previewView from './previewView';
class bookmarksView extends View {
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  constructor() {
    super();
    this._parentElement = document.querySelector('.bookmarks__list');
  }

  _generateMarkup() {
    this._clear();

    return this._data
      .map(item => previewView._generateMarkup.call(this, item))
      .join('');
  }
}
export default new bookmarksView();
