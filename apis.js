const axios = require('axios').default;
const jsonexport = require("jsonexport/dist");
const fs = require('fs');


axios.get('https://api.publicapis.org/entries')
  .then(function (response) {
    json = response.data.entries;
	jsonexport(json, function(err, csv){
		if (err) return console.error(err);
		console.log(csv);
		fs.writeFile('data.csv', csv,function (err,data) {
			if (err) {
				return console.log(err);
			}
		});
	});
  })
  .catch(function (error) {
    // incase we haven't found the data
    console.log(error);
  });