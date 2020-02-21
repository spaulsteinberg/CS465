
//OR is wrapped because it is the master op between the two clauses which are ands.
//The exams find needs $elemMatch because we need the same array indicies for the comparison
db.students.find(
    { $or:
        [ 
            {$and: [{"report.ta": "Nancy Hew"}, 
                    {"report.score": {$gte: 60, $lte: 80}}
                   ]},
            {$and: [{"exams": {$elemMatch: {score: {$gte: 80, $lte: 100}, ta: "Nancy Hew"}}},
                   ]} // this not working for some reason
        ]},
    {firstname: 1, lastname: 1, "report.score": 1, _id: 0}).forEach(function(obj){ printjson(obj); });
