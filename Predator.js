var Predator = (function () {
  var carnivore = []
  var herbivore = []

  return {
    getCarnivores: function (cb) {
      var xhr = new XMLHttpRequest() //get data
      xhr.open('GET', 'carnivores.json')   
      xhr.addEventListener('load', function (evt) {
        // responseText = an array like object inside a string "['Edgar', 'Joe']"
        carnivores = JSON.parse(evt.target.responseText) //store in private variable
        cb(carnivores)  //execute callback
      })   
      xhr.send()  
    },
    getHerbivores: function (cb) {
      var xhr = new XMLHttpRequest() //get data
      xhr.open('GET', 'herbivores.json')   
      xhr.addEventListener('load', function (evt) {
        herbivores = JSON.parse(evt.target.responseText) //store in private variable
        cb(herbivores)  //execute callback
      })   
      xhr.send()  
    }
  }

}())
