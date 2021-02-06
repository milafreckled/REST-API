const express = require('express');
const mongoose = require('mongoose');
const app = express();
const subscriberRouter = require('./routes/subscribers');
const Subscriber = require('./models/Subcriber');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to database!"));
app.use('subscribers', subscriberRouter);
app.use(express.json());
app.post("/", async (req, res) => {
      const subscriber = new Subscriber({
          name: req.body.name,
          surname: req.body.surname,
          address: {
            new Address({
              req.body.city,
              req.body.street,
              req.body.number
            }),
          });
        try {
          const newSubscriber = await subscriber.save();
          res.status(201).json(newSubscriber);
        } catch (err) {
          res.status(500).json({
            message: err.message
          });
        }
      });

    app.get("/", async (req, res) => {
      try {
        const subs = Subcriber.find();
        res.status(200).json(subs);
      } catch (err) {
        res.status(500).json({
          message: err.message
        });
      }
    });

    app.get("/:id", function(req, res) {
      try {
        const sub = Subcriber.findById(req.params.id);
        res.status(200).json(sub);
      } catch (err) {
        res.status(500).json({
          message: err.message
        });
      }
    });

    app.listen(3000, () => {
      console.log("Server has started on port 3000");
    });

    async function getSubscriber(req, res, next) {
      try {
        subscriber = await Subscriber.findById(req.params.id);
      } catch (err) {
        res.status(500).json();
      }
    }