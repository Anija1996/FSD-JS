//getElementById
//------------------
// let heading = document.getElementById("title");
// let msg=document.getElementById("message");
// // console.log(heading);
// heading.textContent="Hello Javascript";
// message.style.color="red";

// let heading = document.getElementById("heading");
// heading.textContent="DOM is easy";

//getElementByClassName
//--------------------
// let fruits=document.getElementsByClassName("fruit");
// console.log(fruits[0]);
// fruits[1].textContent="Avocado";
// console.log(fruits[1]);

// let colors=document.getElementsByClassName("color");
// colors[1].textContent="Yellow";
// console.log(colors[1]);

//getElementByTagName
//-------------------
// let headings=document.getElementsByTagName("h1");
// console.log(headings);

// let fruits=document.getElementsByTagName("h1");
// fruits[1].textContent="Banana";
// console.log(fruits[1]);

//querySelector()
//---------------
// let title = document.querySelector("#title");
// let fruits=document.querySelector(".fruit");
// console.log(title); //also use title.outerHTML
// console.log(fruits);

// let course = document.querySelector(".course");
// course.textContent="Frontend";
// console.log(course);

//querySelectorAll()
//------------------
// let subjects=document.querySelectorAll(".subject");
// subjects[2].textContent="Computer";
// console.log(subjects[2]);

//textContent - gets or sets only the text inside an element. It prints the characters exactly

//innerHTML - gets or sets the HTML content inside an element. The browser creates an actual<h2> element.
// let box=document.getElementById("box");
// box.innerHTML="<h2>Hello</h2>";
// console.log(box);


//innerText - gets or sets the visible text.




// practice
//----------

let box=document.getElementById("box");
// box.innerHTML="<h2>Learning DOM</h2>";
box.textContent="<h2>Learning DOM</h2>"
console.log(box);






