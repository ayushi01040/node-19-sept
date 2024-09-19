const express=require('express');
const router=express.Router();
const studentcontroller=require('../controllers/studentcontroller')

router.post('/add/user',(req,res)=>{
    console.log("here")
    studentcontroller.addStudent(req,res);
})
router.get('/users',(req,res)=>{
    studentcontroller.getStudent(req,res);
})
module.exports=router;