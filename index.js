const dotenv = require('dotenv');
const { server } = require('./server');

dotenv.config();

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});