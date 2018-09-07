const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const publicPath = path.join(__dirname, '../client/public');
app.use(parser.json());
app.use(express.static(publicPath));


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('languages');
  const languagesCollection = db.collection('words');
  const languagesRouter = createRouter(languagesCollection);
  app.use('/api/words', languagesRouter);
}).catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
