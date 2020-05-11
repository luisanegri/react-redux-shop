import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeItem, addItem, deleteFromCart, cartTotal }) => {
  const empty = !cart.cartItems.length;
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
        Your bag is empty!
      </p>
    );
  }
  return (
    <div className="wrapper-cart">
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-left-cart">
            <h5>Your bag</h5>
            <Link to="/products" className="btn btn-link btn-delete btn-rm-bg">
              <span>
                <i className="fa fa-chevron-left"></i>
              </span>
              Keep Shopping
            </Link>
          </div>
          <div className="col-xs-12 col-md-8 col-right-cart">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Ref.</th>
                  <th scope="col" className="qty">
                    Qty.
                  </th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.name}</th>
                    <td>87320</td>
                    <th scope="row" className="qty">
                      <div className="wrap-id">
                        <span>
                          <button
                            type="button"
                            className="btn btn-id btn-rm-bg"
                            onClick={() => removeItem(item)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </span>
                        <span>{item.quantity}</span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-id btn-rm-bg"
                            onClick={() => addItem(item)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </span>
                      </div>
                    </th>
                    <th scope="row">
                      <button
                        type="button"
                        className="btn btn-link btn-delete btn-rm-bg"
                        onClick={() => deleteFromCart(item)}
                      >
                        Delete
                      </button>
                    </th>
                    <td>€ {cartTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button className="custom-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
