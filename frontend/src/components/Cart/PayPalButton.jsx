import React from 'react';
import { PayPalButtons,PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalButton = ({amount, onSuccess,onError}) => {
  return (
   <PayPalScriptProvider options={{"client-id":"ActkJNc9HnAqAjcQE9cW9AdAmHLsH88UPVROn394YGuLBn_-gAmBCxPOo0lPzRvTGck2knklzbcYcdNp"}}>

<PayPalButtons style={{layout:"vertical"}}
createOrder={(data, actions)=>{
    return actions.order.create({
        purchase_units:[{amount:{value:amount}}]
    })
}}
onApprove={(data, actions) => {
    return actions.order.capture().then(onSuccess)
}}
onError={onError} />

   </PayPalScriptProvider>
  )
}

export default PayPalButton