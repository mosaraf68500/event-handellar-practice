document.getElementById("update-title")
.addEventListener("click", function () {
  // console.log('updated')
  document.getElementById("title-text").innerText = "update title text";
});

// ---------------------------------------------------
document.getElementById('login')
.addEventListener('click',function(){
    const loginUsers=document.getElementById('users');
    loginUsers.innerText='users login'

})

// -----------------------------------------

document.getElementById('add-btn')
.addEventListener('click',function(){
    // console.log('object')
    const inputName=document.getElementById('your-name').value;
    // console.log(inputName)
    const addText=document.getElementById('name-text');
    addText.innerText=inputName;
})