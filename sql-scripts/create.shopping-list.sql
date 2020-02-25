DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery as ENUM (
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);

CREATE TABLE IF NOT EXISTS shopping_list (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name VARCHAR(30) NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    date_added TIMESTAMP DEFAULT now() NOT NULL,
    checked BOOLEAN DEFAULT false NOT NULL,
    category grocery NOT NULL
);