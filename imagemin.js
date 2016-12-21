const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['organizers/*.jpg'], 'build/images', { use: [imageminMozjpeg()] }).then(() => {
  console.log('Images optimized');
});
