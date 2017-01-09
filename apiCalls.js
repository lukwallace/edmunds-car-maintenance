// http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}
var populateMake = function(year) {
  console.log(year);
  $.ajax({
    method: "GET",
    url: "http://api.edmunds.com/api/vehicle/v2/makes",
    data: { fmt: "json", year: +year, api_key: API_KEY }
  })
  .done(function(data) {
    console.log(data)
  });

};