// 引入js文件
const common = require('./common.js')
//.js可以省略，默认是找.js文件
const utils = require('./utils')

//css文件引入
require('./style.css')

common.info('hello common ' + utils.add(1, 2))
