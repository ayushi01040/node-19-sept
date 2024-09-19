const Student=require('../models/Student');

async function addStudent(req,res) {
    try{
        console.log(req.body,'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log("data saved sucessfully");
        res.end("Saved successfully.....");
    }catch(err){
        console.log(err);
    }
}
const getStudent=async function (req,res){
    try{
        let students= await Student.find({});//select*from table query
        console.log(students);
        res.send(students);


    }catch(err){
        console.log(err);

    }

}
module.exports={
    addStudent,
    getStudent
}