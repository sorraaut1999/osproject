const express = require("express");
const app = express();
app.use(express.json())

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log('server is running on port: ', port);
});

app.get('/', (req, res) => {      
    res.sendFile(__dirname+"/"+"index.html")
});
