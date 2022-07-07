const request = require("request"); // library to make the HTTP request 

const fs = require('fs'); // (file system) module to write the file

request('http://example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile('./downloadedFile.html', body, err => { // writing responce body to a file in this folder
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  
});