var makeRow = function(name, classname, disabled) {
  var html = '<tr><td>' + name + '</td><td><select ' + (disabled ? 'disabled': '') +
             ' class=\"' + classname + '\"></select></td></tr>';
  var $row = $(html);
  $('table').append($row);

  var options = ['Select ' + classname.charAt(0).toUpperCase() + classname.slice(1)]
  addOption(classname, options);
};

var addOption = function(classname, options) {
  var $select = $('.' + classname);
  options.forEach(function(option) {
    $select.append($('<option>' + option + '</option>'));
  });
};

var init = function(year) {
  makeRow('Year:', 'year');
  makeRow('Vehicle Make:', 'make', true);
  makeRow('Vehicle Model:', 'model', true);
  makeRow('Vehicle Trim:', 'trim', true);
  makeRow('Vehicle Engine:', 'engine', true);
  makeRow('Vehicle Transmission:', 'transmission', true);
}(new Date().getFullYear());