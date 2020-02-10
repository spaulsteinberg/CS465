create table __Room(
    roomNo int(3) NOT NULL CHECK(roomNo between 1 and 100),
    hotelNo int(4) NOT NULL,
    type varchar(9) CHECK(type in ('single', 'double', 	'family')),
    price decimal(5,2) CHECK(price between 10 and 100)
);

create table __Booking(
    hotelNo int(4) NOT NULL,
    guestNo int(7) NOT NULL,
    dateFrom date CHECK(dateFrom > CURDATE()),
    dateTo date CHECK(dateTo > CURDATE()),
    roomNo int(3) NOT NULL CHECK(roomNo between 1 and 100)
);

create table __Guest(
    guestNo int(7) NOT NULL,
    guestName varchar(30) NOT NULL,
    guestAddress varchar(50)
);

/*
    CONSTRAINT doublebooked
	CHECK (NOT EXISTS (  select b.* from Booking b 		join Booking bk on  b.dateFrom <= bk.dateTo and 		b.dateTo >= bk.dateFrom and b.roomNo = bk.roomNo 		and b.hotelNo = bk.hotelNo));

    CONSTRAINT overlappedbookings
	CHECK (NOT EXISTS (select b.* from Booking b join 	Booking bk on b.guestNo = bk.guestNo and 		b.dateFrom < bk.dateTo and b.dateTo > bk.dateFrom));
*/