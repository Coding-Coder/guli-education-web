'use strict';

var _ = require('./01.js');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//调用方法
_2.default.getList(); //调用01.js的方法，引入01.js文件，进行调用

_2.default.update();

//babel转码：在根目录下执行：babel es6-module/demo-2 -d es6-module-dist/demo-2