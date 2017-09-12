CREATE OR REPLACE FUNCTION insert_timestamp_column()	
	RETURNS TRIGGER AS $$
	BEGIN
	    NEW.created_at = now();
	    RETURN NEW;	
	END;
$$ language 'plpgsql';

CREATE OR REPLACE FUNCTION update_timestamp_column()	
	RETURNS TRIGGER AS $$
	BEGIN
	    NEW.updated_at = now();
	    RETURN NEW;	
	END;
$$ language 'plpgsql';

