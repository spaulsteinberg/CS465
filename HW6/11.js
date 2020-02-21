//if there is a grade match in required grades to check for (C, D, F), then count these occurrences
db.students.aggregate([
    { $match: {grade: {$in: ["C", "D", "F"]}}},
    { $count: "count" }
]).forEach(function(obj){ printjson(obj); });
