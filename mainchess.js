var fieldOne = document.getElementById('inputOne');
var fieldTwo = document.getElementById('inputTwo');
var button = document.getElementById('button');
var div = document.getElementById('div');

function keyUpFunc() {
    button.disabled = !fieldOne.value || !fieldTwo.value;
    button.disabled = !fieldOne.value.trim() || !fieldTwo.value.trim();
}

button.addEventListener('click', func, false);

function func() {
    if (isNaN(fieldOne.value)) {
        alert('Можно ввести только числа от 1 до 10')
    }
    if (isNaN(fieldTwo.value)) {
        alert('Можно ввести только числа от 1 до 10')
    }
    if (fieldOne.value < 1 || fieldOne.value > 10) {
        return alert('Можно ввести только числа от 1 до 10');
    }
    if (fieldTwo.value < 1 || fieldTwo.value > 10) {
        return alert('Можно ввести только числа от 1 до 10');
    }
    if (div.firstChild !== null) {
        div.firstChild.remove();
    }

    var newTable = document.createElement('table');
    newTable.className = 'table';

    for (var i = 0; i < fieldTwo.value; i++) {
        var newTr = document.createElement('tr');
        for (var j = 0; j < fieldOne.value; j++) {
            var newTd = document.createElement('td');
            if (i % 2 === j % 2) {
                newTd.className = 'white';
            } else {
                newTd.className = 'black';
            }
            newTr.appendChild(newTd);
        }
        newTable.appendChild(newTr);
    }
    div.appendChild(newTable);



    newTable.onclick = function (event) {
        var target = event.target;

        if (target.tagName !== 'TD') return;

        highlight(target);
    };

    function highlight() {
        for (var v = 0; v < fieldTwo.value * fieldOne.value; v++) {
            document.getElementsByTagName('td')[v].classList.toggle('black');
        }
    }
}



