const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
// //Init express
const app = express();

// //Create your endpoints/route handles
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));//public is the name of the foler, index.html is the file within
// });


// const messages = require('./messages.js')
// app.use('/api/messages', (req, res) => { //Gets all Messages from messages.js
//     res.join(messages);
// });


// const logger = require('\middleware\logger.js')
// app.use(logger);

//Set Static folder    seems to reference one folder and anything in that folder becomes a page
app.use(express.static(path.join(__dirname, 'public')));

// //Listen on Port
app.listen(port, () => {
    console.log(`Website on http://localhost:${port}`)
});