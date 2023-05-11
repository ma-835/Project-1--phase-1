fetch(`http://localhost:3000/cats`)
.then(response=>response.json())
.then(cats => cats.forEach(cat => rendercat(cat)))
// uses a forEach method to loop through the object in db.json file 





 


