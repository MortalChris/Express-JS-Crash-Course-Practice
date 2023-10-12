const express = require('express');
const path = require('path');
const messages = require('./messages.js')

// //Init express
const app = express();
const port = process.env.PORT || 3000;

// //Create your endpoints/route handles
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));//public is the name of the foler, index.html is the file within
// });


// app.use('/api/messages', (req, res) => { //Gets all Messages from messages.js
//     res.join(messages);
// });


//Set Static folder    seems to reference one folder and anything in that folder becomes a page
app.use(express.static(path.join(__dirname, 'public')));

// //Listen on Port
app.listen(port, () => {
    console.log(`Website on http://localhost:${port}`)
});