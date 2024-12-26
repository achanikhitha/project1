
import mongoose from 'mongoose';
// Define the Document Schema
const documentSchema = new mongoose.Schema({
  user:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  reviewers: [{
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: false,
  }],
  approver: [{
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: false,
  }],
  status: {
    type: String,
    required: true
  },
    date: {
      type: Date,
      default: Date.now,
    },
    signature:
      [{
        // type: mongoose.Schema.Types.ObjectId,
        type:String,
        required: false,
      }],
    comments: [{
      // type: mongoose.Schema.Types.ObjectId,
      type:String,
      required: false,
    }],}, 
  {
  timestamps: true,
  
});

// Ensure no OverwriteModelError by checking if model already exists
const modelName = 'DocumentData'; // Replace with your model 


const Document = mongoose.models[modelName] || mongoose.model(modelName, documentSchema);
export default Document;




// const documentSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     reviewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     status: { type: String, required: true, enum: ['Pending Review', 'Approved', 'Rejected'] },
//     comments: [{ type: String }],
// });

// module.exports = mongoose.model('Document', documentSchema);

