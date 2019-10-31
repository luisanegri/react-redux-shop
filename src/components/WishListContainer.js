import React from "react";
import WishList from "./WishList";
import { connect } from "react-redux";

class WishContainer extends React.Component {
  render() {
    return (
      <div>
        <WishList wish={this.props.wish} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("mapstate", state);
  return {
    wish: state.wish
  };
};
export default connect(mapStateToProps)(WishContainer);
