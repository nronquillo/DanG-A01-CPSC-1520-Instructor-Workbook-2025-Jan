console.log("Loaded flow-control.js");
console.log('Loaded flow-control.js');

const rollDie = function() {
    let rnd = Math.random(); // between 0 and 1
    rnd = rnd * 6; // between 0 and 6
    rnd = Math.ceil(rnd);
    return rnd;
}

console.log("Testing my die roll", rollDie());
// console.log('Testing my die roll', rollDie());

const shootDie = function() {
    let firstDie = rollDie();
    let secondDie = rollDie();
    let total = firstDie + secondDie;

    let message = `you rolled a ${total}. `;
    if (total === 7 || total === 11) {
        message += `You Win!`;
    } else if (total === 1 || total === 2 || total === 12) {
        message += `Sorry you lost. 😔`;
    } else {
        //TODO: Playing the point
        

    let message = `You rolled a ${total}. `;
    if(total === 7 || total === 11) {
        message += 'You Win!!';
    } else if (total === 1 || total === 2 || total === 12) {
        message += 'Sorry - you lost. 😢';
    } else {
        // TODO: Playing the point
        let point = total;
        let count = 0;
        message += ` - attempting to match point \n\t`;
        do {
            message += ".";
            count++;
            firstDie = rollDie();
            secondDie = rollDie();
            total = firstDie + secondDie;
        } while (total !== point && total !== 7);
        message += `\nAfter ${count} more rolls`;
        if (total === 7) {
            message += ` - you lost 😔`;
        } else {
            message += ' - You won! 👌';
        }
    }

    console.log(message);
    }
}



shootDie();

const learnLoops = function() {
    console.log(`\nLearning Loops...`);
    while(rollDie() !== 6) {
        console.log(`Not Six`);
    }
    console.log("Finally a six");
    
    
    let message = "\nCount up to ten: ";
    let count = 1;
    while(count <= 10) {
        message += count + ', ';
        count++;
    }
    console.log(message);

    message = "\nLet's try it with a for statement:";
    console.log(message);
    message = "Count up to 10:\n";
    for (let counter = 1; counter <= 10; counter++) {
        message += counter + "|";
    }
    console.log(message);
}
shootDie();

learnLoops();


const buildFibonacciSequence = function(qunatity) {
    let sequence; 
    if (quantity <= 0 ) {
        sequence = 'Invalid quantity - must be greater than zero';
   } else if (quantity === 1) {
    sequence ='1';
   } else {
    let previous = 0;
    let current = 1;
    for (let count = 2; count <= quantity; count++) {
        console.log(`calc: next = ${previous} + ${current}`);
        let next = previous + current;
        sequence += `, ${next}`;
        previous = current;
        current = next;
        console.log(`previous: ${previous}, current: ${current}`);
    }
   }
}
console.log('\n\n');
console.log(buildFibonacciSequence(1));