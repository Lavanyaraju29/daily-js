const fibonacci = (n) => {
    const series = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        series.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    return series;
};

const num = 10;
console.log(fibonacci(num));