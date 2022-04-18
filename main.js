



 

let onBtn = document.querySelector('.on-button');
let offBtn = document.querySelector('.off-button');
let body = document.querySelector('.off-div');
console.log("button:",body );
// Off();



onBtn.addEventListener('click', () =>{
    on() 
})
body.addEventListener('click', () =>{
    refreshPage()
})
function refreshPage() {
    window.location.reload();
}



function on(){
    document.querySelector('.light').style.visibility="visible";
    onBtn.style.boxShadow ="0px 0px 20px white";
}
function Off(){
    document.querySelector('.light').style.visibility="hidden";
  
}