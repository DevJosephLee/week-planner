var $addEntryButton = document.querySelector('.button-add-entry');
var $openModal = document.querySelector('.modal-outer');
var $submitEntryButton = document.querySelector('.submit-button');
// var $dayOfWeek = document.querySelector('.week-days-dropdown');
// var $time = document.querySelector('.time');
// var $plannerNotes = document.querySelector('.planner-notes');

function openModal(event) {
  $openModal.className = 'modal-outer';
}
function closeModal(event) {
  $openModal.className = 'modal-outer hidden';
}

$addEntryButton.addEventListener('click', openModal);
$submitEntryButton.addEventListener('click', closeModal);
