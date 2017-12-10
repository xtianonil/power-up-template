/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var actualTimeSelector = document.getElementById('actualTime');

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'actualTime')
  ])
  .then(function(savedactualTime){
    actualTimeSelector.value = savedactualTime;
  })
  .then(function(){
    t.sizeTo('#actualTimeDiv')
    .done();
  })
});

document.getElementById('saveActualTime').addEventListener('click', function(){
  return t.set('card', 'shared', 'actualTime', actualTimeSelector.value)
  .then(function(){
    t.closePopup();
  });
});
