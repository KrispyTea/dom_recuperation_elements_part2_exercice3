let exo1 = document.querySelector("div#content")
console.log(exo1);

let exo2 = document.querySelectorAll("div#content")
console.log(exo2);

let exo3 = document.querySelector("li.important")
console.log(exo3);

let exo4 = document.querySelectorAll("li.important")
console.log(exo4);

let exo5 = document.querySelectorAll('li');
exo5.forEach(element => {
    console.log(element.innerText.slice(0, -1) + element.innerText.substr(-1).toUpperCase());
});

let exo6 = document.getElementsByClassName("grandParagraphe")
console.log(exo6);
let exo6bis = document.getElementById("content").children[3]
console.log(exo6bis);