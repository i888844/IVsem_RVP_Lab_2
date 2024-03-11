let X = [Number()]
let n = Number()

function calculationX(callback) {
    let i = 0
    let j = 0
    let toTable = String(`<table border="1px"><thead><tr><td>Элемент массива</td><td>Отрицательное</td></tr></thead><tbody id="numbers"></tbody></table>`)
    document.getElementById(`table`).innerHTML = toTable

    function updateTable() {
        toTable = `<tr><td>X[${j}] = ${X[i]}</td>`

        if (X[i] < 0) {
            toTable += `<td>Да</td></tr>`
            document.getElementById(`numbers`).innerHTML += toTable
            X.splice(i, 1)
            n--
        } else {
            toTable += `<td>Нет</td></tr>`
            document.getElementById(`numbers`).innerHTML += toTable
            i++
        }

        j++

        if (i !== n) {
            setTimeout(function () {
                updateTable()
            }, 1000)
        } else {
            callback()
        }
    }

    updateTable();
}

function sendN() {
    document.getElementById(`beforeCalculationX`).innerHTML = ``
    document.getElementById(`afterCalculationX`).innerHTML = ``
    document.getElementById(`table`).innerHTML = ``

    let inputN = document.getElementById(`n`).value
    let parsedN = parseInt(inputN, 10)

    if (Number.isSafeInteger(parsedN) && parsedN >= 1) {
        n = parsedN;

        for (let i = 0; i < n; i++) {
            X[i] = Number(Math.floor(Math.random() * 200) - 100)
        }

        document.getElementById(`beforeCalculationX`).innerHTML = `X = [ ${X} ]`

        calculationX(() => { document.getElementById(`afterCalculationX`).innerHTML = `X = [ ${X} ]` })
    } else {
        alert(`${inputN}: Недопустимое значение количества элементов массива X`)
    }
}
