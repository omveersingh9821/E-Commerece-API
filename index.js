const express = require('express');
const app = express();
const PORT = 7200;

const db = require('./config/mongoose.js');


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));


//routes
app.use('/api/product',require('./routes/product'));
app.use('/api/delete',require('./routes/delete'));
app.use('/api/update',require('./routes/update'));



app.listen(PORT,(error)=>{
    if(error){
        console.log('Errorn in server',error);
    }
    console.log(`Server successfully running on port ${PORT}`);
})