import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home() {

  function CheckoutOnClick() {
    axios.post('https://api.test.paymennt.com/mer/v2.0/checkout/web', {
            requestId: "CHK-100000214-r1",
            orderId: "CHK-100000214",
            description: "string",
            currency: "AED",
            amount: 100,
            totals: {
              subtotal: 100,
              tax: 5,
              shipping: 3,
              handling: 2,
              discount: 10,
              skipTotalsValidation: false
            },
            items: [
              {
                name: "Dark grey sunglasses",
                sku: "1116521",
                unitprice: 50,
                quantity: 2,
                linetotal: 100
              }
            ],
            sendSms: true,
            sendEmail: true,
            customer: {
              id: "123456",
              firstName: "Shariq",
              lastName: "Shariq",
              email: "shariqmehdi12@gmailcom",
              phone: "03443023127"
            },
            billingAddress: {
              name: "shariq   ",
              address1: "daksdlkjaslkd",
              address2: "sadasdasd",
              city: "asdasdasdad",
              state: "asdasdasdasd",
              zip: "12345",
              country: "AE"
            },
            deliveryAddress: {
              name: "sdasdasd",
              address1: "sadasdasda",
              address2: "asdasdasd",
              city: "sdaasdasd",
              state: "asdasdasd",
              zip: "12345",
              country: "AE"
            },
            returnUrl: "https://shop.example.com/payment-redirect/",
            branchId: 0,
            allowedPaymentMethods: [
              "CARD"
            ],
            defaultPaymentMethod: "CARD",
            expiresIn: 1440,
            language: "EN"
        },
        {
            mode: 'no-cors',
            withCredentials: true,
            headers: {
                'X-PointCheckout-Api-Key': '180e1959ed45f134',
                'X-PointCheckout-Api-Secret':'mer_7614412e5980f72fb88c086ea63e3cef14f169842c84e98f6c1aa9d393c0d2fb',
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  return (
    <>
      <button onClick={CheckoutOnClick}>CheckOut</button>
    </>
  )
}
