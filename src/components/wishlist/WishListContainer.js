import React from 'react';
import WishList from './WishList';
import { connect } from 'react-redux';
import { deleteFromWishList } from '../../actions/wish';

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
const mapStateToProps = ({ wish }) => {
  return {
    wish: wish,
    deleteFromWishList,
  };
};

export default connect(mapStateToProps)(WishContainer);
