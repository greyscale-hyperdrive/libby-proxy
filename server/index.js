const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();
const port = process.env.PORT || 8080;

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public')));

app.use('/overviews', proxy('http://cavatableoverviews-env.5sves92ky9.us-west-1.elasticbeanstalk.com/'));
app.use('/photos', proxy('http://cavatablephotos-env-1.23pb2q7mim.us-east-2.elasticbeanstalk.com/'));
app.use('/menus', proxy('http://cavatablemenus-env.5sves92ky9.us-west-1.elasticbeanstalk.com/'));
app.use('/reviews', proxy('http://CavatableFec-env.psexkp69kr.us-west-1.elasticbeanstalk.com/'));
app.use('/reservations', proxy('http://cavareservations.us-west-2.elasticbeanstalk.com/'));

app.listen(port, () => console.log(`Listening on port ${port}!`));