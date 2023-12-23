/* Lógicas da Calculadora */

function getValue() {
    $('.value').each(function () {
        $(this).on('click', function () {
            if (localStorage.getItem('realized') === 'true') {
                $('#visor').val(0)
            }
            let actualValue = $('#visor').val()
            let value = $(this).attr('data-id')
            if (localStorage.getItem('operator') !== null) {
                if (actualValue === '0') {
                    $('#visor').val(value)
                    localStorage.setItem("secondNumber", actualValue + value)
                } else {
                    actualValue = $('#visor').val()
                    $('#visor').val(actualValue + value)
                    localStorage.setItem("secondNumber", actualValue + value)
                }
            } else {    
                if (actualValue === '0') {
                    $('#visor').val(value)
                    localStorage.setItem("firstNumber", actualValue + value)
                } else {
                    actualValue = $('#visor').val()
                    $('#visor').val(actualValue + value)
                    localStorage.setItem("firstNumber", actualValue + value)
                }                            
            }
        })
    })
}

function getOperation() {
    $('.oper').each(function () {
        $(this).on('click', function () {
            $('#visor').val('0')
            let operator = $(this).attr('data-id')
            if (operator === "plus") {
                localStorage.setItem("operator", "plus")
            }
            if (operator === "minus") {
                localStorage.setItem("operator", "minus")
            }
            if (operator === "division") {
                localStorage.setItem("operator", "division")
            }
            if (operator === "multiply") {
                localStorage.setItem("operator", "multiply")
            }
        })
    })
}

function calculateParts() {
    $('.equal').on('click', function () {
        let firstNumber = parseFloat(localStorage.getItem('firstNumber'))
        let secondNumber = parseFloat(localStorage.getItem('secondNumber'))
        let operator = localStorage.getItem('operator')
        if (operator === "plus") {
            $('#visor').val(firstNumber + secondNumber)
            clearCookies()
        }
        if (operator === "minus") {
            $('#visor').val(firstNumber - secondNumber)
            clearCookies()
        }
        if (operator === "division") {
            $('#visor').val(firstNumber / secondNumber)
            clearCookies()
        }
        if (operator === "multiply") {
            $('#visor').val(firstNumber * secondNumber)
            clearCookies()
        }
        localStorage.setItem('realized', 'true')
    })
}

function clearButton () {
    $('.clear').on('click', function () {
        $('#operations').val('0')
        $('#visor').val(0)
        clearCookies()
    })
}

function clearCookies() {
    localStorage.removeItem('firstNumber')
    localStorage.removeItem('secondNumber')
    localStorage.removeItem('operator')
    localStorage.removeItem('realized')
}

getValue()
getOperation()
calculateParts()
clearButton()
clearCookies()