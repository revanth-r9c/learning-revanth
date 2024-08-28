const multer = require('multer');
const path = require('path');

const profileImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile_images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only .jpg, .jpeg, and .gif formats are allowed!'));
};

const resumeFilter = (req, file, cb) => {
  const allowedTypes = /doc|docx|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only .doc, .docx, and .pdf formats are allowed!'));
};

const videoFilter = (req, file, cb) => {
  const allowedTypes = /mp4|wmv/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }  cb(new Error('Only .mp4 and .wmv formats are allowed!'));
};

module.exports = {
  profileImageUpload: multer({ storage: profileImageStorage, fileFilter: imageFilter }),
  resumeUpload: multer({ storage: resumeStorage, fileFilter: resumeFilter }),
  videoUpload: multer({ storage: videoStorage, fileFilter: videoFilter }),
};
