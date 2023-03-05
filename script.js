function getHistory() {
    return document.querySelector('.history').innerText
}

function printHistory(num) {
    document.querySelector('.history').innerText = num
}

function getOutput() {
    return document.querySelector(".output-value").innerText
}

function getFormattedNumber(num) {
    if( num == "-"){
        return ""
    }
    let n = Number(num)
    return n.toLocaleString("en")
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""))
}

function getOutput() {
    return document.querySelector(".output-value").innerText
}

function printOutput(num) {
    if (num == "") {
        document.querySelector(".output-value").innerText = num
    } else {
        document.querySelector(".output-value").innerText = getFormattedNumber(num)
    }
}


let operator = document.getElementsByClassName("operator")
let numbers = document.getElementsByClassName("Number")

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", () => {
        if (operator[i].id == 'clear') {
            printHistory('')
            printOutput('')
        }
        else if (operator[i].id == 'backspace') {
            let output = reverseNumberFormat(getOutput()).toString()
            if (output) {//output has value
                output = output.substring(0, output.length - 1)
                printOutput(output)
            }
        }
        else {
            let output = getOutput()
            let history = getHistory()
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substring(0,history.length-1)
                    // history = history + operator[i].id
                    // printHistory(history)
                    // console.log(history)
                }
            }
            if (output != "" || history != "") {
                output = output == ""? output : reverseNumberFormat(output)
                history = history + output
                if (operator[i].id == '=') {
                    let result = eval(history)
                    printOutput(result)
                    printHistory("")
                }
                else{
                    history = history + operator[i].id
                    printHistory(history)
                    printOutput("")
                }
                // printOutput("")
                // printHistory(output)
                // console.log(outputHistory)
                // console.log(operator[i].id)
            }

        }

    })
}
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        let output = reverseNumberFormat(getOutput())
        if (output != NaN) {
            output = output + numbers[i].innerText
            printOutput(output)
        }
    })
}


