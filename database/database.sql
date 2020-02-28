CREATE DATABASE ng_posts_db;

USE ng_posts_db;

CREATE TABLE post(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100),
    test INT(120),
    PRIMARY KEY(id),
);