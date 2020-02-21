//print function called after findOne
function updateApplied(obj){
    if (obj) printjson(obj);
}

//use a variable to store exam info, as to preseve any fields we dont want to overwrite with $set
//alter 1st and 3rd exam
var examOneInfo = db.students.findOne({email: "mmouse@disney.com"}, { exams: 1, _id: 0});
db.students.update( { email: "mmouse@disney.com" },
                    { 
                    $set: { 
                        "exams.0": { score: 86, ta: examOneInfo["exams"][0]["ta"], comments: examOneInfo["exams"][0]["comments"] },
                        "exams.2": { score: 100, ta: "Nancy Hew", comments: examOneInfo["exams"][2]["comments"] } }}
                  );
//print for TA's
var toPrint = db.students.findOne({ email: "mmouse@disney.com" }, { _id: 0 });
updateApplied(toPrint);
