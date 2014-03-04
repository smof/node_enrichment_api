//require statgements
var express = require('express');
var app = express();

//Authentication function ////////////////////////////////////////////////////////////
lookup = function(req, res) {

	//set unknown by default
	var over16 = "unknown";
	
	//set response obj
	var responseObj = {};
	
        //logging
        console.log('Enrichment request received');
        
        //split out body attributes
        requestUser = req.body.user;
                
        //noddy conditional check // switch to mongo or 
        if (requestUser === "smof") {
        
        	over16 = true;
        
        }
        
        if (requestUser === "jdoe") {
        
        	over16 = false;
        
        }
        
        //update response object
        responseObj.over16 = over16;
        res.send(responseObj);

        console.log('Response sent');
};
///////////////////////////////////////////////////////////////////////////////////////


//Express API setup ///////////////////////////////////////////////////////////////////
//for parsing POST payloads
app.use(express.bodyParser());

//authenticates user - url maps to function
app.post('/lookup', lookup);

//set listener port
var port = 3000;

//start listener on HTTP port
app.listen(port);

//startup log
console.log('Enrichment API Listening on port ' + port + '...');
//Express API setup ///////////////////////////////////////////////////////////////////


