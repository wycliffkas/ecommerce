import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Button from "@mui/material/Button";

const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate();

	const onToken = (token) => {
    console.log("token", token)
		setStripeToken(token);
	};

  console.log()

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post(
					"http://localhost:5000/api/checkout/payment",
					{
						tokenId: stripeToken.id,
						amount: 2000
					}
				);

				navigate("/success");
			} catch (err) {
				console.log(err);
			}
		};

		stripeToken && makeRequest();
	}, [stripeToken, navigate]);

	return (
		<div>
			{stripeToken ? (
				<span>Processing, please WebGLActiveInfo....</span>
			) : (
				<StripeCheckout
					name="Wyco && Company"
					description="Item Payments"
					image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
					amount={1000000}
					token={onToken}
					stripeKey={process.env.REACT_APP_STRIPE_KEY}>
					<Button variant="contained" size="medium">
						Pay Here
					</Button>
				</StripeCheckout>
			)}
		</div>
	);
};

export default Pay;
