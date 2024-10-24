// Q1: sum all elements in ary；ary: number array
function sum(ary) {
    // solution 0: .reduce()
    return ary.reduce((total, num) => total + num, 0);
}

function sum1(ary) {
    // solution 1: recursion
    if (ary.length > 0) return ary[0] + sum1(ary.slice(1));
    else return 0;
}

function sum2(ary) {
    // solution 2: .forEach()
    let total = 0;
    ary.forEach(function (num) {
        total += num;
    });
    return total;
}

// Q2: 1 + 2 + ... + n
function sumToN(n) {
    // solution 0: 梯形公式
    return ((n + 1) * n) / 2;
}

function sumToN1(n) {
    // solution 1: recursion
    if (n > 0) return n + sumToN1(n - 1);
    else return 0;
}

function sumToN2(n) {
    // solution 2: use .keys() of array with (n+1) elements to get array [0, 1, 2, ..., n]
    let arr = new Array(n + 1);
    arr = Array.from(arr.keys());
    return sum(arr);
}
