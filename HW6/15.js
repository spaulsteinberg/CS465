
//remove great ape, again key by email
db.students.remove( { email: "gape@warner.com" }, true );
//then do find query as asked for in assignment.
var isFound = db.students.findOne( {email: "gape@warner.com"}, {_id: 0} );
if (isFound) printjson(isFound);
