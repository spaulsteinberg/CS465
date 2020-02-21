

 db.students.aggregate([
    { $group: { _id: "$major", count: { $sum: 1 } } }
  ]).forEach(function(obj) { printjson(obj); });