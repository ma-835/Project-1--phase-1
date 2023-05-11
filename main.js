fetch(`http://localhost:3000/cats`)
.then(response=>response.json())
.then(cats => cats.forEach(cat => rendercat(cat)))
// uses a forEach method to loop through the object in db.json file 





function renderCat(cat) {
const container = document.querySelector('.container'); // creates container variable
const catObject= document.createElement('div') // creates catObject variable
const catName = document.createElement("h2") // creates catName, first attribute
catName.textContent=cat.Name  // links Name(key) of cats to textContent attribute of CatName 
console.log(catName) 
catObject.classList.add("catName") // adds catName className to catObject variable
const question = document.createElement("figcaption")  // creates question, second attribute 






 


