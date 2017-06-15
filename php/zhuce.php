<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 12:39
 */
//用户名：username
//密码: pwd

//支持跨域访问
header('Access-Control-Allow-Origin: *');

//先获取从Register.html中提交过来的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];

class  Res{
    public $status;
    public $msg;
}

//先判断是否存在相同的用户名
$conn = new mysqli("127.0.0.1", "root", "", "mydb") or die("连接失败");

$sql = "select * from user where username='$username'";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    //有数据， 存在相同用户
    $res = new Res();
    $res->status = 0;
    $res->msg = "该用户已经存在！";
    echo json_encode($res);
}
else{
    $conn->close();
    //没有数据, 可以注册
    //插入数据到users表中
    $conn2 = new mysqli("127.0.0.1", "root", "", "mydb") or die("连接失败");
//    $rand = rand(); //随机值
    $sql = "insert into user(username,pwd) values('$username','$pwd')";
    if ($conn2->query($sql)){
        $res = new Res();
        $res->status = 1;
        $res->msg = "注册成功！";
        echo json_encode($res);
    }
    else {
        $res = new Res();
        $res->status = 2;
        $res->msg = "注册失败";
        echo json_encode($res);
    }
    $conn2->close();
}

























