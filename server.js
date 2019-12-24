const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const items = require('./routs/api/items');

// //body perser middleware.......
 app.use(bodyparser.json());
// //db config....
 const db =require('./config/keys').mongoURI;
// //db = useNewUrlParser true,
// // connect to mongo db...
mongoose
    .connect(db, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true},(err)=>{if(err){
        process.exit(1); console.log('unable to connect database!!');
    }
        else{
            console.log('successfully connect!!!');
        }});
 //.then(()=>console.log('mongodb connected!!!!'));
 //.catch(err=> console.log(err));
    
        app.use('/api/items',items);
 const port = process.env.PORT || 5000;
 app.listen(port, ()=>console.log(`Server started on port ${port}`));

//method(1)
// const con = require('mongodb').MongoClient;
// con.connect('mondodb://localhost:27017/malli',(err,db)=>{ 
//     if(err){
//         return console.log('err occoured!!!');  //return statement stop the executing rest of the code in arrow function.
//     }
//     console.log('database connected to the server!!!');
//     db.close(); 
// }  
// );
//~~~~~~~~~~~~~~~~
//method(2)
// const con = require('mongoose');
// con.connect('mongodb://localhost:27017/malli');
// mongoose.connection.once(function(useUnifiedTopology){console.log('connection success')}, (err, db) => {
//     if (useUnifiedTopology){
//         return console.log('err occoured!!!');  
//     }
//      console.log('database connected to the server!!!');
//     db.close(); 
// });