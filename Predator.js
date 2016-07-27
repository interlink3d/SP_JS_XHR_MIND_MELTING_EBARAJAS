var Predator = (function () {
  var carnivores = []
  var herbivores = []

  return {
    getCarnivores: function (cb) {
      var xhr = new XMLHttpRequest() //get data
      xhr.open('GET', 'carnivores.json')   
      xhr.addEventListener('load', function (evt) {
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
