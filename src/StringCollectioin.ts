import { Sortable } from "./Sorter";

export class StringCollection implements Sortable {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const letters = this.data.split("");
    const tmp = letters[leftIndex];
    letters[leftIndex] = letters[rightIndex];
    letters[rightIndex] = tmp;
    this.data = letters.join("");
  }
}
