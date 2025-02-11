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
        // TODO: Playing the point...
    }

    console.log(message);
}

// shootDie();

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

learnLoops();
