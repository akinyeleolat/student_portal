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
CREATE TABLE IF NOT EXISTS program(
   id SERIAL PRIMARY KEY,
   program_name VARCHAR(50) NOT NULL,
   program_duration VARCHAR(50) NOT NULL,
   reg_fee INT NOT NULL,
   payment INT NOT NULL
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
created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
-- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS admission_personal_info (
   id  SERIAL PRIMARY KEY,
   user_id INT NOT NULL, 
   home_address TEXT NOT NULL,
   marital_status VARCHAR(50) NOT NULL,
   gender VARCHAR(50) NOT NULL,
   age INT NOT NULL,
   living_with_spouse VARCHAR(50) NOT NULL,
   reason_if_no TEXT NULL,
   work VARCHAR(255) NOT NULL,
   work_address TEXT NOT NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   -- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS admission_church_info (
   id  SERIAL PRIMARY KEY,
   user_id INT NOT NULL,
   church_name TEXT NOT NULL,
   church_address TEXT NOT NULL,
   position_in_church VARCHAR(255) NOT NULL,
   pastors_name VARCHAR(255) NOT NULL,
   pastors_telephone VARCHAR(50) NOT NULL,
   pastors_email VARCHAR(50) NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   -- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS admission_academic_info (
   id  SERIAL PRIMARY KEY,
   user_id INT NOT NULL, 
   highest_qualification VARCHAR(50) NOT NULL,
   course_of_study VARCHAR(50) NOT NULL,
   graduation_year VARCHAR(50) NOT NULL,
   institution_name1 VARCHAR(255) NOT NULL,
   date_started1 DATE NOT NULL,
   date_ended1 DATE NOT NULL,
   institution_name2 VARCHAR(255)  NULL,
   date_started2 DATE NULL,
   date_ended2 DATE NULL,
   institution_name3 VARCHAR(255)  NULL,
   date_started3 DATE NULL,
   date_ended3 DATE NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   -- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS admission_enroll_info (
   id  SERIAL PRIMARY KEY,
   user_id INT NOT NULL, 
   firstChoice VARCHAR(255) NOT NULL,
   secondChoice VARCHAR(255)  NULL,
   born_again VARCHAR(50) NOT NULL,
   salvation_date DATE NOT NULL,
   salvation_experience TEXT NOT NULL,
   baptized_in_holyghost VARCHAR(50) NOT NULL,
   baptism_date DATE NOT NULL,
   baptism_experience TEXT NOT NULL,
   statement_purpose TEXT NOT NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   -- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS admission_reference_info (
   id  SERIAL PRIMARY KEY,
   user_id INT NOT NULL, 
   reference1_name VARCHAR(255) NOT NULL,
   reference1_email VARCHAR(50) NOT NULL,
   reference1_telephone VARCHAR(50) NOT NULL,
   reference1_work_address TEXT NOT NULL,
   reference1_home_address TEXT NOT NULL,
   reference1_relationship VARCHAR(255) NOT NULL,
   reference1_relationship_duration VARCHAR(50) NOT NULL,
   reference2_name VARCHAR(255) NOT NULL,
   reference2_email VARCHAR(50) NOT NULL,
   reference2_telephone VARCHAR(50) NOT NULL,
   reference2_work_address TEXT NOT NULL,
   reference2_home_address TEXT NOT NULL,
   reference2_relationship VARCHAR(255) NOT NULL,
   reference2_relationship_duration VARCHAR(50) NOT NULL,
   created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
   -- RELATIONSHIP --
FOREIGN KEY(user_id) REFERENCES users( id ) ON DELETE CASCADE
);