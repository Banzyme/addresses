const request = require('request')

module.exports = {
    /*
    ** ADAPTOR PATTERN: Converted JSON to URL then passed to Google Maps API
    */
    lookupAddress : function(url){
        //This method returns a promise which gets resolved or rejected based on the result from the API
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              resolve(body)
            });
        })
    }
}