// for loading environment variables
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    ...process.env
}