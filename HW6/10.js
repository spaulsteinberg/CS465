
//project the req fields, sort on avg exam
db.students.aggregate([
    {  $project: { _id: 0,
                  firstname: 1,
                  lastname: 1,
                  avgExam: { $avg: "$exams.score"}}},
      {$sort: {"avgExam": -1}}
    ]).forEach(function(obj){ printjson(obj); });