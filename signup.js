// document.addEventListener("DOMContentLoaded", function () {
  // var form = document.querySelector("form");

  // form.addEventListener("submit", function (event) {
   const nameField = document.getElementById('Username');
const myname= document.getElementById('name'); 
 const myEmail= document.getElementById('email');
const mypassword=document.getElementById('password');
const myPara=document.getElementById('hello');
myButton.addEventListener('click',(event)=> {
       myPara.innerHTML="";
       event.preventDefault();
        console.log("this is my name ",nameField.value);
       console.log(" mypassword",mypassword.value);
        console.log(" user-email",myEmail.value);
        console.log("myParagraph", myPara.value);
       if(nameField.value.length===0)
       {
          myPara.innerHTML="name can not be empty";    
       }
           if(myEmail.value.length===0)
       {
          myPara.innerHTML="Email can not be empty";    
       }

        localStorage.setItem('Username', nameField.value);
           localStorage.setItem("name", myName.value);
           localStorage.setItem("email", myEmail.value);
           
              localStorage.setItem("password", myPassword.value);     
});