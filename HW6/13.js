//print function called after findOne
function updateApplied(obj){
    if (obj) printjson(obj);
}

//add an exam to smiley vanden zanden with a score of 95 and a ta of Jeff Hardy
//key in this assignment is email so these are used for finding the correct index
db.students.update( { email: "smiley@utk.edu" },
                    { $push: { exams: { score: 95, ta: "Jeff Hardy" } }}
                  );
var toPrint = db.students.findOne({ email: "smiley@utk.edu" }, { _id: 0 });
updateApplied(toPrint);