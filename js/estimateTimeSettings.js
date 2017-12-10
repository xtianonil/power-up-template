/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var estimateTimeHours = document.getElementById('estimateTimeHours');
var estimateTimeMinutes = document.getElementById('estimateTimeMinutes');

function formatMinutes(minutes)
{
  if (minutes < 1)
    return "";
  else
    return minutes + " minutes";
}

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'estimateTimeHours'),
    t.get('card', 'shared', 'estimateTimeMinutes')
  ])
  .spread(function(savedEstimateTimeHours,savedEstimateTimeMinutes){
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
    return t.set('card', 'shared', 'estimateTime', estimateTimeHours.value + " hours, " + formatMinutes(estimateTimeMinutes.value));
  })
  .then(function(){
    t.closePopup();
  });
});
