//include libraries

const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

//establish cnnection
mongoose.connect(
  
    db_url,
    {
        useNewUrlParser: true,
         useUnifiedTopology: true ,
         useCreateIndex: true,
         useFindAndModify:true
    },
    (error,link) =>{
        //check error
        assert.strictEqual(error,null,"Db Fail...");
        //console.log(error);  

        //db connect success
        console.log("connection establish...");
    
    }

);