let h1 = document.getElementById("head")
let h2 = document.getElementById("result")
let div = document.getElementById("div")
let check = document.getElementById("helo")

let result;



let sec = 0
let min = 0;
let hr = 0;

result = setInterval(() => {

    let currentTime = new Date()

    let date = currentTime.getDate()
    let month = 10
    let year = currentTime.getFullYear()

    let currentHr = currentTime.getHours()
    let currentMin = currentTime.getMinutes()
    let currentSec = currentTime.getSeconds()

    hr = currentHr
    min = currentMin
    sec = currentSec

    if (hr > 12) {
       
        hr = hr - 12
    }

    let current01 = sec < 10 ? `0${sec}` : sec
    let minWork = min < 10 ? "0" + min : min
    let hrWork = hr < 10 ? "0" + hr : hr

    h1.innerHTML = hrWork + " : " + minWork + " : " + current01
    h2.innerHTML = date + " / " + month + " / " + year

    if (hr == 0 && min == 0 && sec == 0) {
        check.innerHTML = `
           
            <div class='imgg'>
                <img src="https://www.funimada.com/assets/images/cards/big/hammad-3.gif" width="700px"/>
            </div>

            
        `;
   
    }
    
}, 1000)





