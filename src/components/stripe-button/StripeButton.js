import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_X6jZs0K5En58bt00ZkxjH2gi';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop"
      billingAddress
      shippingAddress
      description={`Your total is €${price}`}
      currency="EUR"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      style={{ float: 'right', marginTop: '10px' }}
    />
  );
};

export default StripeButton;
