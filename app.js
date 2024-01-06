var ageInput = document.getElementById('ageInput');
var outputBox = document.getElementById('outputBox');
var Btn=document.getElementById('btn');
var hideWala=document.getElementById('hidewala');

Btn.addEventListener("click",function(){
   setTimeout(function(){
      document.getElementById('hidewala').style.display = 'none';
      display()
   },5000)

})



function display(){

var age=parseInt(ageInput.value)

if(18<age){
   outputBox.innerText=" YOU ARE ELIGIBLE :) ";
}
else{
   outputBox.innerText="YOU ARE NOT ELIGIBLE :(";
}

}

