```
                _ _         _
 __      ____ _| | | ___   (_)___
 \ \ /\ / / _` | | |/ _ \  | / __|
  \ V  V / (_| | | |  __/_ | \__ \
   \_/\_/ \__,_|_|_|\___(_)/ |___/
                         |__/
```

[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]

[travis-image]: https://travis-ci.com/bingdian/walle.js.svg?token=dpYsGb2Yon1Vjqq1M165&branch=master&style=flat-square
[travis-url]: https://travis-ci.com/bingdian/walle.js
[codecov-image]: https://img.shields.io/codecov/c/token/2kim6O4rpq/github/bingdian/walle.js.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/bingdian/walle.js
[david-image]: https://david-dm.org/bingdian/walle.js.svg?style=flat-square
[david-url]: https://david-dm.org/bingdian/walle.js

A web framework base on egg.js

## QuickStart

```bash
$ npm install
$ npm test
```

```js
// {app_root}/index.js
require('wallejs').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/bingdian/walle.js/issues).

