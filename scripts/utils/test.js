import {formatCurrency} from './money.js';
 /* basic Test case*/
 console.log('to convert the cents into float')
if (formatCurrency(1090)==='10.90'){
    console.log('Passed')
 }
 else{
    console.log('failed');
 }
console.log('to round 0')
 if(formatCurrency(0)==='0.00'){
    console.log('Passed')
 }
 else{
    console.log('failed');
 }

 console.log('To round up 4 digit value')
 if(formatCurrency(2000.5)==='20.01'){
    console.log('Passed')
 }
 else{
    console.log('failed');
 }
//  External Library --> Code that is outside of our project
//  Testing Frameworks --> External library that helps us write tests easier
 