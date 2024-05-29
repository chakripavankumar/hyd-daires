/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let t1= new Date();
    let t1inms= t1.getTime()
    console.log(calculateSum(n));
    let t2= new Date();
    let t2inms= t2.getTime()
    console.log(t1inms);
    console.log(t2inms);
    let timetaken= t1inms-t2inms
     return  timetaken
}
function calculateSum(n){
    let sum=0 ;
    for ( let i=1 ; i<=n;i++){
        sum+=i;
    }
    return sum
}