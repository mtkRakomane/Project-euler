//Tabs functions!!!!!
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  var number=[];
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //Even Fibonacci Numbers!!!!!!!!
 
  function calculateFibonacciSum() {
    // Get the input value
    var limit = parseInt(document.getElementById("limitInput").value);

    // Initialize variables for Fibonacci sequence
    var fibPrev = 1;
    var fibCurr = 2;
    var fibNext = 0;

    // Initialize sum of even-valued terms
    var evenSum = 0;

    // Loop through Fibonacci sequence
    while (fibCurr <= limit) {
        // Check if current Fibonacci number is even
        if (fibCurr % 2 === 0) {
            evenSum += fibCurr;
        }

        // Calculate next Fibonacci number
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    // Display the sum
    document.getElementById("evenResults").innerText = "Sum of even Fibonacci terms up to " + limit + ": " + evenSum;
}


//Largest Prime Factor!!!!!!

function calculateLargestPrimeFactor() {
    // Get the input value
    var number = parseInt(document.getElementById("numberInput").value);

    // Initialize the largest prime factor
    var largestPrimeFactor = 0;

    // Divide the number by 2 until it's odd
    while (number % 2 === 0) {
        largestPrimeFactor = 2;
        number /= 2;
    }

    // Check for odd factors starting from 3
    for (var i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestPrimeFactor = i;
            number /= i;
        }
    }

    // If the remaining number is greater than 2, it's a prime number
    if (number > 2) {
        largestPrimeFactor = number;
    }

    // Display the largest prime factor
    document.getElementById("primeResult").innerText = "Largest prime factor: " + largestPrimeFactor;
}
 