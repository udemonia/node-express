const helmet = require("helmet");
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const router = require('../routes/routes')
const app = express();


//path for PWD
const publicDirectoryPath = path.join(__dirname,'../public')

//*-------------------------------------------------------------
//?                    Express Middleware
//*-------------------------------------------------------------

// logging
app.use(morgan('tiny'))

//secure headers
app.use(helmet());

// parse incoming json - content-type application/json
app.use(express.json())

// url encoded parsing - w/ extended false option
app.use(express.urlencoded({extended:false}))

//*-------------------------------------------------------------
//?                    Express Routes
//*-------------------------------------------------------------

app.use(router)

//*-------------------------------------------------------------
//?                    Express Ports
//*-------------------------------------------------------------


port = 4001

app.listen(port, ()=>{
    console.log("Listening on ", port)
})

