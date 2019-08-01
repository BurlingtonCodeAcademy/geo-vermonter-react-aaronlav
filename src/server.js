const express = require('express');
const app = express();
const $path = require('path');
const fs = require('fs');

const port = process.env.PORT || 5000;
const dataPath = $path.resolve('./data')

app.get('/message', (req, res) => {
  console.log('Requested path: ', req.path);
  // console.log('Data Path is: ', dataPath);
  const theFile = $path.join(dataPath, 'message.json');
  const buffer = fs.readFileSync(theFile);
  const json = JSON.parse(buffer);
  // console.log('the JSON: ', json);
  // console.log('The file to send: ', theFile);
  res.type('json').send(json);
})

app.post('/message',
express.urlencoded(),
(req, res) => {
  console.log('POST received, body is: ', req.body);
  const theFile = $path.join(dataPath, 'message.json');
  fs.writeFileSync(theFile, JSON.stringify(req.body));
  req.statusCode(201).send('success');
})


//   res.type('json').send({
//     message:`Hey class react is cool ${(new Date()).toString()}`
//   })
// })

res.type('json').sendFile(dataPath + '/message.json')
// })


app.listen(port, (req, res) => {
console.log (`Listening on port => ${port}`)
});