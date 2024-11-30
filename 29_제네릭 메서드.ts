class MyUtility {
    // T는 임의의 데이터 타입
    printArray<T>(arr: T[]): void {
        for (const val of arr) {
            console.log(val);
        }
    }
}

const nums = [1, 2, 3, 4, 5];
const names = ["Steve", "Bill", "Mark"];
const util = new MyUtility();
util.printArray<number>(nums);
util.printArray<string>(names);   