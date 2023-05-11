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

//question attribute
const question = document.createElement("figcaption")  // creates question, second attribute 
 // catQuestion is the second attribute of cat
 question.textContent = cat.Question 
 // links Question (key) of cats to textContent attribute of question . 
 console.log(question)
 catObject.classList.add("question") // adds question className to catObject variable


 //Image attribute 
 const catImage = document.createElement("img") //  creates catImages, third attribute
 catImage.src = cat.Image // links Image(key) of cats to src attribute of catImage . 
 console.log(catImage)
 catObject.classList.add("catImage") // adds catImage className to catObject variable
 

 //fact part
const fact = document.createElement("p") // creates fact , fourth attribute 
fact.textContent = cat.Fact  // links Fact(key) of cats to textContent attribute fact . 
fact.style.display = "none" 
catObject.classList.add("fact") // adds fact className to catObject variable


// Sound part 
const sound = document.getElementById("sound") // creates sound variable 



 


