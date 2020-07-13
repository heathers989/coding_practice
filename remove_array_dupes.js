//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

/*Do not allocate extra space for another array, you must do this by modifying the input array in-place with 
O(1) extra memory.
It doesn't matter what you leave beyond the returned length and it doesn't matter what values are set beyond the returned length.*/

let nums = [1,1,2]
let nums2 = [1,1,2,3,3,5,5,5,6]

let noDupes = (nums) => {
    if (nums.length === 0){
        return 0;
    }
    let num1 = 0;

    for (let num2 = 1; num2 < nums.length; num2++){
        if(nums[num1] !== nums[num2]){
            num1++;
            nums[num1] = nums[num2];
        }
    }
    console.log(num1 + 1)
    return num1 + 1;
}

noDupes(nums)
noDupes(nums2)