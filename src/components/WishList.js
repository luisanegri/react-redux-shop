import React from 'react';
import { Link } from 'react-router-dom';

const WishList = ({ wish, deleteFromWishList }) => {
  const empty = !wish.length;
  if (empty) {
    return (
      <p
        style={{
          marginTop: '100px',
          textAlign: 'center',
          fontFamily: 'Quicksand',
          fontWeight: 500,
        }}
      >
        Your wishlist is empty!
      </p>
    );
  }
  return (
    <div>
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-md-4 col-left-cart">
            <h5>Your Wish List</h5>
            <Link to="/products" className="btn btn-link btn-delete">
              <span>
                <i className="fa fa-chevron-left"></i>
              </span>
              Keep Shopping
            </Link>
          </div>
          <div className="col-md-8 col-right-cart table-wish">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Ref.</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {wish.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.imageUrl}
                        key={item.id}
                        alt={item.name}
                        className="img-table-wish"
                      />
                      <span>{item.name}</span>
                    </td>

                    <td>€ {item.price}</td>
                    <td>87320</td>
                    <th scope="row">
                      <button
                        type="button"
                        className="btn btn-link btn-delete"
                        onClick={() => deleteFromWishList(item.id)}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
