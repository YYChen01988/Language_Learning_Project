const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(languages){


  const router = express.Router();


  // INDEX
  router.get('/', (req, res) => {
    languages
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    languages
      .find({ _id: ObjectID(id) })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // CREATE
  router.post('/', (req, res) => {
    const newWord = req.body;
    languages
      .insertOne(newWord)
      .then(() => {
        languages
          .find()
          .toArray()
          .then((docs) => {return res.json(docs);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });
  });
  return router;
};

module.exports = createRouter;
