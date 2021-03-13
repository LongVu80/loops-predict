/* Predict 1 */
function countFunc(){
    for(var num = 0; num < 15; num++){
        alert(num)
    console.log(num);
    }
}
/* t-diagram
num < 15 = num
num
0,0
1,1
2,2
3,3
...
14,14
15 break!!
Answer: (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14) */

/* predict 2 */
function oddFunc(){
    for(var i = 1; i < 10; i+=2){
        if(i % 3 == 0){
            alert(i)
        console.log(i);
    }
}
}
/* t-diagram
if x= (1,2,4,5,6,7,8,); i !== 0
=>
x,i
3,0
9,0

Answer: (3,9)*/

/* Predict 3 */
function ifElseFunc(){
    for(var j = 1; j <= 15; j++){ 
        if(j % 2 == 0){
            j+=2;
        }
        else if(j % 3 == 0){
            j++;
        }
            alert(j)
        console.log(j);
    }
}
/* t-diagram
so let's do the if loops:
if(j % 2 == 0){ j+=2}
j  =  value
1  => 1; 
j++ = 2 =>
2+2 = 4;
 j++ = 5;
 5 + 2 = 7, 7 !== 0
 j++ = 8;
 j++ = 9 (% 3 == 0)
 j++ = 10;
 j++ = 11; 
 11 + 2 = 13, 13 !== 0
 j++ = 14;
 14 + 2 = 16;
 
=> 1, 4, 5, 8, 10, 11, 14, 16
Answer: (1,4,5,8,10,11,14,16) */

