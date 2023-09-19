document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector(".composer button").addEventListener('click', () =>{
const song = document.querySelector("#input").value;

    if (song){
        let songArray = song.split('')
        playComposition(songArray)
    }
})

function playSound(sound){
    let audio = document.getElementById(`s_${sound}`)
    let active = document.querySelector(`div[data-key="${sound}"]`)

    if (audio) {  
        audio.currentTime = 0
        audio.play();   
    }

    if (active) {
        active.classList.add('active')

        setTimeout(()=>{
            active.classList.remove('active')}, 200);        
    }
}

function playComposition(songArray){
    let wait = 0;

    songArray.forEach(song => {
        setTimeout(()=>{ playSound(`key${song}`)}, wait)       
        wait += 250;
    });
}