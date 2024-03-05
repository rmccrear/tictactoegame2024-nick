let b = [
    "_", "_", "_",
    "_", "_", "_",
    "_", "_", "_",
];
console.log(b);

A0.ondblclick = function () {
    A0.textContent = "O";
    b[0] = "O";
    console.log("**** Click A0 ****");
    console.log(b);
}
A0.onclick = function () {
    A0.textContent = "X";
    b[0] = "X"
    console.log("**** Click A0 ****");
    console.log(b);
}

A1.ondblclick = function () {
    A1.textContent = "O";
    b[1] = "O";
    console.log("**** Click A1 ****");
    console.log(b);
}

A1.onclick = function () {
    A1.textContent = "X";
    b[1] = "X";
    console.log("**** Click A1 ****");
    console.log(b);
}

A2.ondblclick = function () {
    A2.textContent = "O";
    b[2] = "O";
    console.log("**** Click A2 ****");
    console.log(b);
}

A2.onclick = function () {
    A3.textContent = "X";
    b[2] = "X";
    console.log("**** Click A2 ****");
    console.log(b);
}

B3.ondblclick = function () {
    B3.textContent = "O";
    b[3] = "O"
    console.log("**** Click B3 ****");
    console.log(b);
}
B3.onclick = function () {
    B1.textContent = "X";
    b[3] = "X";
    console.log("****Click B3 ****")
    console.log(b);
}
B4.ondblclick = function () {
    B4.textContent = "O";
    b[4] = "O";
    console.log("****Click B4 ****")
    console.log(b);
}
B4.onclick = function () {
    B4.textContent = "X";
    b[4] = "X";
    console.log("****Click B4 ****")
    console.log(b);

}
B5.ondblclick = function () {
    B5.textContent = "O";
    b[5] = "O";
    console.log("****Click B5 ****")
    console.log(b);
}
B5.onclick = function () {
    B5.textContent = "X";
    b[5] = "X";
    console.log("****Click B5 ****")
    console.log(b);
}
C6.ondblclick = function () {
    C6.textContent = "O";
    b[6] = "O";
    console.log("****Click C6 ****")
    console.log(b);
}
C6.onclick = function () {
    C6.textContent = "X";
    b[6] = "X";
    console.log("****Click C6 ****")
    console.log(b);
}
C7.ondblclick = function () {
    C7.textContent = "O";
    b[7] = "O";
    console.log("****Click C7 ****")
    console.log(b);
}
C7.onclick = function () {
    C7.textContent = "X";
    b[7] = "X";
    console.log("****Click C7 ****")
    console.log(b);
}
C8.ondblclick = function () {
    C8.textContent = "O";
    b[8] = "O";
    console.log("****Click C8 ****")
    console.log(b);
}
C8.onclick = function () {
    C8.textContent = "X";
    b[8] = "X";
    console.log("****Click C8 ****")
    console.log(b);
}

button.onclick = function () {
    if (b[0] === 'X' && b[1] === 'X' && b[2] === 'X') {
        alert('X wins');
    } else if (b[0] !== 'X' && b[1] !== 'X' && b[2] !== 'X') {
        alert('O wins');
    } else if (b[3] === 'X' && b[4] === 'X' && b[5] === 'X') {
        alert('X wins');
    } else if (b[3] !== 'X' && b[4] !== 'X' && b[5] !== 'X') {
        alert('O wins');
    } else if (b[6] === 'X' && b[7] === 'X' && b[8] === 'X') {
        alert('X wins');
    } else if (b[6] !== 'X' && b[7] !== 'X' && b[8] !== 'X') {
        alert('O wins');
    } else if (b[0] === 'X' && b[3] === 'X' && b[6] === 'X') {
        alert('X wins');
    } else if (b[0] !== 'X' && b[3] !== 'X' && b[6] !== 'X') {
        alert('O wins');
    } else if (b[1] === 'X' && b[4] === 'X' && b[7] === 'X') {
        alert('X wins');
    } else if (b[1] !== 'X' && b[4] !== 'X' && b[7] !== 'X') {
        alert('O wins');
    } else if (b[2] === 'X' && b[5] === 'X' && b[8] === 'X') {
        alert('X wins');
    } else if (b[2] !== 'X' && b[5] !== 'X' && b[8] !== 'X') {
        alert('O wins');
    } else if (b[0] === 'X' && b[4] === 'X' && b[8] === 'X') {
        alert('X wins');
    } else if (b[0] !== 'X' && b[4] !== 'X' && b[8] !== 'X') {
        alert('O wins');
    } else if (b[2] === 'X' && b[4] === 'X' && b[6] === 'X') {
        alert('X wins');
    } else if (b[2] !== 'X' && b[4] !== 'X' && b[6] !== 'X') {
        alert('O wins');
    } else {
        alert("It's a draw, lets play again");
    }
};

