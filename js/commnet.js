document.getElementById('post-btn')
.addEventListener('click', function(){
    // console.log('added post')
    const yourPost=document.getElementById('your-post').value;
    // console.log(yourPost)

    const postP=document.createElement('p');
    postP.classList.add('comment')
    postP.innerText=yourPost;
    const parentDiv=document.getElementById('post-parent');
    // console.log(parentDiv)
    parentDiv.appendChild(postP);

    document.getElementById('your-post').value=""



})