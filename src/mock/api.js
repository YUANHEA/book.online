// import Mock from 'mockjs'
// Mock.mock('/user/login', {
//   'status': 0,
//   'data': {
//     'id': 12,
//     'username': 'admin',
//     'email': 'admin@51purse.com',
//     'phone': null,
//     'role': 0,
//     'createTime': 1479048325000,
//     'updateTime': 1479048325000
//   }
// })
import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  'status': 0,
  'data': {
    // mock语法，能帮助造假数据
    'id|10001-11000': 0, // 产生10001-11000之间随机数
    'username': '@cname', // 产生随机中文名
    'email': 'admin@51purse.com',
    'phone': null,
    'role': 0,
    'createTime': 1479048325000,
    'updateTime': 1479048325000
  }
})
