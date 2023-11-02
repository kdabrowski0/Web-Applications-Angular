var arr = [{ x: 4, y: 2 }, { x: 1, y: 8 }, { x: 4, y: 2 }];
function srednia(tab, key) {
    return tab.reduce(function (result, current) { return result + current[key]; }, 0) / tab.length;
}
console.log(srednia(arr, "x"));
