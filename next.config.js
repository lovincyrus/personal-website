const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// module.exports = {
//   target: 'serverless'
// }

const nextConfig = {
  target: 'serverless'
}

module.exports = withPlugins([
  [
    optimizedImages,
    {
      imagesFolder: 'img',
    },
  ],

], nextConfig);
