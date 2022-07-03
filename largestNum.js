console.log('in this challenge we weill discuss how we can know which is the largest number in the array');

function LargestNum(a) {
 return a.sort((a,b)=>b-a)[0]


}
console.log(LargestNum([23,56,896,256]))
