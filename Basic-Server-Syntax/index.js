const express = require('express');
// //Init express
const app = express();
const port = processs.env.PORT || 3000;

// //Create your endpoints/route handles
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// //Listen on Port
app.listen(port, () => {
    console.log(`Website on http://localhost:${port}`)
});