import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KCVUyESV4LCP6zYfmSvOXdt8If6rm0AX415Zoca7JRohwVGE1DJh7NQnNkCAWFwpdBWAx3pITcYYaFWkpUNUhwo00sFwQGgOh';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout label='Pay Now' name='Peregrine Shop' billingAddress shippingAddress image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
	)
};

export default StripeCheckoutButton;