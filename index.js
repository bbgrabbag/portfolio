const { server } = require('./server');

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});