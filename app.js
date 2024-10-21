var chacha = document.getElementById("head")
var H1 = document.getElementById("result")

var userValue = +prompt("Agar app ko apna number dene hai to du warna me default 100 se start hon ga")
var defaultValue = 100

if (userValue == "") {

    var result = setInterval(function () {
        defaultValue--

        chacha.innerHTML = defaultValue

        if (defaultValue == 0) {

            H1.innerText = "Thanks your Time has finished"
            console.log(H1.innerHTML)

            clearInterval(result)
        }

    }, 1000)
}

else {

    var result = setInterval(function () {
        userValue--
        chacha.innerHTML = userValue
        console.log(userValue)
        if (userValue == 0) {
            clearInterval(result)
            H1.innerText = "Thanks your Time has finished"
        }
    }, 1000)

}

function off () {
    clearInterval(result)
}

