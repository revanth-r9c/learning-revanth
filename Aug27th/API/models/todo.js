// const mongoose = require('mongoose');

// const TodoSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     status: { type: String, required: true }
// });

// module.exports = mongoose.model('Todo', TodoSchema);

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
