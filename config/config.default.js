'use strict';

module.exports = () => {
  const exports = {};

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.html': 'nunjucks'
    }
  };

  return exports;
};
