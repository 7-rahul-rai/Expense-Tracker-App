const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./models/index')
const port = process.env.PORT || 3000;
const conn = require('./models/index')
const cors = require('cors')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({origin: 'http://localhost:3000', // Replace with your front-end domain
optionsSuccessStatus: 200}))


app.use(express.static('public'));

const erouter = require('./routes/eroutes.js')

app.use(erouter)
sequelize.sync()

.then(result=>{
    app.listen(port,()=>{
        console.log(`app is running on the ${port}`)
    })
})
.catch(err=>console.log(err))

