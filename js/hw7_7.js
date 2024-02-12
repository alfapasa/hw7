// Вивести суму лише парних чисел в діапазоні від 30 до 80.


let sum = 0;
for (let a = 30; a <= 80; a++) {
    if (a % 2 != 0) {
        continue;
    }
    sum = sum + a;
}

document.write(sum);