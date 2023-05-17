// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/15/2023
// This file contains the JS functions for index.html

"use strict"

function numSent() {

  // Initializing variables counter and factorial result. 
  let counter = 1;
  let factorialResult = 1;
  
  // Getting user input for the variable userNumber
  let userNumber =
    parseInt(document.getElementById("number").value);

  // If, the user enters nothing, then display "Please enter a valid number."
  if (isNaN(userNumber)) {
    document.getElementById("results").innerHTML = "Please enter a valid number.";
    return;
  }

  // Else if the user enters a negative number, display "Please enter a positive number".
  else if (userNumber < 0) {
    document.getElementById("results").innerHTML = "Please enter a positive number.";
    return;
  }
    
  // Else, allow the DO...WHILE loop to calculate the factorial.
  else {

    // Using a DO...WHILE loop to find factorial. 
    do {
      factorialResult = factorialResult * counter;
      counter = counter + 1;
    } while (counter <= userNumber);
  }

  // Display factorial back to screen
  document.getElementById("results").innerHTML = "The factorial of your inputted number (!" + userNumber + ") = " + factorialResult + ".";
}