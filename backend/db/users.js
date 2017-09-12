const db = require('./index');
const format = require('pg-format');

module.exports = {
    createUser:(user) => {
        const query = format('SELECT * from users');
        return db.any(query)
        .then(result => {
            return result;
        })
        .catch(err => {
            throw err;
        })
    }
};

