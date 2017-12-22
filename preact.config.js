const svgConfig = {
  test: /\.svg$/,
  loader: 'svg-inline-loader',
  options: {
    classPrefix: true,
  },
};
// We have to remove svg from url-loader's pattern in order to avoid SVG files
// being base64-encoded; we want to inline the svg itself
const urlLoaderConfigTest = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i;
export default (config, env, helpers) => {
  const { rule } = helpers.getLoadersByName(config, 'url-loader')[0];
  rule.test = urlLoaderConfigTest;
  config.module.loaders.push(svgConfig);
};
