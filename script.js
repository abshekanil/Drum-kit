window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const newKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    newKey.classList.add('playing');
    
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {

key.addEventListener("click", function(){
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const clicked = this;

    if(!audio)
    {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    clicked.classList.add('playing');

    setTimeout(() =>{
        clicked.classList.remove('playing');
    }, 1000)

});

});

function removeTransition(e){
if(e.propertyName !== 'transform')
{
    return;
}
this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));



