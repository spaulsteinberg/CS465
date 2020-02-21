
//find individual year for each obj, if the year is 2000 then print
function year2000(obj) {
    var year = obj['dateOfBirth'].getFullYear();
    if (year === 2000){
        printjson(obj);
    }
}
//only get first and last name, DOB, and grade
db.students.find({}, {firstname: 1, lastname: 1, dateOfBirth: 1, grade: 1, _id: 0}).forEach(year2000)