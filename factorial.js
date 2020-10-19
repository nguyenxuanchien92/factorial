function factorial(num) {
    let isNum = checkNumber(num);
    let total = 1;
    if (!isNum) {
        console.log("This does not integer");
        return;
    }

    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    console.log(total);
}


function checkNumber(num) {
    if (!Number.isInteger(num))
        return false;
    return true;
}

factorial(5);