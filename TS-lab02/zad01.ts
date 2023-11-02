const arr: {x: number, y: number}[] = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

function srednia(tab: { [key: string]: number }[], key: string ): number {
   return tab.reduce((result: number, current: { [key: string]: number } ) => result + current[key], 0) / tab.length;
}

console.log(srednia(arr, "x"));