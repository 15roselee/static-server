const  fs=require('fs')

// 读数据库
const userString=fs.readFileSync('./db/user.json').toString()
const userArray=JSON.parse(userString)
console.log(userString);
console.log(userArray);

// 写数据库
const user3={"id":3,"name":"wai","age":80}
userArray.push(user3)
const string=JSON.stringify (userArray)
fs.writeFileSync('./db/user.json',string)