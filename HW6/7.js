db.students.find({"report.comments": {$exists: false} }, 
                  {firstname: 1,
                   lastname: 1, 
                   report: 1,
                   _id: 0}).forEach(function(obj){ printjson(obj); });