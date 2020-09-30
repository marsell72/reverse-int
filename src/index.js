module.exports = function reverse (n) {
    let split = n.toString().split('');
    if(split[0] === '-') {
        return +split.reverse().join('').substr(0,split.length - 1);
    }
    return +n.toString().split('').reverse().join('');
}
