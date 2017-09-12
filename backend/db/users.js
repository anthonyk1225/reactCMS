const db = require('./index');
const format = require('pg-format');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    createUser:(user) => {
        const hash = bcrypt.hashSync(user.password, salt);
        const query = format('INSERT into USERS (username, email, password) VALUES (%L, %L, %L)', 
            user.username, user.email, hash);
        // console.log(query)
        return db.any(query)
        .then(result => {
            return result;
        })
        .catch(err => {
            throw err;
        })        
    },
    login:(user) => {
        const query = format('SELECT * from users where username=%L', user.username)
        return db.any(query)
        .then(result => {
            const hash = bcrypt.hashSync(user.password, salt);
            const validPass = bcrypt.compareSync(result[0].password, salt);
            return validPass;
        })
        .catch(err => {
            throw err;
        })
    }
};

