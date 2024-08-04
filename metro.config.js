const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);



// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const path = require('path');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//   resolver: {
//     blockList: [
//       // Add patterns to block files or directories if needed
//       /.*\/node_modules\/react-native\/node_modules\/metro-runtime\/src\/polyfills\/require\.js/,
//     ],
//   },
// };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
