const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  filename: { type: String, required: true },
  path: { type: String },
  mimetype: { type: String },
  size: { type: Number },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);
