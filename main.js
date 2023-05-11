fetch(`http://localhost:3000/cats`)
.then(response=>response.json())
.then(cats => cats.forEach(cat => console.log(cat)))
 