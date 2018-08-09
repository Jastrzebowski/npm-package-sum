function sum(a, b) {
    return a + b;
}

module.exports = {
    sum: function() {
        return Array.prototype.slice.call(arguments).reduce(sum, 0);
    }
};