const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4600
//Getting our POSTS routes
const posts = require('./server/routes/posts');

//Using middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

//catch all other routes request and return it to the index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});