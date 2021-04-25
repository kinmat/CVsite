CREATE TABLE user_data (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR (50) NOT NULL,
    email NVARCHAR (50) NOT NULL,
	pass NVARCHAR (50) NOT NULL,
);

create TABLE work_exp (
    id INT IDENTITY(1,1) PRIMARY KEY,
	user_id int FOREIGN KEY REFERENCES user_data(id),
    position NVARCHAR (100) NOT NULL,
    employer NVARCHAR (100) NOT NULL,
	country NVARCHAR(100),
	city NVARCHAR(MAX),
	description NVARCHAR(MAX),
	work_from Date,
	work_to Date,
	ongoing BIT
);

create TABLE personal_info (
    id INT IDENTITY(1,1) PRIMARY KEY,
	user_id int FOREIGN KEY REFERENCES user_data(id),
    first_name VARCHAR (100) NOT NULL,
    last_name VARCHAR (100) NOT NULL,
	country NVARCHAR(MAX),
	city NVARCHAR(MAX),
	address1 NVARCHAR(MAX),
	address2 NVARCHAR(MAX),
	zip int,
	gender NVARCHAR(MAX),
	birthdate Date,
);

create TABLE education (
    id INT IDENTITY(1,1) PRIMARY KEY,
	user_id int FOREIGN KEY REFERENCES user_data(id),
    title NVARCHAR (100) NOT NULL,
    org NVARCHAR (100) NOT NULL,
	country NVARCHAR(100),
	city NVARCHAR(MAX),
	description NVARCHAR(MAX),
	edu_from Date,
	edu_to Date,
	in_progress BIT
);

create TABLE language (
    id INT IDENTITY(1,1) PRIMARY KEY,
	user_id int FOREIGN KEY REFERENCES user_data(id),
    lang NVARCHAR (100) NOT NULL,
    lvl NVARCHAR (100) NOT NULL,
);

create TABLE skill (
    id INT IDENTITY(1,1) PRIMARY KEY,
	user_id int FOREIGN KEY REFERENCES user_data(id),
    skill NVARCHAR(200) NOT NULL,
    lvl INT NOT NULL,
);