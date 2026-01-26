CREATE TABLE visitors(
  id SERIAL PRIMARY KEY NOT NULL,
  month VARCHAR(30) NOT NULL,
  new_customer INTEGER NOT NULL,
  loyal_customer INTEGER NOT NULL,
  unique_customer INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)


INSERT INTO visitors (month, new_customer, loyal_customer, unique_customer) VALUES
('Jan', 50, 70, 120),
('Feb', 140, 130, 140),
('Mar', 160, 160, 140),
('Apr', 180, 200, 210),
('May', 190, 280, 220),
('Jun', 200, 330, 230),
('Jul', 310, 320, 240),
('Aug', 300, 310, 230),
('Sept', 180, 330, 160),
('Oct', 160, 180, 170),
('Nov', 140, 220, 150),
('Dec', 120, 70, 130);

