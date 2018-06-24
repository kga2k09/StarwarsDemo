import React, { Component } from 'react';
import './style.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.debounced = null;
    this.debounce = props.debounce || 500;
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  debounceInput = e => {
    e.persist();

    if (this.debounced) {
      clearTimeout(this.debounced);
    }

    this.debounced = setTimeout(e => {
      return this.props.onInput(e);
    }, this.debounce, e);
  };

  render() {
    return (
      <div class="row">
      <div class="col-4">
          </div>
          <div class="col-8">
          <input type="text"
          ref={input => this.searchInput = input}
          className="search-control"
          onInput={this.debounceInput}
          placeholder="Search Star Wars Characters"
        />
          </div>
        
      </div>
    );
  }
}

export default SearchInput;