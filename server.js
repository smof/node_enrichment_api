//require statgements
var express = require('express');
var app = express();

//Authentication function ////////////////////////////////////////////////////////////
lookup = function(req, res) {

	//set unknown by default
	var over16 = "unknown";
	
	//pull in req value
	var requestUid = req.params.uid;
	
	//set response obj
	var responseObj = {};
	
        //logging
        console.log('Enrichment request received for uid: ' + requestUid);
        
                   
        //noddy conditional check // switch to mongo or 
        if (requestUid === "smof") {
        
        	over16 = "true";
        
        }
        
        if (requestUid === "jdoe") {
        
        	over16 = "false";
        
        }
        
        //update response object
        responseObj.over16 = over16;
        res.send(responseObj);

        console.log('Response sent: ' + JSON.stringify(responseObj));
};
///////////////////////////////////////////////////////////////////////////////////////


//Express API setup ///////////////////////////////////////////////////////////////////
//for parsing POST payloads
app.use(express.bodyParser());

//authenticates user - url maps to function
app.get('/lookup/:uid', lookup);

//set listener port
var port = 3000;

//start listener on HTTP port
app.listen(port);

//startup log
console.log('Enrichment API Listening on port ' + port + '...');
//Express API setup ///////////////////////////////////////////////////////////////////


