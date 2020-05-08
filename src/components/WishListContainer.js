import React from 'react';
import WishList from './WishList';
import { connect } from 'react-redux';
import { deleteFromWishList } from '../actions/wish';

class WishContainer extends React.Component {
  render() {
    return (
      <div>
        <WishList
          wish={this.props.wish}
          deleteFromWishList={this.props.deleteFromWishList}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('wish state', state);
  return {
    wish: state.wish,
    deleteFromWishList: deleteFromWishList,
  };
};
export default connect(mapStateToProps)(WishContainer);
