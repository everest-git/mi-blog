CREATE DATABASE miblog;
 
USE miblog;
 
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE,
DROP, INDEX, ALTER, LOCK TABLES, CREATE TEMPORARY TABLES
ON miblog.* TO 'miblog@localhost' IDENTIFIED BY 'password';
 
CREATE TABLE IF NOT EXISTS users (
    id mediumint UNSIGNED NOT NULL AUTO_INCREMENT,
    login varchar(32) NOT NULL,
    password varchar(32) NOT NULL,
    email varchar(64) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;
 
CREATE TABLE IF NOT EXISTS posts (
    id mediumint UNSIGNED NOT NULL AUTO_INCREMENT,
    title varchar(32) NOT NULL,
    friendly_url varchar(32) NOT NULL,
    post TEXT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT NOW(),
    id_user mediumint UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id)
) ENGINE=InnoDB;
 
INSERT INTO users(login, password, email) VALUES
('admin', MD5('password'), 'admin@hotmail.com');
 
INSERT INTO posts(title, friendly_url, post, id_user) VALUES
('Este es el primer post', 'este-es-el-primer-post', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.</p>', 1),
('Este es el segundo post', 'este-es-el-segundo-post', '<p>Lorem ipsum dolor sit amet.</p>', 1);