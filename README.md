# SP_JS_XHR_MIND_MELTING_EBARAJAS

IIFE, XHRs and Callbacks, Oh My

Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/spa/iife-xhr && cd $_
touch index.html
touch iife-xhr.js
touch Predator.js
Instructions

Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
Create an IIFE with the name of Predator.
Predator should have two private arrays to store carnivores and herbivores.
Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
Here's some code to get you started.

iife-xhr.js

function showCarnivores (carnivores) {

}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);
Predator.js

var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
    }
  }
})();