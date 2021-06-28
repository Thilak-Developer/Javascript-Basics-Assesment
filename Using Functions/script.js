function factor()
{     
      let resultfactor = "";
      let f = "";
      const num = document.getElementById("numfactor").value;
      for(let i = 1; i <= num; i++) 
    {
      if(num % i == 0) 
      {
        resultfactor = i ;
        document.getElementById("resultfact").innerHTML += " "+resultfactor+" <br>";
      }
    }   
}
function table()
{     
    const numbertable = document.getElementById("numtable").value;
    for(let i = 1; i <= 10; i++)
    {
    const resulttable= i * numbertable;
    document.getElementById("resulttable").innerHTML += +i+"*"+numbertable+"="+resulttable+"<br>" ;
    }  
}
function swap()
{     
    let numbera = document.getElementById("numswap").value;
    let numberb = document.getElementById("numswapb").value;
    let c ;
    c=numbera;
    numbera = numberb;
    numberb = c ;
    document.getElementById("resultswap").innerHTML += +numbera+","+numberb+" After Swapped <br>";
}
function swap1()
{     
    var num1 = document.getElementById("numswap1").value; //10
    var num2 = document.getElementById("numswapb1").value; //5
    console.log(num1);
    console.log(num2);

    num1 = num1 * num2; 
    num2 = num1 / num2; 
    num1 = num1 / num2; 
    document.getElementById("resultswap1").innerHTML +=  +num1+","+num2+" After Swapped <br>" ;
    
}