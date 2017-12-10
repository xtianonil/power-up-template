/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var estimateTimeHours = document.getElementById('estimateTimeHours');
var estimateTimeMinutes = document.getElementById('estimateTimeMinutes');

alert(estimateTimeHours + estimateTimeHours.value);

var estimateTime = estimateTimeHours.value + " hours, " + estimateTimeMinutes.value + " minutes";

t.render(function(){
  return Promise.all([
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
  return t.set('card', 'shared', 'estimateTime', estimateTime)
  .then(function(){
    t.closePopup();
  });
});
