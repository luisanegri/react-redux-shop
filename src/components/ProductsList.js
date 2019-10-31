import React from "react";

export default function ProductList(props) {
  return (
    <div>
      <h1>All products</h1>
      <p>There are {props.products.length} products available.</p>

      <ul>
        {props.products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <div className="container">
        <div class="row">
          {props.products.map(product => (
            <div class="col-md-4">
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt="product image"
                  key={product.id}
                />{" "}
                <div className="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} </p>
                  <a href="#" className="btn btn-primary">
                    Vieuw Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
        <div className="card">
         
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div> */
}
