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
