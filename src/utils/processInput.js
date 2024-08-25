module.exports = function processInput(data) {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(Number(item));
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowercase === '' || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    return { numbers, alphabets, highestLowercase };
};
