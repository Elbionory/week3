const keys=document.querySelectorAll(".key");
window.addEventListener('keydown', function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!key) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("play");
})
keys.forEach((key) =>{
    key.addEventListener('transitionend',(e)=>{
      key.classList.remove("play")
    })
}) 