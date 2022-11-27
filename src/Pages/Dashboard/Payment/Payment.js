import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const { title, price } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {title}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};


export default Payment;