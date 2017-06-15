<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 4:07
 */

//用户名：phonenum
//密码： psw

//支持跨域访问
header('Access-Control-Allow-Origin: *');

//先接受从denglu.html中传过来的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];

class  Res {
    public $status;
    public $msg;
}

$conn = new mysqli("127.0.0.1","root","","mydb") or die("连接失败");
$sql = "select * from user where username='$username' and pwd='$pwd'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    //登录成功
    $res = new Res();
    $res->status = 1;
    $res->msg = "登录成功";
    echo  json_encode($res);
}
else {
    //登录失败，用户名或密码错误
    $res = new Res();
    $res->status = 0;
    $res->msg = "用户名或密码输入有误， 请检查后再登录！";
    echo  json_encode($res);
}
$conn->close();












