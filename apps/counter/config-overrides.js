/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { override, babelInclude } = require('customize-cra');

module.exports = (config, env) => {
  const root = '../..';
  const packages = `${root}/packages`;
  const paths = [`${packages}/components`, `${packages}/stores`];

  return Object.assign(
    config,
    override(babelInclude([path.resolve('src'), paths.map(package => fs.realpathSync(`${package}/src`))]))(config, env),
  );
};
