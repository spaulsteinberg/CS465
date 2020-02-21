
//find students with an A and a quiz score less than 50
db.students.find({grade: "A", 
                  quizzes: {$lt: 50} }, 
                  {firstname: 1,
                   lastname: 1, 
                   quizzes: 1,
                   _id: 0}).forEach(function(obj){ printjson(obj) });