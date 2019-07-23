import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";
import { StringCollection } from "./StringCollectioin";

const numbersCollection = new NumberCollection([3, 1, 12, -5, -1, 6]);
const stringCollection = new StringCollection("Halo");

const numberSorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(stringCollection);

numberSorter.sort();
stringSorter.sort();

console.log(numbersCollection.data);
console.log(stringCollection.data);
