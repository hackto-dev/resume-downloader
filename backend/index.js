const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { resolve } = require('path');

const app = express();
const port = `5001`;

app.use(cors());

// Accessing file
app.get('/document',(req,res) => {
  const file = '/home/nitr0-gg/Resume.pdf';
  fs.readFile(file,(err,data) => {
    res.contentType('application/pdf');
    res.send(data);
  })
})



// HTTP SERVER
app.listen(port, () => console.log(`Listening on port: ${port}`));