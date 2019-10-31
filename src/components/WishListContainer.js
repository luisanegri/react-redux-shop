import React from "react";
import WishList from "./WishList";
import { connect } from "react-redux";

class WishContainer extends React.Component {
  render() {
    return (
      <div>
        <WishList />
      </div>
    );
  }
}
export default connect()(WishContainer);
