CREATE TABLE IF NOT EXISTS pet_names (
  pet_id INT NOT NULL, /* server-side generated id to use as key */
  pet_name VARCHAR(30) NOT NULL,
  gender SMALLINT,   /* 0- female, 1-male, 2-both */
  name_length INT,
  pet_personality VARCHAR(30), /* crazy, lazy, sweet, smart */
  nickname VARCHAR(30), /* 'nickname' OR NULL */
  old_name VARCHAR(30), /* 'old' or 'new' */
  typ_name VARCHAR(30), /* 'unique' or NULL */
  pet_type VARCHAR(30), /* dog, cat, rodent, or bird */
  food_relate VARCHAR(30), /* 'food' or NULL */
  pet_size VARCHAR(30), /* small, medium, large */
  color_ass VARCHAR(30), /* 'color' or NULL */
  PRIMARY KEY(pet_id, pet_name)
);


/* Insert Dog Values */
INSERT INTO pet_names(pet_id, pet_name, gender, name_length, pet_personality,
            nickname, old_name, typ_name, pet_type, food_relate, pet_size, color_ass)
VALUES(1,'Bernard', 1, 7, 'sweet', NULL, 'old', 'unique', 'dog', NULL, 'large', NULL),
VALUES(2,'Bernard', 1, 7, 'sweet', NULL, 'old', 'unique', 'cat', NULL, 'large', NULL),
VALUES(3,'Bernard', 1, 7, 'sweet', NULL, 'old', 'unique', 'rodent', NULL, 'medium', NULL),
VALUES(4,'Elizabeth', 0, 6, 'smart', 'nickname', 'old', NULL, 'dog', NULL, 'medium', NULL),
VALUES(5,'Bailey', 0, 6, 'sweet', NULL, 'new', NULL, 'dog', NULL, 'medium', NULL),
VALUES(6,'Tiger', 1, 5, 'smart', NULL, 'new', 'unique', 'cat', NULL, 'large', NULL),
VALUES(7,'Blue', 1, 4, 'lazy', NULL, 'old', 'unique', 'dog', NULL, 'large', 'color'),
VALUES(8,'Coco', 0, 4, 'crazy', NULL, 'new', NULL, 'dog', NULL, 'small', NULL),
VALUES(9,'Rocky', 1, 5, 'sweet', NULL, 'new', NULL, 'dog', NULL, 'medium', NULL),
VALUES(10,'Chunk', 1, 5, 'lazy', NULL, 'new', 'unique', 'dog', 'food', 'large', NULL),
VALUES(11,'Peanut', 1, 6, 'crazy', NULL, 'new', NULL, 'dog', 'food', 'small', NULL),
VALUES(12,'Arizona', 1, 7, 'smart', NULL, 'old', 'unique', 'dog', NULL, 'medium', NULL)
VALUES(13,'Binx', 1, 4, 'smart', NULL, 'new', 'unique', 'cat', NULL, 'medium', NULL);
