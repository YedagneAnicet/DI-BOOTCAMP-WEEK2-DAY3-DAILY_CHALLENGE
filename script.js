/*
Instructions
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by youself, without looking at the answers on the internet. */


let x =6;
let signe = " ";
for (i = 0; i < x; i++) {
    signe += "*";
    console.log(signe);
}


console.log(`\n`);

for (i = 0; i < x; i++) {
    let y = i + 1
    let signe = " ";
    for (j = 0; j < y; j++) {
        signe += "*";
    }
    console.log(signe);
}