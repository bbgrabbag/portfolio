const ex = require('express');
const path = require('path');

const server = ex();

server.use(ex.static(path.resolve(__dirname, 'client', 'dist')))
server.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

server.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

module.exports = {
    server
}