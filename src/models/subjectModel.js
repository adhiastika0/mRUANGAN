const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Please add the name'],
    },
    password: {
      type: String,
      required: [true, 'Please add the user password'],
    },
    department: {
      type: String,
      required: [true, 'Please add the user department'],
    },
    semester: {
      type: Number,
      required: [true, 'Please add the user semester'],
    },
    role: {
      type: String,
      required: [true, 'Please add the user role'],
    },
    profile_pict: {
      type: String,
      default: null,
      require: false,
    },
  },
  { collection: 'USERS' }
);

module.exports = mongoose.model('User', userSchema);
