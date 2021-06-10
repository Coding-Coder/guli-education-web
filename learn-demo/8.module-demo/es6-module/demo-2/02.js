//调用01.js的方法，引入01.js文件，进行调用
import m from './01.js'

//调用方法
m.getList()
m.update()

//babel转码：在根目录下执行：babel es6-module/demo-2 -d es6-module-dist/demo-2