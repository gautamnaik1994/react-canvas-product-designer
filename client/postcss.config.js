module.exports = {
  plugins: [
    require('postcss-utilities')({}),
    require('postcss-cssnext')({
      browserslist: [
        '> 1%',
        'last 2 versions',
      ],
      features: {
        customProperties: false,
      },
    }),
  ],
};
// module.exports = {
//   plugins: {
//     'postcss-cssnext': {
//       browserslist: [
//         '> 1%',
//         'last 2 versions',
//       ],
//       features: {
//         customProperties: false,
//       },
//     },
//     'postcss-utilities':{}
//   },
// };
