const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,           // ReadStream
    output: process.stdout          // WriteStream
});

// rl.question("Enter a number: ", (input) => {
//     console.log(`You entered: ${input}`);
//     rl.close();
// });

// console.log("\n------------------ Last Line ------------------\n");

rl.question("Enter the first number: ", (input1) => {
    rl.question("Enter the second number: ", (input2) => {
        var sum = parseInt(input1) + parseInt(input2);
        console.log(`Result is: ${sum}`);
        rl.close();
    });
});