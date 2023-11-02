var fun1 = function (arg, cb) {
    setTimeout(function () {
        cb(arg + 1);
    }, 500);
};
var fun2 = function (arg, cb) {
    setTimeout(function () {
        cb(arg * 3);
    }, 1000);
};
var fun3 = function (arg, cb) {
    setTimeout(function () {
        cb(arg - 1);
    }, 1500);
};
function obliczeniaSekwencyjne(funTab, cb) {
    var i = 0;
    var wynik = 0;
    var nextFunction = function (val) {
        if (i < funTab.length) {
            funTab[i](val, nextFunction);
            i++;
        }
        else {
            wynik = val;
            cb(wynik);
        }
    };
    nextFunction(0);
}
obliczeniaSekwencyjne([fun1, fun2, fun3], function (wynik) {
    console.log("Ostateczny wynik: ".concat(wynik));
});
