
//print function called after findOne
function updateApplied(obj){
    if (obj) printjson(obj);
}

//update Mickey Mouse's info. NOTE: email was given as the unqiue identifier in this assignment
//hence update and find use it as the unque key
db.students.update({email: "mickey@disney.com"},
                   {$set: {
                        grade: "A",
                        "report.ta": "Clark Richards"
                    }});
var toPrint = db.students.findOne({email: "mickey@disney.com"}, {_id: 0});
updateApplied(toPrint);