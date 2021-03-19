//variables that bring in html elements so we can change them through JS
var imageEl = document.getElementById("image");
var nameEl = document.getElementById("name");
var ageEl = document.getElementById("age");
var emailEl = document.getElementById("email");
var phoneEl = document.getElementById("phone");
var nextBtn = document.getElementById("next");
var cardEl = document.getElementById("card");
var i = 0; //keeps track of the current index in the array that we are on, we set it to start at 0 (first item in the array)

//fills in card information
function createCard() {
    imageEl.setAttribute("src", employees[i].picture)
    nameEl.textContent = employees[i].name.first + " " + employees[i].name.last;
    ageEl.textContent = employees[i].age;
    emailEl.textContent = employees[i].email;
    phoneEl.textContent = employees[i].phone;
    if (employees[i].gender === "female") {
        // cardEl.setAttribute("style", "width: 18rem; background-color: pink;") //adds style attribute of width and background color
        // cardEl.setAttribute("class", "card girl") //replaces the entire class with what is in the second parameter, any class that was listed before will be erased unless added here
        cardEl.classList.remove("boy") //removes the boy class (defined in CSS), will only remove specific class listed
        cardEl.classList.add("girl") //adds the girl class (defined in CSS), will not replace all classes currently in the class list
    } else {
        // cardEl.setAttribute("style", "width: 18rem; background-color: lightblue;")
        // cardEl.setAttribute("class", "card boy")
        cardEl.classList.remove("girl")
        cardEl.classList.add("boy")
    }
}

// goes to the next card
function goNextCard() {
    if(i < employees.length - 1){ //if the index exists in the array...
        i++; //add one to the index variable
        createCard(); //relaunch the createCard function so that it replaces the card info with the new index's data
    } else {
        i = 0; //reassign index variable to 0
        createCard(); //relaunch the createCard function so that it replaces the card info with the first index's data
    }
}


createCard(); //gets launched only once, as soon as page is loaded
nextBtn.addEventListener("click", goNextCard); //event listener for nextbutton, executes the function everytime the button is clicked