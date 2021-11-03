import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Jre0TEjpKLek1BGxOGOpYpgn8bfSeE9tqQYvEpJ3lUwgm2Fb6PHVP62BMcM9qKvLiNlDrR2o7fvQGxCDQoSgrxp00expDREkD';
  const secretKey =
    'sk_test_51Jre0TEjpKLek1BGhgD7sLEhUH2IXicx72Nu13Qj623IWHFVf7wr2XkCtdqgmQQ0RwHP86mdPKY74KiV0zofwwEv00LeoDyk9m';

  const onToken = () => {
    alert('Payment succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
