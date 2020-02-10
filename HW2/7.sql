/*

a. Yes, this is a valid query listing all the rooms in the hotel that has an 'id' of 1. In relational calculus it is stating:
{RoomBookingCount.hotelNo, RoomBookingCount.roomNo | RoomBookingCount ∧ RoomBooking.hotelNo = 1}

This is a valid SQL call to the base table and is in the proper SELECT-FROM-WHERE format:

First, the view column names in the SELECT list are translated into the corresponding column names. After this, view names in FROM are replaced the corresponding FROM lists of the defining query. Finally, the WHERE from the user query is used to finish the merged query and is executed to produce the desired result.

Here is the actual query:
*/
select b.hotelNo, r.roomNo from Booking b, Room r where r.hotelNo = b.hotelNo and r.roomNo = b.roomNo and r.hotelNo = 1 group by b.hotelNo, r.roomNo;
/*
b. No, this is NOT a valid query. Since the bookingCount attribute was defined by an aggregate function in the view, it may NOT be used as an argument to an aggregate function in any query based on the view. Here, bookingCount is being used as an argument to the aggregate function SUM() in the query.
*//*
c. Yes, this is a valid query because the column bookingCount (based off an aggregate function) is appearing only in the SELECT and ORDER BY clauses. When relating to the base table: 
First, the view column names in the SELECT list are translated into the corresponding column names. After this, view names in FROM are replaced the corresponding FROM lists of the defining query. Lastly, the ORDER BY copied from the user query with the view column name translated into the defining query column name takes place to complete the query. 

Here is the query:
*/
select b.hotelNo, r.roomNo, COUNT(*) as `bookingCount` from Room r, Booking b where r.roomNo = b.roomNo and r.hotelNo = b.hotelNo group by b.hotelNo, r.roomNo order by bookingCount;

