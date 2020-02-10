drop view if exists Occupant;
drop view if exists RoomDetails;

create view RoomDetails(roomNo, hotelNo, type, price) as select r.roomNo, r.hotelNo, r.type, r.price from Room r, Hotel h where (r.hotelNo=h.hotelNo) and (h.hotelName = "Grosvenor Hotel");

create view Occupant as select g.guestName, b.roomNo as `room` from Guest g, Booking b, Hotel h where g.guestNo = b.guestNo and b.hotelNo=h.hotelNo and hotelName='Grosvenor Hotel' and (CURDATE() >= b.dateFrom and dateTo >= CURDATE());



select r.*, o.guestName from RoomDetails r left join Occupant o on (r.roomNo = o.room);

