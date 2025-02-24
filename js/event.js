function makeYellow(){
    document.body.style.backgroundColor="yellow";
}

function makeRed(){
    document.body.style.backgroundColor='red';
}




document.getElementById('blue').onclick=function blue(){
    document.body.style.backgroundColor='blue';
}


document.getElementById('green').addEventListener('mouseout', function green(){
    document.body.style.backgroundColor='green';
})