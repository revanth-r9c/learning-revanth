const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multerConfig');
const Resume = require('../models/resume');

router.post('/', multerConfig.resumeUpload.single('resume'), async (req, res) => {
  try {
    const file = req.file;
    await new Resume({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size
    }).save();
    res.send('Resume uploaded and saved successfully!');
  } catch (error) {
    console.error('Error uploading resume:', error);
    res.status(500).send('Error uploading resume');
  }
});

module.exports = router;
