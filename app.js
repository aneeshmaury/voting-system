var ageInput = document.getElementById('ageInput');
var outputBox = document.getElementById('outputBox');
var Loader = document.querySelector('.loader');
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  
   Loader.style.display='block';
  

   setTimeout(function(){
      display();
   }, 3000);

    })



function display() {
    var age = parseInt(ageInput.value);

    if (age >= 18) {
        outputBox.innerText = "YOU ARE ELIGIBLE :)";
    } else {
        outputBox.innerText = "YOU ARE NOT ELIGIBLE :(";
    }
}
