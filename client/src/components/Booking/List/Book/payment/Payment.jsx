import './Payment.css'
import StripeCheckout from 'react-stripe-checkout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next"
import Axios from 'axios';

function Payment() {
    const [pricee, setPrice] = useState()
    useEffect(() => {
        Axios.get("http://localhost:3001/payments").then((response) => {
            setPrice(response.data[0].price)
        })
    }, [])
    const [t] = useTranslation()
    const publishableKey = 'pk_test_51MOkdoD7ScukiwQNQSS4O6GFZFXyiVHC2Ql9nZmofMUvwVB5fNLT8lLLh1VUH7v58zBux6TeDfAIHzCfcmidgOCA00nRWPXodJ';
    const priceForStripe = pricee * 100;
    const handleSuccess = () => {
        alert(`You Paid ${pricee} dh Succesfully`)
        window.location.href = '/';
    };
    const handleFailure = () => {
        console.log('no')
    };

    const payNow = async token => {
        try {
            const response = await axios({
                url: 'http://localhost:3001/payment',
                method: 'post',
                data: {
                    amount: pricee * 100,
                    token,
                },
            });
            if (response.status === 200) {
                handleSuccess();
            }
        } catch (error) {
            handleFailure();
        }
    };

    return (
        <div className="payment">
            <StripeCheckout
                stripeKey={publishableKey}
                label={t('next: payment')}
                name="Pay With Credit Card"
                description={`Your total is ${pricee} dh`}
                amount={priceForStripe}
                token={payNow}
                panelLabel="Pay"
                currency='mad'
            />
        </div>
    );
}

export default Payment;
