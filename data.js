var data = {
  view: 'Sunday',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('week-planner-local-storage');
if (previousDataJSON != null) {
  data = JSON.parse(previousDataJSON);
}

function beforeunload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-local-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeunload);
