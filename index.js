// Basic local memory to store data
var cache = {};

// HTML handling functions
var makeRow = function(name, classname, disabled) {
  var html = '<tr><td>' + name + '</td><td><select ' + (disabled ? 'disabled': '') +
             ' class=\"' + classname + '\"></select></td></tr>';
  var $row = $(html);
  $('table').append($row);

  var option = 'Select ' + classname.charAt(0).toUpperCase() + classname.slice(1);
  addOption(classname, option);
};

var addOption = function(classname, option, value) {
  var $select = $('.' + classname);
  $select.append($('<option value=\"' + value + '\">' + option + '</option>'));
};

var cleanOptions = function(classname) {
  var $select = $('.' + classname);
  var option = 'Select ' + classname.charAt(0).toUpperCase() + classname.slice(1);
  $select.html('<option>' + option + '</option>');
}

// API data handling functions
var storeYear = function() {
  var year = $('.year').val();
  if(cache[year] === undefined) {
    getMake(+this.value, function(data) {
      cache[year] = data;
      populateMake();
    });
  } else {
    populateMake();
  }
};

var populateMake = function() {
  var year = $('.year').val();
  var makes = cache[year].makes;
  cleanOptions('make');
  makes.forEach(function(make, index) {
    addOption('make', make.name, index);
  });
  $('.make').prop('disabled', false);
  $('.model').prop('disabled', true);
  $('.trim').prop('disabled', true);
  $('.engine').prop('disabled', true);
  $('.transmission').prop('disabled', true);
};

var populateModel = function() {
  var year = $('.year').val();
  var index = $('.make').val();
  var models = cache[year].makes[index].models;
  cleanOptions('model');
  models.forEach(function(model) {
    addOption('model', model.name, model.niceName);
  });
  $('.make').prop('disabled', false);
  $('.model').prop('disabled', false);
  $('.trim').prop('disabled', true);
  $('.engine').prop('disabled', true);
  $('.transmission').prop('disabled', true);
};

var createSchedule = function() {
  var year = $('.year').val();
  var make = cache[year].makes[$('.make').val()].niceName;
  var model = $('.model').val();
  getDetails(year, make, model, function(data) {
    getSchedule(data.id, renderSchedule);
  });
};

// Visuals
var renderSchedule = function(data) {
  console.log(data);
};

// Initialization
var init = function(currentYear) {
  // Create row entries for the selections
  makeRow('Year:', 'year');
  makeRow('Vehicle Make:', 'make', true);
  makeRow('Vehicle Model:', 'model', true);
  makeRow('Vehicle Trim:', 'trim', true);
  makeRow('Vehicle Engine:', 'engine', true);
  makeRow('Vehicle Transmission:', 'transmission', true);

  // Add years options
  for(var i = 1990; i <= currentYear; i++) {
    addOption('year', '' + i, '' + i);
  }

  // Make interactive.
  $('.year').change(storeYear);
  $('.make').change(populateModel);
  $('.model').change(createSchedule);
  // ...

}(new Date().getFullYear());
