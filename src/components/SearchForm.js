import React from 'react';

class SearchForm extends React.Component {
  state = { value: '' };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchProducts(this.state.value, this.props.products);
  };
  render() {
    return (
      <div className="container searchbar">
        <form onSubmit={this.handleSubmit} style={{ marginTop: '56px' }}>
          <div className="md-form active-pink active-pink-2 mb-3 mt-0">
            <label>Search</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.value}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
