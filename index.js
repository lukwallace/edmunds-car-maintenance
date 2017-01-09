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

var init = function(year) {
  // Create row entries for the selections
  makeRow('Year:', 'year');
  makeRow('Vehicle Make:', 'make', true);
  makeRow('Vehicle Model:', 'model', true);
  makeRow('Vehicle Trim:', 'trim', true);
  makeRow('Vehicle Engine:', 'engine', true);
  makeRow('Vehicle Transmission:', 'transmission', true);

  // Add years options
  for(var i = 1990; i <= year; i++) {
    addOption('year', '' + i, '' + i);
  }

  // Make interactive.
  $('.year').change(function() {
    populateMake(this.value);
  });
}(new Date().getFullYear());