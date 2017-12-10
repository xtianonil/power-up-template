/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

//var fruitSelector = document.getElementById('fruit');
//var vegetableSelector = document.getElementById('vegetable');

//
var estimateTimeSelector = document.getElementById('estimateTime');
var actualTimeSelector = document.getElementById('actualTime');

t.render(function(){
  return Promise.all([
    //t.get('board', 'shared', 'fruit'),
    //t.get('board', 'private', 'vegetable'),
    t.get('card', 'shared', 'estimateTime'),
    t.get('card', 'shared', 'actualTime')
  ])
  .spread(function(savedEstimateTime, savedActualTime){
    estimateTimeSelector.value = savedEstimateTime;
    actualTimeSelector.value = savedActualTime;
    /*if(savedFruit && /[a-z]+/.test(savedFruit)){
      fruitSelector.value = savedFruit;
    }
    if(savedVegetable && /[a-z]+/.test(savedVegetable)){
      vegetableSelector.value = savedVegetable;
    }
    estimateTimeSelector.value = savedEstimateTime;
    actualTimeSelector.value = savedActualTime;*/
    /*
    if(savedEstimateTime && /[a-z]+/.test(savedEstimateTime)){
      estimateTimeSelector.value = savedEstimateTime;
    }
    if(savedActualTime && /[a-z]+/.test(savedActualTime)){
      actualTimeSelector.value = savedActualTime;
    }
    */
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('saveEstimateTime').addEventListener('click', function(){
  return t.set('card', 'shared', 'estimateTime', estimateTimeSelector.value)
  .then(function(){
    return t.set('card', 'shared', 'actualTime', actualTimeSelector.value);
  })
  .then(function(){
    t.closePopup();
  })
})

document.getElementById('save').addEventListener('click', function(){

  /*
  return t.set('board', 'private', 'vegetable', vegetableSelector.value)
  .then(function(){
    return t.set('board', 'shared', 'fruit', fruitSelector.value);
  })
  */
  //
  return t.set('card', 'shared', 'estimateTime', estimateTimeSelector.value)
  /*
  .then(function(){
    return t.set('card', 'private', 'estimateTime', estimateTimeSelector.value);
  })
  */
  .then(function(){
    return t.set('card', 'shared', 'actualTime', actualTimeSelector.value);
  })
  //
  .then(function(){
    t.closePopup();
  })
})
