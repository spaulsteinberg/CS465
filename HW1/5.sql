select price,type from Room r join Hotel h on r.hotelNo = h.hotelNo where h.hotelName like '%Grosvenor Hotel%';