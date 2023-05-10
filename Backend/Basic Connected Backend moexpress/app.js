/* eslint-disable no-unused-vars */
const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((result) => {
  console.log('database connected successfully');
}).catch((err) => {
  console.log('gabisa pak connecting', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({
    message: 'succes, hello dwi',
  });
});

require('./app/routes/post.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
