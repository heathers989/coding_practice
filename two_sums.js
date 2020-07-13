
 const target = 9
 const nums = [2,7,11,15]
 

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            console.log([ comp[nums[i] ] , i])
        }
        comp[target-nums[i]] = i
    }
};

twoSum(nums, target)