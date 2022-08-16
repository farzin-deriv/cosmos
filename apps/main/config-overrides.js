/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { override, babelInclude } = require('customize-cra');

module.exports = (config, env) => {
  const root = '../..';
  const apps = `${root}/apps`;
  const packages = `${root}/packages`;
  const paths = [`${packages}/components`, `${packages}/stores`, `${apps}/counter`];

  return Object.assign(
    config,
    override(babelInclude([path.resolve('src'), paths.map(package => fs.realpathSync(`${package}/src`))]))(config, env),
  );
};
