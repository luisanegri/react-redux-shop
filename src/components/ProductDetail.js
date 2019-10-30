import React from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

export default function ProductDetail(props) {
  console.log('props are you there?', props);
  return (
    <div>
      <div className="container-fluid container-product">
        <div className="row">
          <div className="col-md-6 col-left">
            <ReactFancyBox
              thumbnail={props.product.imageUrl}
              image={props.product.imageUrl}
            />

            {/* <img src={props.product.imageUrl} alt="product"></img> */}
          </div>
          <div className="col-md-6 right-col">
            <div className="body">
              <h4>{props.product.name}</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </p>
              <div className="detail-product">
                <span className="price-num">€{props.product.price}</span>
                <span className="shipping">Ships for free</span>
              </div>

              <div className="btn-wrapper">
                <button type="button" className="btn btn-lg btn-add-cart">
                  Add to cart
                </button>
                <button type="button" className="btn btn-lg btn-add-cart">
                  Add to wishlist
                  {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
