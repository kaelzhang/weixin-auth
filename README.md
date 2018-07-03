[![Build Status](https://travis-ci.org/kaelzhang/weixin-auth.svg?branch=master)](https://travis-ci.org/kaelzhang/weixin-auth)
[![Coverage](https://codecov.io/gh/kaelzhang/weixin-auth/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/weixin-auth)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/weixin-auth?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/weixin-auth)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/weixin-auth.svg)](http://badge.fury.io/js/weixin-auth)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/weixin-auth.svg)](https://www.npmjs.org/package/weixin-auth)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/weixin-auth.svg)](https://david-dm.org/kaelzhang/weixin-auth)
-->

# weixin-auth

Wechat Authorization

## Install

```sh
$ npm install weixin-auth
```

## Usage

```js
import {WechatMP, mock} from 'weixin-auth'

const mp = new WechatMP({
  appId: '<wechat mini-program appid>',
  secret: '<wechat mini-program secret>'
})

await mp.auth(code)
// {
//   openid: ...,
//   unionid: ...,
//   session_key: ...
// }

// We can mock the result for debugging purpose
mock({
  openid: 'a',
  unionid: 'b',
  session_key: 'c'
})

await mp.auth(code)
// {
//   openid: 'a',
//   unionid: 'b',
//   session_key: 'c'
// }
```

## License

MIT
