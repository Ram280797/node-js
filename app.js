const express = require('express');


const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/data', (req, res) => {
  const receivedData = req.body;
  

  res.json({
    message: 'Data received successfully!',
    data: receivedData
  });
});

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
