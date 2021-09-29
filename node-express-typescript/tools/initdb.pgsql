
-- drop inventory table
DROP TABLE IF EXISTS inventory;

-- create inventory table
CREATE TABLE IF NOT EXISTS inventory(
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id varchar(50) NOT NULL,
    brand varchar(50) NOT NULL,
    model varchar(50) NOT NULL,
    year smallint NOT NULL,
    color varchar(50) NOT NULL
);
