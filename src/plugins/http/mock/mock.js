//引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;

//mock 模拟数据
const LoginData = require('./json/Login.json');
const RecruitData = require('./json/Recruit.json');

//登录获取token
Mock.mock('/oauth/token','post',(req,res)=>{
    res.json(LoginData.Token);
})
//登录获取用户名再次授权
Mock.mock('/users/CurrentUser','post',(req,res)=>{
    res.json(LoginData.CurrentUser);
})
//退出
Mock.mock('/oauth/logout','get',(req,res)=>{
    res.json(LoginData.LogOut);
})


//获取招聘列表
Mock.mock('/getRecruitList','post',(req,res)=>{
    console.log(req)
    res.json(RecruitData.List);
})