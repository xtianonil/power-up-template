/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var estimateTimeSelector = document.getElementById('estimateTime');

t.render(function(){
  return Promise.all([
    //t.get('board', 'shared', 'fruit'),
    //t.get('board', 'private', 'vegetable'),
    t.get('card', 'shared', 'estimateTime')
  ])
  .then(function(savedEstimateTime){
    estimateTimeSelector.value = savedEstimateTime;
  })
  .then(function(){
    t.sizeTo('#estimateTimeDiv')
    .done();
  })
});

document.getElementById('saveEstimateTime').addEventListener('click', function(){
  return t.set('card', 'shared', 'estimateTime', estimateTimeSelector.value)
  .then(function(){
    t.closePopup();
  });
});
