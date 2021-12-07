const express = require('express')
const Routes = require('./Routes')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const PORT = 8000
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);