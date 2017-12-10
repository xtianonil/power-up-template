/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var actualTimeHours = document.getElementById('actualTimeHours');
var actualTimeMinutes = document.getElementById('actualTimeMinutes');

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'actualTimeHours'),
    t.get('card', 'shared', 'actualTimeMinutes')
  ])
  .spread(function(savedActualTimeHours,savedActualTimeMinutes){
    actualTimeHours.value = savedActualTimeHours;
    actualTimeMinutes.value = savedActualTimeMinutes;
  })
  .then(function(){
    t.sizeTo('#actualTimeDiv')
    .done();
  })
});

document.getElementById('saveActualTime').addEventListener('click', function(){
  return t.set('card', 'shared', 'actualTimeHours', actualTimeHours.value)
  .then(function(){
    return t.set('card', 'shared', 'actualTimeMinutes', actualTimeMinutes.value);
  })
  .then(function(){
    return t.set('card', 'shared', 'actualTime', actualTimeHours.value + " hours, " + actualTimeMinutes.value + " minutes");
  })
  .then(function(){
    t.closePopup();
  });
});
