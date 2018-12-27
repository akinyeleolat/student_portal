CREATE TABLE IF NOT EXISTS users (
   id  SERIAL PRIMARY KEY,
   firstname  VARCHAR(255) NOT NULL,
   lastname  VARCHAR(255) NOT NULL,
   email  VARCHAR(255) NOT NULL UNIQUE,
   telephone  VARCHAR(255) NOT NULL UNIQUE,
   password  VARCHAR(255) NOT NULL,
   image_url  VARCHAR(225) NOT NULL,
   user_status INT NOT NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_users (
   id  SERIAL PRIMARY KEY,
   firstname  VARCHAR(255) NOT NULL,
   lastname  VARCHAR(255) NOT NULL,
   email  VARCHAR(255) NOT NULL UNIQUE,
   telephone  VARCHAR(255) NOT NULL UNIQUE,
   admin_password  VARCHAR(255) NOT NULL,
   image_url  VARCHAR(225) NOT NULL,
   admin_status INT NOT NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admission (
id  SERIAL PRIMARY KEY,
user_id INT NOT NULL,
personal_info_status VARCHAR(50) NOT NULL,
academic_info_status VARCHAR(50) NOT NULL,
enroll_info_status  VARCHAR(50) NOT NULL,
church_info_status VARCHAR(50) NOT NULL,
reference_info_status VARCHAR(50) NOT NULL,
upload_doc_info_status VARCHAR(50) NOT NULL,
reg_payment_status VARCHAR(50) NOT NULL,
interview_status VARCHAR(50) NOT NULL,
admission_status VARCHAR(50) NOT NULL,
-- RELATIONSHIP --
FOREIGN KEY( user_id ) REFERENCES users( id ) ON DELETE CASCADE
);

