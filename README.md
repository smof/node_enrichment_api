<b>Enrichment API testing only</b>
<br/>
Basic nodeJS API that takes a user ID and returns additional attribute payload - if user is over 16 or not.  Users stored in hard code.
<br/>
Install nodeJS.  Run npm install in app directory to install dependencies.  To start run node server.js.  Listens on port 3000
<br/>
<br/>
<b>Example - true</b>
<br/>
curl -H "Content-Type: application/json" --request POST --data '{"user":"smof"}' "http://localhost:3000/lookup"
<br/>
{
  "over16": true
}
<br/>
<br/>
<b>Example - false</b>
<br/>
curl -H "Content-Type: application/json" --request POST --data '{"user":"jdoe"}' "http://localhost:3000/lookup"
<br/>
{
  "over16": false
}
