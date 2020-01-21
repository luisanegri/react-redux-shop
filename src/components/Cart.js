import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const empty = !props.cart.length;
  if (empty) {
    return (
      <p
        style={{
          marginTop: '100px',
          textAlign: 'center',
          fontFamily: 'Quicksand',
          fontWeight: 500
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
            <Link to="/products" class="btn btn-link btn-delete btn-rm-bg">
              <span>
                <i class="fa fa-chevron-left"></i>
              </span>
              Keep Shopping
            </Link>
          </div>
          <div className="col-xs-12 col-md-8 col-right-cart">
            <table class="table">
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
                {props.cart.map(item => (
                  <tr key={item.id}>
                    <th scope="row">{item.name}</th>
                    <td>87320</td>
                    <th scope="row" className="qty">
                      <span>
                        <button
                          type="button"
                          className="btn btn-lg btn-checkout btn-rm-bg"
                          onClick={() => props.decrement(item.id)}
                        >
                          <i class="fa fa-minus"></i>
                        </button>
                      </span>
                      <span>{item.quantity}</span>
                      <span>
                        <button
                          type="button"
                          className="btn btn-lg btn-checkout btn-rm-bg"
                          onClick={() => props.increment(item.id)}
                        >
                          <i class="fa fa-plus"></i>
                        </button>
                      </span>
                    </th>
                    <th scope="row">
                      <button
                        type="button"
                        class="btn btn-link btn-delete btn-rm-bg"
                        onClick={() => props.deleteFromCart(item.id)}
                      >
                        Delete
                      </button>
                    </th>
                    <td>€ {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn" id="btn-checkout-cart">
          Checkout
        </button>
      </div>
    </div>
  );
}
