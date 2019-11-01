import React from "react";

class SearchForm extends React.Component {
  state = { value: "" };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    // const value = event.target.value
    this.setState({ value });
  };

  handleSubmit = event => {
    console.log(this.state.value, "wat is dit????");
    console.log(this.state.value, "wat is dit?");

    event.preventDefault();

    this.props.searchProducts(this.state.value, this.props.products);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ marginTop: "56px" }}>
          <div class="md-form active-pink active-pink-2 mb-3 mt-0">
            <input
              onChange={this.handleChange}
              class="form-control"
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
