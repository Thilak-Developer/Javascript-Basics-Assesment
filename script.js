// factorial
function factorial() {
    let i , num , j ;
    j = 1 ;
    num = document.getElementById('num').value;
    for(i=1;i<=num;i++)
    {
        j=j*i;
    }
     document.getElementById("result").innerHTML =" The factorial of "  +num+ " is " +j  ;
} 
// fibonacci
function fibonacci(){
    let i , numfibo , x , y , z  ;
    x = 0 ;
    y = 1 ;
    
    numfibo = document.getElementById('numfibo').value;
    for(i=0;i<numfibo;i++){   
    // document.write(" " +x);
     z = x + y ;
       y = x ;
       x = z ;
     }
     document.getElementById("resultfibo").innerHTML = " The Fibonacci Series of " +numfibo+ " is " +x;
}
// Armstrong
function Armstrong()  {
		var flag,number,remainder,addition = 0;
		number = document.getElementById("numarmstrong").value;

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}

		if(addition == flag)
		{
            document.getElementById("resultarmstrong").innerHTML = " It is a Armstrong Number  " ;
		}
		else
		{
			document.getElementById("resultarmstrong").innerHTML = " It is not a Armstrong Number  " ;
		}
}
// reverseNumber
function reverseNumber() {
    let numReverse , resultReverse  ;
    
    numReverse = document.getElementById('numReverse').value;
    resultReverse = numReverse.toString().split('').reverse().join('');
    
    document.getElementById("reverseNumber").innerHTML =" The reversed number of "  +numReverse+ " is " +resultReverse ;
} 
// primeNumber
function primeNumber() {
    let numberPrime ;
  
    numberPrime = document.getElementById('numPrime').value;
   
    for(i=2;i<=numberPrime-1;i++)
    {
        if(numberPrime % i == 0)
        {
            document.getElementById("primeNumber").innerHTML =" The number "  +numberPrime+ " is not a prime number " ;
        }
        else
        {
            document.getElementById("primeNumber").innerHTML =" The number "  +numberPrime+ " is a prime number " ;
        }
    }  
} 
// Find Leap Year Or Not
function leapYear() {
   let year ;
    year = document.getElementById('numLeapYear').value;

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        document.getElementById("leapYear").innerHTML =" The Year "  +year+ " is a leap Year " ;
    }
     else
    {
        document.getElementById("leapYear").innerHTML =" The Year "  +year+ " is not a leap year " ;
    } 
} 