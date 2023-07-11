function removeDuplicates(nums:number[]):number {
    let k=1;
    for (let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
             nums[k]=nums[i]
             k++
}
    }

    return k;
  };
  
  console.log(removeDuplicates([2, 5, 5,6,6,11, 11]));