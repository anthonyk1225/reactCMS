CREATE TABLE pages(
	id serial NOT NULL PRIMARY KEY,
	name text NOT NULL,
	url text NOT NULL,
	parent_id integer NOT NULL,
	created_at timestamp,
	updated_at timestamp
);

CREATE TRIGGER insert_pages_timestamp BEFORE INSERT ON pages FOR EACH ROW EXECUTE PROCEDURE insert_timestamp_column();
CREATE TRIGGER insert_pages_timestamp_updated BEFORE INSERT ON pages FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
CREATE TRIGGER update_pages_timestamp BEFORE UPDATE ON pages FOR EACH ROW EXECUTE PROCEDURE update_timestamp_column();
