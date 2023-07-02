const Interview = require("../models/feed")
const nodemailer = require('nodemailer');
exports.getInterviews = (req,res,next)=>{
    Interview.find()
    .then((interviews) =>{
        res.status(201).json({
            interviews:interviews
        })
    })
}

exports.addInterview = (req,res,next)=>{
    const Name = req.body.Name
    const LastName = req.body.LastName
    const Description = req.body.Description
    const PhoneNumber = req.body.PhoneNumber
    const Email = req.body.Email
    const Date = req.body.Date
    const Time = req.body.Time

    const interview = new Interview({
        Name:Name,
        LastName:LastName,
        Description:Description,
        PhoneNumber:PhoneNumber,
        Email:Email,
        Date:Date,
        Time:Time
    })
    interview
    .save().
    then((interview)=>{
        res.status(200).json({
            interview:interview
        })
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'',
                pass:''
            }
        })
        var mailoptions ={
            from:'',
            to:`${interview.Email}`,
            subject:
            `Hello ${interview.Name} ${interview.LastName} , This is To confirm the meeting at our Dbayeh Offices .`,
            html:
            `<p>please find below our detailed address.</p>
            <p>Our office is located on Level L1 of the NDU Innovation & Enterprise Building,</br> Saint Rita Street, Dbayeh, Lebanon  you may enter this link for Google Maps directions</br><a href="https://goo.gl/maps/dmmPzPrS5244fBKP8">https://goo.gl/maps/dmmPzPrS5244fBKP8</a>.</br>
            You may park your car in the parking lot owned by St. Rita, next to the building. If asked, kindly inform security that you are visiting Ad Creators.</p>`
        }
        transporter.sendMail(mailoptions,(err,info)=>{
            if(err){
                console.log(err);
            }else{
                console.log('email send' +info.response);
            }
        })
    }).catch((error) => {
        console.log('Error:', error);
        res.status(500).json({
          error: 'An error occurred while adding the interview.'
        });
      });
}

exports.getInterview=(req,res,next)=>{
    const id = req.params.id
    Interview.findById(id).then((interview) =>{
       res.status(201).json({
        interview:interview
       }) 
    })
}

exports.updateInterview=(req,res,next)=>{
    const Name = req.body.Name
    const LastName = req.body.LastName
    const Description = req.body.Description
    const PhoneNumber = req.body.PhoneNumber
    const Date = req.body.Date
    const Time = req.body.Time
    const id = req.params.id
    Interview.findById(id)
    .then((oldInterview) =>{
        oldInterview.Name = Name,
        oldInterview.LastName = LastName,
        oldInterview.Description = Description,
        oldInterview.PhoneNumber = PhoneNumber,
        oldInterview.Date = Date,
        oldInterview.Time = Time

        return oldInterview.save()
    }).then(interviewUpdated =>{
        res.status(201).json({
            interview:interviewUpdated
        })
      
    }).catch((error) => {
        console.log('Error:', error);
        res.status(500).json({
          error: 'An error occurred while updating the interview.'
        });
      });
}

exports.deleteInterview=(req,res,next)=>{
    const id = req.params.id;
    Interview.findById(id)
    .then((interview)=>{
        if(!interview){
          
        }
        return Interview.findByIdAndRemove(id);
    }).then(()=>{
        res.json({message:"Deleted"})
    }).catch(err =>{
       
    }) 
}

exports.deleteInterviews=(req,res,next)=>{
    Interview.deleteMany({})
    .then(() => res.json({message:'All items deleted'}))
    .catch((error) => console.error('Error deleting items', error));
}