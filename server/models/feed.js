const mongoose = require("mongoose");
const Schema = mongoose.Schema

const InterviewSchema = new Schema({
    Name: {
        type: String,
        required: true
      },
      LastName: {
        type: String,
        required: true
      },
      Description: {
        type: String,
        required: true
      },
      PhoneNumber: {
        type: String,
        required: true
      },
      Email:{
        type:String,
        required:true
      },
      Date: {
        type: Date,
        required: true
      },
      Time: {
        type:String,
        required: true
      }
})

module.exports = mongoose.model('Interview',InterviewSchema)