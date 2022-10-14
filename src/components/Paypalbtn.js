
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";

export default function Paypalbtn() {
    const cart = useSelector((state) => state.cart) 
    let tax = (cart.cartTotalAmount * 0.05)
    let shipping = 10
    let totalPlusTaxes = (tax > 0 ? (tax + shipping + cart.cartTotalAmount) : 0)
    
            return(
        <PayPalScriptProvider 
        onSuccess = {(details, data) => { }} options = {{ "client-id": "AYqIX5703Zwl8T3NLTCjgTs8e0OGNSdy1mpbN7w7uKEAgyjVCKCOfTzQ1EXJHjkbvgnbP1Qx9DUw5-2b" }}>
        <PayPalButtons style={{ color: 'silver', label: "buynow", shape: "pill", size: 'responsive' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalPlusTaxes,
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
        </PayPalScriptProvider >
    );
}