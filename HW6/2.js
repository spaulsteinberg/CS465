// find all the students with a grade of A, only project first and last names with no ID
db.students.find({grade: "A"}, {firstname: 1, lastname: 1, _id: 0}).forEach(function(obj){ printjson(obj);});
