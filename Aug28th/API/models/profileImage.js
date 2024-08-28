const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileImageSchema = new Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  mimetype: { type: String, required: true },
  size: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProfileImage', profileImageSchema);
