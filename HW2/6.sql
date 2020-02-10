create view CheckingOutToday as select g.guestNo, g.guestName, g.guestAddress, b.roomNo, DATEDIFF(b.dateTo, b.dateFrom) as `numDays`, (DATEDIFF(b.dateTo, b.dateFrom)*r.price) as `totalCost` from Guest g, Booking b, Room r where b.dateTo = CURDATE() and b.guestNo = g.guestNo and r.hotelNo = b.hotelNo and r.roomNo = b.roomNo;

