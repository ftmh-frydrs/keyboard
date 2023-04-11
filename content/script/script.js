const titleEl=document.querySelector('.title')

document.addEventListener('keyup',function(event){

      keybored(event)

       let eventKey=event.key.toUpperCase();
       let keyEl=document.getElementById(eventKey);
      

       keyEl.classList.add('hit');
       keyEl.addEventListener('animationend',function(){
       keyEl.classList.remove('hit')
       })

    //    console.log(keyEl);
})

function keybored(event){
    // console.log(event);
    if(event.code==='Backspace'){
        titleEl.innerHTML=titleEl.innerHTML.slice(0,-1)
        return 
    }
    titleEl.innerHTML += event.key;
}

