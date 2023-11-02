const fun1 = (arg: number, cb: (val: number) => void): void => {
  setTimeout(() => {
    cb(arg + 1);
  }, 500);
}

const fun2 = (arg: number, cb: (val: number) => void): void => {
  setTimeout(() => {
    cb(arg * 3);
  }, 1000);
};

const fun3 = (arg: number, cb: (val: number) => void): void => {
  setTimeout(() => {
    cb(arg - 1);
  }, 1500);
};

type TAsyncFunction = (arg: number, cb: (val: number) => void) => void;

function obliczeniaSekwencyjne(funTab: TAsyncFunction[], cb: (val: number) => void): void {
let i: number = 0;
let wynik: number = 0;
const nextFunction = (val: number): void => {
  if(i < funTab.length) {
    funTab[i](val, nextFunction);
    i++;
  } else {
    wynik = val;
    cb(wynik);
  }
}
nextFunction(0);
}

obliczeniaSekwencyjne([fun1, fun2, fun3], (wynik: number) => {
console.log(`Ostateczny wynik: ${wynik}`);
});