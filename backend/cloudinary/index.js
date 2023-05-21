const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const crypto = require('crypto');
const mime = require('mime-types')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    timeout: 60 * 60 * 1000,
});

const mimeToExtension = {
  'audio/mpeg': 'mp3',
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    let format = mime.extension(file.mimetype);

    // Use the mapping if the MIME type doesn't match the expected extension
    if (!format || format !== file.originalname.split('.').pop()) {
      format = mimeToExtension[file.mimetype];
    }

    const originalName = file.originalname.split('.').slice(0, -1).join('.');
    const randomString = crypto.randomBytes(10).toString('hex');
    const public_id = `${originalName}_${randomString}`;

    return {
      folder: 'Materials',
      public_id: public_id,
      resource_type: 'auto',
      format: format,
      eager: { eager_async: true },
      overwrite: false
    };
  }
});

  
module.exports = {
    cloudinary,
    storage,
}