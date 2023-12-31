var ageInput = document.getElementById('ageInput');
var outputBox = document.getElementById('outputBox');
var Btn=document.getElementById('btn');

Btn.addEventListener("click",function(){
display()

})

function display(){

var age=parseInt(ageInput.value)
if(18<age){
   outputBox.innerText="you are elligible becouse your age is : " +age;
}
else{
   outputBox.innerText="you are not Elligible for vote age :" +age;
}

}