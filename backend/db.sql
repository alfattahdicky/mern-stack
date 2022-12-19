CREATE DATABASE multimatics_test;

use multimatics_test;

CREATE TABLE members(
  id INT(3) primary key NOT NULL AUTO_INCREMENT,
  nama_lengkap VARCHAR(50) NOT NULL,
  alamat VARCHAR(75) NOT NULL,
  email VARCHAR(25) NOT NULL UNIQUE,
  pekerjaan ENUM('pns', 'swasta', 'usaha') NOT NULL
);

SHOW CREATE TABLE members;

SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA LIKE 'test'; 


-- GET All Data
SELECT * FROM members;

-- Add data
INSERT INTO members(nama_lengkap, alamat, email, pekerjaan) VALUES('Dicky AL Fattah', 'JL. Lebak Para', 'alfattahdicky@gmail.com', 'pns');

INSERT INTO members VALUES nama_lengkap = 'Azka', alamat = 'Lebak Para', email = 'azka@gmail.com', pekerjaan = 'pns'

-- Edit data
UPDATE members SET nama_lengkap = 'Dicky', pekerjaan = 'swasta' WHERE id = 1;

-- DELETE data

DELETE FROM members WHERE id = 1;