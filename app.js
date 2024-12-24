var num = +prompt('Enter Table Number You Want');
var lastNum = +prompt('Enter Any last Number of Table');
a = 1;

// while(a <= lastNum){
//     document.write(`${num} x ${a} = ${num*a} <br>`);
//     a++
// }

do{
    document.write(`${num} x ${a} = ${num*a} <br>`);
    a++
}
while(a <= lastNum);