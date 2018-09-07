const data = [1, 4, 5];

var factorial = memoize(function (num) {
    if (num < 2) { return 1 };
    return num * factorial(num - 1);
});

for (let i = 1; i <= 100; i++) {
    findAnswer(i);
}

function findAnswer(input) {
    let result = [];

    for (let i = 0; i <= input; i++) {
        const maxY = parseInt((input - i) / data[1]);
        for (let j = 0; j <= maxY; j++) {
            const maxZ = parseInt((input - (i + (j * data[1]))) / data[2]);
            for (let k = 0; k <= maxZ; k++) {
                const sum = (i * data[0]) + (j * data[1]) + (k * data[2]);
                if (sum === input) {
                    result.push([i, j, k]);
                }
            }
        }
    }

    answer(result, input);
}

function answer(result, input) {
    // console.log(result);

    let answer = 0;
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

function memoize(func) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        }
        else {
            var val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    };
}
