function fib(n) {
    // fibonacci: f_n = f_{n-2} + f_{n-1}
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fib(n - 2) + fib(n - 1);
}
