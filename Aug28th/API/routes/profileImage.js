const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multerConfig');
const ProfileImage = require('../models/profileImage');

router.post('/', multerConfig.profileImageUpload.array('images', 2), async (req, res) => {
  try {
    const files = req.files;
    await Promise.all(files.map(file => {
      return new ProfileImage({
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size
      }).save();
    }));
    res.send('Profile images uploaded and saved successfully!');
  } catch (error) {
    console.error('Error uploading profile images:', error);
    res.status(500).send('Error uploading profile images');
  }
});

module.exports = router;
