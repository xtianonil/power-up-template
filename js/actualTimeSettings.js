/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var actualTimeHours = document.getElementById('actualTimeHours');
var actualTimeMinutes = document.getElementById('actualTimeMinutes');

function formatHours(hours)
{
  if (hours < 1)
    return "";
  else
    return hours + " hours";
}

function formatMinutes(minutes)
{
  if (minutes < 1)
    return "";
  else
    return minutes + " minutes";
}

function formatActual(hours,minutes)
{
  if (hours < 1 && minutes < 1)
    return "";
  else if (hours < 1 && minutes >= 1)
    return "";
  else if (hours >= 1 && minutes < 1)
    return "";
  else
    return ", ";
}

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
    return t.set('card', 'shared', 'actualTime', formatHours(actualTimeHours.value) + formatActual(actualTimeHours.value,actualTimeMinutes.value) + formatMinutes(actualTimeMinutes.value));
  })
  .then(function(){
    t.closePopup();
  });
});
