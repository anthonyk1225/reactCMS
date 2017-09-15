const db = require('./index');
const format = require('pg-format');

module.exports = {
	getPages:(pageId) => {
		const query = format('SELECT * from PAGES where parent_id=%L', pageId);
		return db.any(query)
		.then(result => {
			return {success: true, pages: result}
		})
        .catch(err => {
            throw err;
        })  		
	},
	createPage:(page) => {
        const query = format('INSERT into PAGES (name, url, parent_id) VALUES (%L, %L, %L)', 
            page.title, page.url, page.parentId);
        return db.any(query)
        .then(result => {
            return {success: true};
        })
        .catch(err => {
            throw err;
        })        
	}
};
