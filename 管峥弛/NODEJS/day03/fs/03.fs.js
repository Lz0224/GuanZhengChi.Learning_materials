
var fs = require('fs');

//写文件
//没有规则创建，有则覆盖
//mode 设置读写权限 r w x
fs.writefile("./test.md","android",{encoding:"utf8",mode: 0o444},(err)=>{
  console.log(err);
});

//fs.writefileSync()
