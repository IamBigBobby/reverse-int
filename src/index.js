module.exports = function reverse (n) {
    let result = '';
    const number = n.toString().split('');
    let reversNumber = number.reverse();
    if (reversNumber[reversNumber.length - 1] ===  '-'){
        reversNumber.pop()
    }
    const joinRevers = reversNumber.join('');
    return result = Number(joinRevers);
}

console.log(module.exports(-12345));
