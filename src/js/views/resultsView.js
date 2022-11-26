import previewView from './previewView';
import View from './view';

class ResultsView extends View {
  _errorMessage = 'No recipes found for your query';
  constructor() {
    super();
    this._parentElement = document.querySelector('.results');
  }

  _generateMarkup() {
    this._clear();

    return this._data
      .map(item => previewView._generateMarkup.call(this, item))
      .join('');
  }
}
export default new ResultsView();
