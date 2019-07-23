import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollectioin";

const numbersCollection = new NumberCollection([3, 1, 12, -5, -1, 6]);
const stringCollection = new StringCollection("Halo");
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(12);
linkedList.add(-3);
linkedList.add(0);

numbersCollection.sort();
stringCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(stringCollection.data);
linkedList.print;
