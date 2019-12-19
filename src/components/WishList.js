import React from 'react';
import { Link } from 'react-router-dom';

export default function WishList(props) {
  return (
    <div>
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-md-4 col-left-cart">
            <h5>Your Wish List</h5>
            <Link to="/" class="btn btn-link btn-delete">
              <span>
                <i class="fa fa-chevron-left"></i>
              </span>
              Keep Shopping
            </Link>
          </div>
          <div className="col-md-8 col-right-cart">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Ref.</th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {props.wish.map(item => (
                  <tr>
                    <th scope="row">{item.name}</th>
                    <td>87320</td>
                    <th scope="row">
                      <button
                        type="button"
                        class="btn btn-link btn-delete"
                        onClick={() => props.deleteFromWishList(item.id)}
                      >
                        Delete
                      </button>
                    </th>
                    <td>€ {item.price}</td>
                    <img src={item.imageUrl} key={item.id} alt={item.name} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
