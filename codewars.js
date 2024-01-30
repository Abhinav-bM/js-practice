
function diamond(n){
    if (n <= 0 || n % 2 === 0) {
        return null;
    }

    let diamondString = '';

    for (let i = 1; i <= n; i += 2) {
        for (let j = 0; j < (n - i) / 2; j++) {
            diamondString += ' ';
        }

        for (let k = 0; k < i; k++) {
            diamondString += '*';
        }

   
        diamondString += '\n';
    }

   
    for (let i = n - 2; i >= 1; i -= 2) {
       
        for (let j = 0; j < (n - i) / 2; j++) {
            diamondString += ' ';
        }

       
        for (let k = 0; k < i; k++) {
            diamondString += '*';
        }

       
        diamondString += '\n';
    }

    return diamondString;
}

console.log(diamond(9));