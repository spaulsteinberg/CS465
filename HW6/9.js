
  db.students.aggregate([
    { $project: { _id: 0,
                  firstname: 1,
                  lastname: 1,
                  min: { $min: "$quizzes"},
                  max: { $max: "$quizzes"},
                  avgQuiz: { $avg: "$quizzes"}}
    }]).forEach(function(obj){ printjson(obj); });

