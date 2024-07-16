document.querySelector("#loginBtn").addEventListener("click",function(){
    // console.log("clicked")
    const UserEmail=document.querySelector("#user_email");
    const Email=UserEmail.value
    UserEmail.value=""
    const UserPassword=document.querySelector("#user_password");

    const Password=UserPassword.value
    UserPassword.value=""
    
    // console.log(Email,Password)
    if(Email==='solaymanh33@gmail.com' && Password==='abir'){
        window.location.href='bank.html';
      }
      else{
        alert('you are fake person');
      }
})