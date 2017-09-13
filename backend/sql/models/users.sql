CREATE TABLE users(
	id serial NOT NULL PRIMARY KEY,
	username text NOT NULL,
	password varchar NOT NULL,
	token varchar NOT NULL,
	email text,
	created_at timestamp,
	updated_at timestamp
);

CREATE TRIGGER insert_users_timestamp BEFORE INSERT ON users FOR EACH ROW EXECUTE PROCEDURE insert_timestamp_column();
CREATE TRIGGER insert_users_timestamp_updated BEFORE INSERT ON users FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
CREATE TRIGGER update_users_timestamp BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
