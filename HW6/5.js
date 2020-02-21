//just prints function
function checkForHardy(obj) {
    printjson(obj);
}

//find students who had an exam graded by a "Jeff Hardy"
db.students.find({"exams.ta": "Jeff Hardy" },
                 {firstname: 1,
                  lastname: 1,
                  exams: 1,
                  _id: 0}).sort({"lastname": 1, "firstname": -1}).forEach(function(obj){ printjson(obj); });