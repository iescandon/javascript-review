var imageEl = document.getElementById("image");
var nameEl = document.getElementById("name");
var ageEl = document.getElementById("age");
var emailEl = document.getElementById("email");
var phoneEl = document.getElementById("phone");
var nextBtn = document.getElementById("next");
var cardEl = document.getElementById("card");
var i = 0;

function createCard() {
    imageEl.setAttribute("src", employees[i].picture)
    nameEl.textContent = employees[i].name.first + " " + employees[i].name.last;
    ageEl.textContent = employees[i].age;
    emailEl.textContent = employees[i].email;
    phoneEl.textContent = employees[i].phone;
    if (employees[i].gender === "female") {
        // cardEl.setAttribute("style", "width: 18rem; background-color: pink;")
        // cardEl.setAttribute("class", "card girl") //replaces the entire class with what is in the second parameter
        cardEl.classList.remove("boy") //need to remove before you add the new one
        cardEl.classList.add("girl")
    } else {
        // cardEl.setAttribute("style", "width: 18rem; background-color: lightblue;")
        // cardEl.setAttribute("class", "card boy")
        cardEl.classList.remove("girl")
        cardEl.classList.add("boy")
    }
}

function goNextCard() {
    if(i < employees.length - 1){
        i++;
        createCard();
    } else {
        i = 0;
        createCard();
    }
}

createCard();
nextBtn.addEventListener("click", goNextCard);