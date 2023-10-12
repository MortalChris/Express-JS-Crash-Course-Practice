const express = require('express');
const path = require('path');
// //Init express
const app = express();
const port = process.env.PORT || 3000;

// //Create your endpoints/route handles
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));//public is the name of the foler, index.html is the file within
// });

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// //Listen on Port
app.listen(port, () => {
    console.log(`Website on http://localhost:${port}`)
});