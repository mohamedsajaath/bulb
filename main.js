



 

let onBtn = document.querySelector('.on-button');
let offBtn = document.querySelector('.off-button');
let body = document.querySelector('.off-button');


let light = document.querySelector('.light');



let lightValue = light.getAttribute('data-light');
// lightValue = 1;
if(lightValue == 0){
    light.style.visibility="hidden";
}

onBtn.addEventListener('touchstart', () =>{


    light.style.visibility="visible";  

  
})
onBtn.addEventListener('touchmove', () =>{


       light.style.visibility="hidden";  

   })
console.log(lightValue)















// console.log("button:",body );
// Off();




















// onBtn.addEventListener('click', () =>{
//     on() 
// })

// function refreshPage() {
//     window.location.reload();
// }



// function on(){
//     document.querySelector('.light').style.visibility="visible";
   
// }
// function Off(){
//     document.querySelector('.light').style.visibility="hidden";
  
// }