// You should implement your task here.

module.exports = function towelSort(arr) {
    if (!arr) return [];
    let result = arr.map((item, index) => (index % 2 === 0) ? item : item.reverse());
    return result.flat();
}