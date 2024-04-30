//Tabs functions!!!!!
 
  document.getElementById("defaultOpen").click();

  var number=[];
  function openTab(evt, tabName) {
    var x, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (x = 0; x < tabcontent.length; x++) {
      tabcontent[x].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (x = 0; x < tablinks.length; x++) {
      tablinks[x].className = tablinks[x].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //Multiples of 3 or 5!!!!!!
  function calculateSum() {
   
    var numb = parseInt(document.getElementById("num1").value);
    var sum = 0;
    //var i;

    for (var i = 1; i < numb; i++) {
        
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("multipleResults").innerText = "Sum of multiples of 3 or 5 below 1000: " + sum;
}

  //Even Fibonacci Numbers!!!!!!!!
 
  function calculateFibonacciSum() {

    var limit = parseInt(document.getElementById("limitInput").value);
    var prevNum = 1;
    var currNum = 2;
    var nextNum = 0;
    var evenSum = 0;
   
    while (currNum <= limit) {
        
        if (currNum % 2 === 0) {
            evenSum +=  currNum;
        }

        nextNum = prevNum +  currNum;
        prevNum =  currNum;
        currNum = nextNum;
    }

    document.getElementById("evenResults").innerText = "Sum of even Fibonacci terms up to " + limit + ": " + evenSum;
}


//Largest Prime Factor!!!!!!

function calculateLargestPrimeFactor() {
    
    var number = parseInt(document.getElementById("numberInput").value);
    var largestPrimeFactor = 0;

   
    while (number % 2 === 0) {
        largestPrimeFactor = 2;
        number /= 2;
    }

    for (var i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestPrimeFactor = i;
            number /= i;
        }
    }
   
    if (number > 2) {
        largestPrimeFactor = number;
    }

    document.getElementById("primeResult").innerText = "Largest prime factor: " + largestPrimeFactor;
}
 