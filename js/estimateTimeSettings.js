/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var estimateTimeHours = document.getElementById('estimateTimeHours');
var estimateTimeMinutes = document.getElementById('estimateTimeMinutes');

var estimateTime = estimateTimeHours.value + " hours, " + estimateTimeMinutes.value + " minutes";

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'estimateTime')
  ])
  .then(function(savedEstimateTimeHours,savedEstimateTimeMinutes){
    //estimateTime = savedEstimateTimeHours;
    estimateTimeHours.value = savedEstimateTimeHours;
    estimateTimeMinutes.value = savedEstimateTimeMinutes;
  })
  .then(function(){
    t.sizeTo('#estimateTimeDiv')
    .done();
  })
});

document.getElementById('saveEstimateTime').addEventListener('click', function(){
  return t.set('card', 'shared', 'estimateTimeHours', estimateTimeHours.value)
  .then(function(){
    return t.set('card', 'shared', 'estimateTimeMinutes', estimateTimeMinutes.value);
  })
  .then(function(){
    t.closePopup();
  });
});
