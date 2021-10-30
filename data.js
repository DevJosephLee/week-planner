/* exported data */
var data = {
  currentDay: 'sunday',
  days: {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  },
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('week-planner-local-storage');
if (previousDataJSON != null) {
  data = JSON.parse(previousDataJSON);
}

function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-local-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeUnload);
