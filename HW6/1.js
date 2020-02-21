// add info
var myDate = new Date("1993-03-17T00:00:00Z");
var quizzes = [43, 71, 53, 100, 0, 32, 31, 41];
var report = { score: 71, ta: "Clark Richards"};
var exams = [{score: 58, ta: "Nancy Hew", comments: "Need to step it up"},
            {score: 69, ta: "Clark Richards", comments: "Still not passing"},
            {score: 45, ta: "Nancy Hew"},
            {score: 33, ta: "Nancy Hew"},
            {score: 61, ta: "Clark Richards", comments: "Stop laying eggs on these exams"}];
// insert one
db.students.insertOne({lastname: "duck", 
                       firstname: "donald", 
                       dateOfBirth: myDate, 
                       email: "dduck@disney.com",
                       grade: "C", 
                       major: "MATH", 
                       quizzes: quizzes,
                       report: report,
                       exams: exams});
//find for TA's
db.students.find({ email: "dduck@disney.com" }, { _id: 0 });


