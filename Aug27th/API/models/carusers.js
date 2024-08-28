// const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");

// const CarUserSchema = new mongoose.Schema({
//     username: { 
//         type: String, 
//         required: true, 
//         unique: true 
//     },
//     email: { 
//         type: String, 
//         required: true, 
//         unique: true 
//     },
//     age: { 
//         type: Number, 
//         required: true 
//     },
//     gender: { 
//         type: String, 
//         enum: ['male', 'female'], 
//         required: true 
//     },
//     dob: { 
//         type: Date, 
//         required: true 
//     },
//     city: { 
//         type: String, 
//         required: true 
//     },
//     profession: { 
//         type: String,
//         enum: ['IT', 'Sales', 'Unemployed'],
//         required: true
//     },
//     password: { type: String, required: true }
// });

// CarUserSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// const CarUser = mongoose.model('CarUser', CarUserSchema);
// module.exports = CarUser;


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CarUserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
  },
  age: { 
    type: Number, 
    required: true,
  },
  gender: { 
    type: String, 
    enum: ['male', 'female'], 
    required: true 
  },
  dob: { 
    type: Date, 
    required: true 
  },
  city: { 
    type: String, 
    required: true 
  },
  profession: { 
    type: String,
    enum: ['IT', 'Sales', 'Unemployed'],
    required: true
  },
  password: { 
    type: String, 
    required: true 
  }
});

CarUserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

CarUserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

const CarUser = mongoose.model('CarUser', CarUserSchema);
module.exports = CarUser;
