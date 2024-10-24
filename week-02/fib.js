// fibonacci, f_n = f_{n-2} + f_{n-1}

function fib(n) {
    // solution 0: recursion
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}

function fib1(n) {
    // solution 1: iteration
    if (n == 0 || n == 1) {
        return n;
    } else {
        let fnMinus2 = 0;
        let fnMinus1 = 1;
        let fn;

        for (let i = 2; i <= n; i++) {
            fn = fnMinus2 + fnMinus1;
            fnMinus2 = fnMinus1;
            fnMinus1 = fn;
        }

        return fn;
    }
}

let fibCache = [0, 1]; // f_0, f_1

function fib2(n) {
    // solution 2: dynamic programming
    if (n < fibCache.length) {
        // in cache
        return fibCache[n];
    } else {
        // not in cache
        let fn = fib2(n - 2) + fib2(n - 1);
        fibCache.push(fn);
        return fn;
    }
}

// Test
function testFib(fib) {
    return fib(50);
}

// console.log(testFib(fib));  // 3 min 20 sec
// console.log(testFib(fib1)); // 0.03 sec
// console.log(testFib(fib2)); // 0.03 sec
