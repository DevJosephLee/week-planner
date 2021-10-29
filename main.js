/* global data */
/* exported data */
var $addEntryButton = document.querySelector('.button-add-entry');
var $openModal = document.querySelector('.modal-outer');
var $submitEntryButton = document.querySelector('.submit-button');
var $dayOfWeek = document.querySelector('.week-days-dropdown');
var $time = document.querySelector('.time');
var $plannerNotes = document.querySelector('.planner-notes');
var $form = document.querySelector('form');

function openModal(event) {
  $openModal.className = 'modal-outer';
}
function closeModal(event) {
  $openModal.className = 'modal-outer hidden';
}

function clickSubmit(event) {
  event.preventDefault();
  var formData = {
    dayOfWeek: $dayOfWeek.value,
    time: $time.value,
    plannerNotes: $plannerNotes.value
  };
  data.entries.unshift(formData);
}

$addEntryButton.addEventListener('click', openModal);
$submitEntryButton.addEventListener('click', closeModal);
$form.addEventListener('submit', clickSubmit);
document.addEventListener('DOMContentLoaded');

var $tableGrabbingTableBody = document.querySelector('table');

function handleDomContent(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $tableGrabbingTableBody.appendChild(renderEntries(data.entries[i]));
  }
}

document.addEventListener('DOMContentLoaded', handleDomContent);

function renderEntries(entry) {
  // var tableBody = document.querySelector('tbody');
  var $tableBody = document.createElement('tbody');

  var $row = document.createElement('tr');
  $tableBody.appendChild($row);

  var $time = document.createElement('td');
  $row.appendChild($time);

  var $description = document.createElement('td');
  $row.appendChild($description);

  return $tableBody;

}
// function renderEntry(entry) {
//   /*make tr td
// }
