const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JKapfFZ4ynmTiSDpIoY1ewwv9cVoCFSxCDfNXqB6ICcJPcznqqAq7ZrjdTgooMRyhCa1DmXAMvT3I9WLs1WVEMq00yL5NyXRl");

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API Routes
app.get("/", (request, response) => response.status(400).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received BOOM for this amount >>>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen
exports.api = functions.https.onRequest(app);