function twoSum(nums:number[], target:number):number[] {
    let i:number,k:number;
    for (i = 0; i < nums.length - 1; i++) {

      for (k = i + 1; k < nums.length; k++) {
        if (nums[i] + nums[k] === target) {
          return [i, k];
        }
      }
    }
    return [];
  };
  
  console.log(twoSum([2, 5, 5, 11], 10));