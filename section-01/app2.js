// Write a function to find the average value in an
// array of numbers
// avg([0,50]) //25
// avg([75, 76, 80, 95, 100]) //85.2

function avg(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}