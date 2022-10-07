module.exports = (ctx) => ({
  //parser: 'sugarss',
  map: { inline: false },
  plugins: {
    'postcss-import':{},
    'postcss-preset-env': {
      preserve: false,
      stage: 2,
      autoprefixer: { grid: "autoplace" },
    },
    'cssnano': ctx.env === 'production' ? {} : false,
  },
});
