import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useTranslation } from 'react-i18next';

const StripeCheckoutButton = ({ price }) => {
	const { t } = useTranslation();
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KCVUyESV4LCP6zYfmSvOXdt8If6rm0AX415Zoca7JRohwVGE1DJh7NQnNkCAWFwpdBWAx3pITcYYaFWkpUNUhwo00sFwQGgOh';

	const onToken = token => {
		console.log(token);
		alert(t("checkout.paymentSuccesful"));
	};

	return (
		<StripeCheckout label={t("checkout.payNow")} name='Peregrine Shop' billingAddress image='https://svgshare.com/i/CUz.svg' description={`${t("checkout.paymentTotal")} $${price}`} amount={priceForStripe} panelLabel={t("checkout.payNow")} token={onToken} stripeKey={publishableKey} />
	)
};

export default StripeCheckoutButton;