// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
function naturalNumber(){
    var num:string | null = prompt("Enter N Number");
    
    var i:number = 1;
    while(i<= Number(num)){
        console.log(i);
        i++;
    }
    return naturalNumber
}

// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
function naturalNumberReverse(){
    var num:string | null = prompt("Enter N Number");
    var i:number = 0;
    i = Number(num);

    
    while( i >=1){
        console.log(i);
        i--;
    }
    return naturalNumberReverse
}

// 3. Write a ts program to print all alphabets from a to z. - using while loop
function alphabet(){
    var alpha:number = 97;
    while(alpha <= 122){
        console.log(String.fromCharCode(alpha)); 
        alpha++
    }
    return alphabet
}

// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
function evenNumber(){
    var evenNumber:number = 1;
    while(evenNumber <= 100){
        if(evenNumber % 2 == 0){
            console.log(evenNumber);
        }
        evenNumber++
    }
    return evenNumber
}
// 5. Write a ts program to print all odd number between 1 to 100.
function oddNumber(){
    var oddNumber:number = 1;
    while(oddNumber <= 100){
        if(oddNumber % 2 != 0){
            console.log(oddNumber);
        }
        oddNumber++
    }
    return evenNumber
}

// 6. Write a ts program to find sum of all natural numbers between 1 to n.
function sumNatural(){
    var number:string | null = prompt("Enter value of N");
    var sum:number = 0;
    var userInput:number = Number(number);
    var i:number = 1;
    while(i <= userInput){
        sum = sum + i;
       i++;
    }
    console.log(sum);
    return sumNatural
}

// 7. Write a ts program to find sum of all even numbers between 1 to n.
function sumEvenNatural(){
    var number:string | null = prompt("Enter value of N");
    var userInput:number = Number(number);
    var sum:number = 0;
    var evenNumber:number = 1;
    while(evenNumber <= userInput){
        if(evenNumber % 2 == 0){
            sum = sum + evenNumber;
        }
        evenNumber++
    }
    console.log("Sum of even number is: ",sum);
    return sumEvenNatural
}

// 8. Write a ts program to find sum of all odd numbers between 1 to n.
function sumOddNatural(){
    var number:string | null = prompt("Enter value of N");
    var userInput:number = Number(number);
    var sum:number = 0;
    var oddNumber:number = 1;
    while(oddNumber <= userInput){
        if(oddNumber % 2 !=0){
            sum = sum + oddNumber;
        }
        oddNumber++
    }
    console.log("Sum of odd numbers are: ",sum);
    return sumOddNatural
}

// 9. Write a ts program to print multiplication table of any number.
function table(){
    var userInput:string | null = prompt("Enter number to print table:");
    var num:number = Number(userInput);
    var startNum:number = 1;
    while(startNum <= 10){
        console.log(num + " x " + startNum + " = " + num*startNum);
        startNum++;
    }
    return table
}

// 10. Write a ts program to count number of digits in a number

function countNumber(){
    var int_number:number = 254;
    var int_length:number = (''+int_number).length
    console.log(int_length);
    return countNumber
}


// 11. Write a ts program to find first and last digit of a number.

function findDigit(){
    var n:number; var firstDigit:number; var lastDigit:number;
    n = 12345;
    lastDigit = n % 10;

    while(n >= 10){
        n = n / 10;
    }
    firstDigit = Math.floor(n);
    console.log("First Digit is: " + firstDigit + "\nLast Digit is: " + lastDigit);
}

// 12. Write a ts program to find sum of first and last digit of a number.
function sumDigit(){
var n:number; var firstDigit:number; var lastDigit:number;
    n = 1234;
    lastDigit = n % 10;

    while(n >= 10){
        n = n / 10;
    }
    firstDigit = Math.floor(n);
    console.log("Sum of first and last digit is: " , firstDigit + lastDigit);
}

// 13. Write a ts program to swap first and last digits of a number.
function swapDigit(){
var n:number; var firstDigit:number; var lastDigit:number;
    n = 1234;
    lastDigit = n % 10;

    while(n >= 10){
        n = n / 10;
    }
    firstDigit = Math.floor(n);
    [firstDigit, lastDigit] = [lastDigit, firstDigit];
    console.log( firstDigit , lastDigit);
}

// 14. Write a ts program to calculate sum of digits of a number.
function sumOfDigit(){
    var userInput: string | null = prompt("Enter a Digit");
    var userNum: number = Number(userInput);
    var sum:number = 0;
    while(userNum > 0){
        var remainder: number = userNum % 10;
        userNum = userNum / 10;
        sum = sum + remainder; 
    }
    console.log(Math.floor(sum));
    return sumOfDigit
}

// 15. Write a ts program to calculate product of digits of a number.
function product(){

    var num:string | null = prompt("Enter a Digit");
    var userInput: number = Number(num);
    const recursiveProduct = (userInput, res = 1) => {
    if(userInput){
        return recursiveProduct(Math.floor(userInput / 10), res * (userInput % 10 || 1));
    }
    return res;
    };
    console.log(recursiveProduct(userInput));
        return product
}
    

// 16. Write a ts program to enter a number and print its reverse.
function reverseString() {
    var num:number = 54;
    var str:string = String(num);    
    var nStr:string = str.split("").reverse().join("");
    console.log(nStr);  
    return reverseString;
}

// 17. Write a ts program to check whether a number is palindrome or not.
function Palindrome(){
		var rem:number;
        var temp:number;
        var final:number = 0;
		var number:string | null = prompt("Enter a Number");
        var userInput:number = Number(number);


		temp = userInput;
		while(userInput > 0){
			rem = userInput % 10;
			userInput = userInput / 10;
			final = final * 10 + rem;
		}
		if(final==temp){
			window.alert("The inputed number is Palindrome");
		}
		else{
			window.alert("The inputted number is not palindrome");
		}
}

// Write a ts program to find frequency of each digit in a given integer.
function countDigit(){
    var count:number = 0, number:number,dConvrt:number, d:string | null, num:string | null, userNum:number;
    num = prompt("Enter a Digit");
    d = prompt("Enter a Digit to find Frequency");
    userNum = Number(num);
    dConvrt = Number(d);
    while(num){
        if((userNum % 10) ==  dConvrt)
            count++;
            userNum /= 10;
            debugger
        }
        console.log(userNum);
        return count
    
}