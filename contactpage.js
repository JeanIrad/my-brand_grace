
const nameField = document.getElementById('name');
const myButton= document.getElementById('button'); 
 const myEmail= document.getElementById('email');
const myMessage=document.getElementById('message');
const myPara=document.getElementById('hello');
myButton.addEventListener('click',(event)=> {
       myPara.innerHTML="";
       event.preventDefault();
        console.log("this is my name ",nameField.value);
       console.log(" mymessage",myMessage.value);
        console.log(" user-email",myEmail.value);
        console.log("myParagraph", myPara.value);
       if(nameField.value.length===0)
       {
          myPara.innerHTML="name can not be empty";    
       }

        localStorage.setItem('name', nameField.value);
           localStorage.setItem("email", myEmail.value);
              localStorage.setItem("message", myMessage.value);     
});