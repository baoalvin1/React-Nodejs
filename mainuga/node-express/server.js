const express = require("express");
//var router = express.Router();
const myPythonScriptPath = '/Users/alvinbao/Desktop/mainuga/api/routes/script.py';
const app = express();
const cors = require('cors');
const arg1 = "Lakers";
const arg2 = "Heat";
//const node = this.myRef.current;
//console.log(node);
//import {TeamForm} from "/Users/alvinbao/Desktop/mainuga/ugahacks/src/components/TeamForm.js"

app.use(express.static('mainuga'));

app.post('/', function (req, res,next) {
  const {name} = req.body.name;
  console.log(body);
})
//app.get('/api/greeting', (req, res) => {
  //const name = req.query.name || 'World';
  //res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
//});
app.get('/', (req, res) => {

 })
 module.exports = app;

function myFunction() {
  var { spawn } = require('child_process');
  var pyProg = spawn('python', ['./script.py', arg1, arg2]);

  pyProg.stdout.on('data', function(data) {

      console.log(data.toString());
      res.send(data.toString());

  });
}

app.listen(4000, () => console.log('Application listening on port 4000!'))
