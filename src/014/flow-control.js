console.log('Loaded flow-control.js');

const rollDie = function() {
    let rnd = Math.random(); // between 0 and 1
    rnd = rnd * 6; // between 0 and 6
    rnd = Math.ceil(rnd);
    return rnd;
}

// console.log('Testing my die roll', rollDie());

const shootDie = function() {
    let firstDie = rollDie();
    let secondDie = rollDie();
    let total = firstDie + secondDie;
    let message = `You rolled a ${total}. `;
    if(total === 7 || total === 11) {
        message += 'You Win!!';
    } else if (total === 1 || total === 2 || total === 12) {
        message += 'Sorry - you lost. 😢';
    } else {
        // Playing the point
        let point = total;
        let count = 0;
        message += ' - attemping to match point\n\t';
        // Do-While statement
        do {
            // repeating logic
            message += '.';
            count++;
            firstDie = rollDie();
            secondDie = rollDie();
            total = firstDie + secondDie;
        } while(total !== point && total !== 7);

        // Report on the results
        message += `\nAfter ${count} more rolls`;
        if(total === 7) {
            message += ' - you lost 😭';
        } else {
            message += ' you won! 🎉';
        }
    }

    console.log(message);
}

shootDie();

// ===============
// Let's learn about loops....
const learnLoops = function() {
    console.log('\nLearning loops...');
    // While statement
    while(rollDie() !== 6) {
        console.log('Not a 6...');
    }
    console.log('Finally! A 6');

    // Let's just do a regular loop...
    let message = "\nCount up to ten:\n";
    let count = 1;
    while(count <= 10) {
        message += count + ', ';
        count++;
    }
    console.log(message);

    message = "\nLet's try it with a for statement:";
    console.log(message);
    message = 'Count up to 10:\n';
    for(let counter = 1; counter <= 10; counter++) {
        message += counter + ' | ';
    }
    console.log(message);
}

// learnLoops();

// Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13, ....
//               \/ \ /
//                |  |- Current
//                |- Previous
//                     , Next value

/**
 * Generates the string of Fibonacci numbers up to a certain quantity
 * @param {number} quantity The quantity of numbers in the sequence
 * @returns {string} - A string with the Fibonacci sequence
 */
const buildFibonacciSequence = function(quantity) {
    let sequence;
    if(quantity <= 0) {
        sequence = 'Invalid quantity - must be greater than zero';
    } else if(quantity === 1) {
        sequence = '1';
    } else {
        // Use a loop to build the sequence
        // setup of variables
        let previous = 0;
        let current = 1;
        sequence = `${current}`;
        // begin the loop
        for(let count = 2; count <= quantity; count++) {
            // console.log(`calc: next = ${previous} + ${current}`);
            let next = previous + current;
            sequence += `, ${next}`;
            // update values for the next time through the loop
            previous = current;
            current = next;
            // console.log(`previous: ${previous}, current: ${current}`);
        }
    }

    return sequence;
}

console.log('\n\n');
// console.log(buildFibonacciSequence(1));
// console.log(buildFibonacciSequence(7));

// Factorial   5!
//             5 x 4 x 3 x 2 x 1 => 120
