const titles = document.getElementsByClassName('title');
const content = document.querySelector('.inner');
let i;


for(i=0 ; i<titles.length ; i++){
    titles[i].addEventListener('click' , function(){
        this.classList.toggle("active");

    var inner = this.nextElementSibling;
    if (inner.style.display === "block") {
        inner.style.display = "none";
    } else {
        inner.style.display = "block";
    }
    });
}


(function(){
    document.addEventListener("keyup", function(event){
        if(event.target.matches(".count-chars")){
            const value = event.target.value;
            const valueLength = event.target.value.length;

            const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
            const remainingChars = maxChars - valueLength;
            if(valueLength > maxChars){
                event.target.value = value.substr(0, maxChars);
                return;
            }
            event.target.nextElementSibling.innerHTML = remainingChars + " characters remaining";
        }
    })
})();




const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const yearTime = new Date(`june 01 ${currentYear + 1} 00:00:00 `);

function updateCountdown(){
    const currentTime = new Date();
    const diff = yearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) %24;
    const m = Math.floor(diff / 1000 / 60) %60;
    const s = Math.floor(diff / 1000 ) %60;

    days.innerHTML = d +' D';
    hours.innerHTML = h < 10 ? '0' + h : h +' H';
    minutes.innerHTML = m < 10 ? '0' + m : m + ' M';
    seconds.innerHTML = s < 10 ? '0' + s : s + ' S';
}

setInterval(updateCountdown , 1000);