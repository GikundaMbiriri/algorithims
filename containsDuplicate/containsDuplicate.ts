function containsDuplicate(nums: number[]): boolean {
  let numbersObject: any = {};
  for (let i of nums) {
    if (numbersObject[i]) {
      return true;
    } else {
      numbersObject[i] = 1;
    }
  }

  return false;
}

export {};
