CREATE DATABASE teamder;
use teamder;

CREATE TABLE user_account(
	user_id varchar(10),
	password varchar(20)
);

CREATE TABLE user_account(
	user_id varchar(10),
	user_first_name varchar (40),
	user_last_name varchar (40),
	email varchar(40),
	phone_number varchar(12),
	age int,
	introduction varchar(700),
	sex varchar(1),
	rating int,
	perference1 varchar(20),
	perference2 varchar(20),
	perference3 varchar(20),
	is_admin varchar(2),
	PRIMARY KEY (user_id)
);

CREATE TABLE post(
	title varchar(500),
	post_id varchar(10),
	host_id varchar(10),
	joiner_id varchar(10),
	type_of_game varchar (40),
	date_time DATETIME,
	photo_url_1 varchar(100),
	photo_url_2 varchar(100),
	photo_url_3 varchar(100),
	hashtag varchar(100),
	PRIMARY KEY (post_id),
	FOREIGN KEY (host_id) REFERENCES user_account(user_id),
	FOREIGN KEY (joiner_id) REFERENCES user_account(user_id)
);

CREATE TABLE room(
	room_id varchar(10),
	host_id varchar(10),
	participant_id varchar(10),
	max_number_member int,
	PRIMARY KEY (room_id),
	FOREIGN KEY (host_id) REFERENCES user_account(user_id),
	FOREIGN KEY (participant_id) REFERENCES user_account(user_id)
);

CREATE TABLE group(
	group_id varchar(10),
	group_name varchar(70),
	group_descripton varchar(350),
	PRIMARY KEY (group_id)
);

CREATE TABLE chat(
	room_id varchar(10),
	sender_id varchar(10),
	content varchar(350),
	chat_time datatime,
	PRIMARY KEY (room_id),
	FOREIGN KEY (room_id) REFERENCES room(room_id)
);

CREATE TABLE comment(
	post_id varchar(10),
	comment_user_id varchar(10),
	comment_date datatime,
	comment_content varchar(350),
	FOREIGN KEY (post_id) REFERENCES post(post_id),
	FOREIGN KEY (comment_user_id) REFERENCES user(user_id)
);






