const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

console.log("stripe", stripe)

router.post("/payment", (req, res) => res.send({ title: 'GeeksforGeeks' })
// {
//   res.send({ title: 'GeeksforGeeks' });

	// stripe.charges.create(
	// 	{
	// 		source: req.body.tokenId,
	// 		amount: req.body.amount,
	// 		currency: "usd"
	// 	},
	// 	(stripeErr, stripeRes) => {
	// 		if (stripeErr) {
	// 			res.status(500).json(stripeErr);
	// 		} else {
	// 			res.status(200).json(stripeRes);
	// 		}
	// 	}
	// );
// }
);

module.exports = router;
