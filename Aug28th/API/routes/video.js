// const express = require('express');
// const router = express.Router();
// const multerConfig = require('../config/multerConfig');

// router.post('/', multerConfig.videoUpload.single('video'), (req, res) => {
//   res.send('Video uploaded successfully!');
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multerConfig');
const Video = require('../models/video');

router.post('/', multerConfig.videoUpload.single('video'), async (req, res) => {
  try {
    const file = req.file;
    await new Video({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size
    }).save();
    res.send('Video uploaded and saved successfully!');
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).send('Error uploading video');
  }
});

module.exports = router;
