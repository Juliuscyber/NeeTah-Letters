let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    
       let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

window.sr = ScrollReveal({
    reset: true
});

sr.reveal(`.sub-head`, {
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    interval: 200
})

sr.reveal(`.img-bk, .body, .reveal, .reveal2, .button, button, .handle, .high`, {
    origin: 'top',
    distance: '20px',
    duration: 2000,
    interval: 200
})

sr.reveal(`.book-tx, .event-text, .extra-text, .event-grid, .about-texts, .contact-texts, .best`, {
    origin: 'left',
    distance: '20px',
    duration: 2000,
    interval: 200
})
