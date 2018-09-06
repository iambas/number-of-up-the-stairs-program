const data = [1, 4, 5];

for (let i = 1; i <= 100; i++) {
    findAnswer(i);
}

function findAnswer(input) {
    const mx = input;
    const my = parseInt(input / 4);
    const mz = parseInt(input / 5);
    const max = [mx, my, mz];
    let result = [];

    for (let i = 0; i <= max[0]; i++) {
        for (let j = 0; j <= max[1]; j++) {
            for (let k = 0; k <= max[2]; k++) {
                const sum = (i * data[0]) + (j * data[1]) + (k * data[2]);
                if (sum === input) {
                    result.push([i, j, k]);
                }
            }
        }
    }

    // console.log(result);

    var answer = 0;
    result.forEach(v => {
        const [x, y, z] = v;
        if (x === input || y === input || z === input) answer++;
        else {
            const sum = x + y + z;
            answer += factorial(sum) / (factorial(x) * factorial(y) * factorial(z));
        }
    });

    console.log('Input :', input, '=> Answer :', answer);
}

function factorial(n) {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}
