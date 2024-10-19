const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});


module.exports = server;