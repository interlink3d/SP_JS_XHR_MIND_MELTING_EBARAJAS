// step 6 and 7

function showCarnivores (carnivores) {
  var list= document.querySelector('.carnivores')

  carnivores.forEach(function (carnivore) {
    list.innerHTML += `<li>${carnivore}</li>`
  })
}

function showHerbivores () {
  var list= document.querySelector('.herbivores')

  herbivores.forEach(function (herbivores) {
    list.innerHTML += `<li>${herbivores}</li>`
  })
}

Predator.getCarnivores(showCarnivores);
Predator.getHerbivores(showHerbivores);