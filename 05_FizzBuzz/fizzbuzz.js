// acskii :p

function fizzbuzz(sample) {
    // sample is an array of numbers
    if (Array.isArray(sample)) {
        for (const i of sample) {
            if (Number.isInteger(i)) {
                if (i % 15 == 0) {
                    console.log(`${i} - FizzBuzz`);
                } else if (i % 3 == 0) {
                    console.log(`${i} - Fizz`);
                } else if (i % 5 == 0) {
                    console.log(`${i} - Buzz`);
                } else {
                    console.log(`${i}`); 
                }
            } else {
                console.log("null\n");
            }
        }
    } else {
        console.log("Only an array is accepted as an argument");
        return null;
    }
}