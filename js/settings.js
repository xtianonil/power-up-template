/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var fruitSelector = document.getElementById('fruit');
var vegetableSelector = document.getElementById('vegetable');

//
var estimatedTime = document.getElementById('estimatedTime');
var actualTime = document.getElementById('actualTime');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'fruit'),
    t.get('board', 'private', 'vegetable'),
    t.get('card', 'shared', 'estimatedTime'),
    t.get('card', 'shared', 'actualTime')
  ])
  .spread(function(savedFruit, savedVegetable){
    if(savedFruit && /[a-z]+/.test(savedFruit)){
      fruitSelector.value = savedFruit;
    }
    if(savedVegetable && /[a-z]+/.test(savedVegetable)){
      vegetableSelector.value = savedVegetable;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'vegetable', vegetableSelector.value)
  .then(function(){
    return t.set('board', 'shared', 'fruit', fruitSelector.value);
  })
  //
  .then(function(){
    return t.set('card', 'shared', 'estimatedTime', estimatedTime.value);
  })
  .then(function(){
    return t.set('card', 'shared', 'actualTime', actualTime.value);
  })
  //
  .then(function(){
    t.closePopup();
  })
})
