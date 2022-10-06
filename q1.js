const nums =  [2, 3, 4, null, 6, 'a', 3]


const sum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum = sum + nums[i];
    }
  }
  return sum;
};

console.log(sum(nums));
