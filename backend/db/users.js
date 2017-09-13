const db = require('./index');
const format = require('pg-format');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const uuidv4 = require('uuid/v4');

module.exports = {
    getUser:(session) => {
        const query = format('SELECT * from users where token=%L', session.user)
        return db.any(query)
        .then(result => {
            return {success: true, 'user': result[0]};
        })
        .catch(err => {
            throw err;
        })
    },
    createUser:(user) => {
        const token = uuidv4();
        const hash = bcrypt.hashSync(user.password, salt);
        const query = format('INSERT into USERS (username, email, password, token) VALUES (%L, %L, %L, %L)', 
            user.username, user.email, hash, token);
        return db.any(query)
        .then(result => {
            return {success: true, 'user': result[0]};
        })
        .catch(err => {
            throw err;
        })        
    },
    login:(user) => {
        const query = format('SELECT * from users where username=%L', user.username)
        return db.any(query)
        .then(result => {
            const validPass = bcrypt.compareSync(user.password, result[0].password);
            return {'success': validPass, 'user': result[0]};
        })
        .catch(err => {
            throw err;
        })
    }
};
