const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { CLDNRY_CLOUD_NAME, CLDNRY_API_KEY, CLDNRY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLDNRY_CLOUD_NAME,
  api_key: CLDNRY_API_KEY,
  api_secret: CLDNRY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "./../data/img_our_friend"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({
  storage,
  limits: {
    fileSize: 10485760,
  },
});

async function uploadToCloud(filename, storeImage) {
  const cloudres = cloudinary.uploader.upload(storeImage, {
    public_id: filename,
  });
  return cloudres
    .then((data) => {
      return data.secure_url;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function urlToAvatar(req, res, next) {
  const filename = req.file.filename;
  const filepath = req.file.path;
  const storeImage = path.resolve(filepath);

  try {
    const url = await uploadToCloud(filename, storeImage);
    await fs.unlink(filepath);
    return res.status(200).json({ urlAvatar: url });
  } catch (error) {
    console.error("Error", error.message);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  uploadMiddleware,
  urlToAvatar,
};
