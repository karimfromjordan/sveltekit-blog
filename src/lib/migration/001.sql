create table user (
	id text primary key default (lower(hex(randomblob(8)))),
	email text not null unique
) strict;

create table user_history (
	changes blob not null
) strict;

create trigger user___insert_history after update on user begin

end;

create table history (
	id         text primary key default (lower(hex(randomblob(8)))),
	action     text,
	status     integer not null,
	code       text,
	table      text,
	row_id     text,
	params     blob,
	user_id    text,
	created_at text    not null default (datetime()),

	_stack     text,

	foreign key (user_id) references users (id) on delete cascade
) strict;

create table subscription (
	id         text primary key default (lower(hex(randomblob(8)))),
	event      text not null,
	user_id    text,
	created_at text    not null default (datetime()),

	foreign key (user_id) references users (id) on delete cascade
) strict;