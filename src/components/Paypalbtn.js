
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function Paypalbtn() {


    return (
        <PayPalScriptProvider 
        onSuccess={(details, data) => { }} options={{"client-id": "AYqIX5703Zwl8T3NLTCjgTs8e0OGNSdy1mpbN7w7uKEAgyjVCKCOfTzQ1EXJHjkbvgnbP1Qx9DUw5-2b"}}>
            <PayPalButtons style={{color: 'silver', label: "buynow", shape: "pill"} }
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}