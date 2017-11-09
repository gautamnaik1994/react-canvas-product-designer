const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client/public')));


// const indexPath = path.join(__dirname, '/client/public/index.html');
// const publicPath = express.static(path.join(__dirname, 'client/public'));

// app.use('/public', publicPath);
// app.get('/', (_, res) => { res.sendFile(indexPath); });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});
