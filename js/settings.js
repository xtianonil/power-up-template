/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var fruitSelector = document.getElementById('fruit');
var vegetableSelector = document.getElementById('vegetable');

//
var estimatedTimeSelector = document.getElementById('estimatedTime');
var actualTimeSelector = document.getElementById('actualTime');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'fruit'),
    t.get('board', 'private', 'vegetable'),
    t.get('board', 'shared', 'estimatedTime'),
    t.get('board', 'shared', 'actualTime')
  ])
  .spread(function(savedFruit, savedVegetable, savedEstimatedTime, savedActualTime){
    if(savedFruit && /[a-z]+/.test(savedFruit)){
      fruitSelector.value = savedFruit;
    }
    if(savedVegetable && /[a-z]+/.test(savedVegetable)){
      vegetableSelector.value = savedVegetable;
    }
    if(savedEstimatedTime && /[a-z]+/.test(savedEstimatedTime)){
      estimatedTimeSelector.value = savedEstimatedTime;
    }
    if(savedActualTime && /[a-z]+/.test(savedActualTime)){
      actualTimeSelector.value = savedActualTime;
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
    return t.set('board', 'shared', 'estimatedTime', estimatedTimeSelector.value);
  })
  .then(function(){
    return t.set('board', 'shared', 'actualTime', actualTimeSelector.value);
  })
  //
  .then(function(){
    t.closePopup();
  })
})
