import React, { Component } from "react";
import NavBar from "./NavBar";
import Search from "../actions/search";

export class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar products={this.props.products} />;
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <label>
              SEARCH
              <input
                type="text"
                value={this.prop.value}
                onChange={this.props.handleChange}
              ></input>
            </label>
            <input type="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps)(NavBarContainer);
