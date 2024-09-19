const express =require('express');
const app=express();
const connect =require('./connection');
const Student=require('./routes/student');
connect();
app.use(express.json());
app.use(Student);





app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("server is running");
    }
})