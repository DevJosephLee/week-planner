/* global data */
/* exported data */
// var $addEntryButton = document.querySelector('.button-add-entry');
// var $openModal = document.querySelector('.modal-outer');
// var $submitEntryButton = document.querySelector('.submit-button');
// var $dayOfWeek = document.querySelector('.week-days-dropdown');
// var $time = document.querySelector('.time');
// var $plannerNotes = document.querySelector('.planner-notes');
// var $form = document.querySelector('form');
// var $table = document.querySelector('table');
// var $dayButtons = document.querySelectorAll('.days-button');
// var $scheduleEventMessage = document.querySelector('.schedule-event-message');
// var $sundayButton = document.querySelector('.sunday');
// var $mondayButton = document.querySelector('.monday');
// var $tuesdayButton = document.querySelector('.tuesday');
// var $wednesdayButton = document.querySelector('.wednesday');
// var $thursdayButton = document.querySelector('.thusday');
// var $fridayButton = document.querySelector('.friday');
// var $saturdayButton = document.querySelector('.saturday');
// console.log($dayButtons);

// function openModal(event) {
//   $openModal.className = 'modal-outer';
// }
// function closeModal(event) {
//   $openModal.className = 'modal-outer hidden';
// }

// function clickSubmit(event) {
//   event.preventDefault();
//   var formData = {
//     dayOfWeek: $dayOfWeek.value,
//     time: $time.value,
//     plannerNotes: $plannerNotes.value
//   };
//   data.entries.unshift(formData);
//   $table.append(renderEntries(formData));
// }

// $addEntryButton.addEventListener('click', openModal);
// $submitEntryButton.addEventListener('click', closeModal);
// $form.addEventListener('submit', clickSubmit);
// document.addEventListener('DOMContentLoaded', handleDomContent);

// function handleDomContent(event) {
//   for (var i = 0; i < data.entries.length; i++) {
//     $table.appendChild(renderEntry(data.entries[i]));
//   }
// }

// // function renderEntries(entriesArray) {
// //   for (var i = 0; i < $dayButtons.length; i++) {
// //     if ($dayButtons.getAttribute('data-view') === data.sunday) {
// //       renderEntry();
// //     }

// //   }
// // }

// function renderEntry(entry) {
//   var tableBody = document.querySelector('tbody');
//   tableBody.remove();

//   var $tableBody = document.createElement('tbody');

//   var $row = document.createElement('tr');
//   $tableBody.appendChild($row);

//   var $time = document.createElement('td');
//   $time.textContent = entry.time;
//   $row.appendChild($time);

//   var $description = document.createElement('td');
//   $description.textContent = entry.plannerNotes;
//   $row.appendChild($description);

//   return $tableBody;
// }

// function clickSundayButton(event) {
//   $scheduleEventMessage.textContent = 'Schedule Event for Sunday';
// }

// function clickMondayButton(event) {

// }

// $sundayButton.addEventListener('click', clickSundayButton);
// function switchViews(viewName) {
//   for (var i = 0; i < )
// }
// function renderEntry(entry) {
//   /*make tr td
// }
