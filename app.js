const key = document.getElementById("event-key")
const code = document.getElementById("event-code")
const which = document.getElementById("event-which")



document.addEventListener('keydown',(event) =>{
    code.textContent = "";
    code.textContent +=`${event.code}`
    key.textContent = "";
    key.textContent +=`${event.key}`
    which.textContent = "";
    which.textContent +=`${event.which}`
});
