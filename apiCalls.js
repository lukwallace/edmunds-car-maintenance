// http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}
var getMake = function(year, callback) {
  //Some dummy data to test on  -- only 25 CPD
  var dummyData = {
    makes: [
      { 
        name: 'Something',
        niceName: 'something',
        models: [{ name: 'something Ultra', niceName: 'something-ultra'}]
      },
      {
        name: 'Another Car',
        niceName: 'another-car',
        models: [{ name: 'And One', niceName: 'and-one'}, { name: 'Clever Car Name', niceName: 'clever-car'}]
      }
    ]
  };
  // callback(dummyData);

  $.ajax({
    method: 'GET',
    url: 'http://api.edmunds.com/api/vehicle/v2/makes',
    data: { fmt: 'json', year: +year, api_key: API_KEY }
  })
  .done(function(data) {
    callback(data);
  });
};

//https://api.edmunds.com/api/vehicle/v2/lexus/rx350/2011?fmt=json&api_key={api key}
var getDetails = function(year, make, model, callback) {
  $.ajax({
    method: 'GET',
    url: 'http://api.edmunds.com/api/vehicle/v2/' + make + '/' + model + '/' + year,
    data: { fmt: 'json', api_key: API_KEY }
  })
  .done(function(data) {
    callback(data);
  });
};

//https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid={model year ID}&fmt=json&api_key={api key}
var getSchedule = function(id, callback) {
  $.ajax({
    method: "GET",
    url: 'https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid',
    data: { fmt: "json", modelyearid: id, api_key: API_KEY }
  })
  .done(function(data) {
    callback(data);
  });
};
