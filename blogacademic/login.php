<?php
session_start();
    require_once("connect.php");

    

    if(isset($_POST['button'])){
        $email = $_POST['email'];
        $password = $_POST['password'];

        //xoa cac html thua
        $email = strip_tags($email);
        $email = addslashes($email);
        $password = strip_tags($password);
        $password = addslashes($password);

        if($email == "" || $password == ""){
            echo "ban can nhap tai khoan mat khau";
        }else{
        $sql = "select * from dangky where email = '$email' and password = '$password'";
        $query = mysqli_query($conn, $sql);
        $num_rows = mysqli_num_rows($query);
        if($num_rows == 0){
            echo "khong the dang nhap";
        }else{
            $_SESSION['email'] = $email;
            header('Location: index.php');
        }
        }
    }
?>

<html>
    <head>
        <title>Blog | Academic</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"></link>
        <link href="css/login.css" rel="stylesheet" type="text/css"/>
    </head> 
    <body> 
        <div class="type-23">
            <div class="container">
                <div class="logo-header">
                    <a href="index.php" title="Academic - Đăng nhập">
                        <i class="fas fa-user-graduate"></i> 
                        academic
                    </a>
                </div>
                <div class="new-acc"><a href="signup.php">Đăng ký tài khoản mới</a></div>
                <div class="title-lg">
                    <h1>Nền tảng giáo dục trực tuyến</h1>
                    <p>Nơi chia sẻ, khám phá và học hỏi bất cứ điều gì</p>
                </div>
                <div class="gg-fb">
                    <p>Đăng ký nhanh với</p>
                    <a href="#" title="Đăng nhập với Facebook">
                        <i class="fab fa-facebook-square"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="#" title="Đăng nhập với Google" style="background-color: #df322f;">
                        <i class="fab fa-google"></i>
                        <span>Google</span>
                    </a>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="container">
                            <div class="login">
                                <div class="entry-login">
                                    <p>Hoặc đăng nhập bằng</p>
                                    <form action="login.php" method="POST">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="email" id="username" placeholder="Email hoặc số điện thoại">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" id="password" placeholder="Mật khẩu">
                                        </div>
                                        <div class="dangnhap">
                                            <button type="submit" name="button" value="login" class="button">Đăng nhập</button>
                                            <p class="lost-pass">
                                                <a href="lostpassword.php">Quên mật khẩu?</a>
                                            </p>
                                        </div>
                                        
                                        <div class="checkbox">
                                            <label>
                                              <input type="checkbox"> Remember me</input>
                                          </label>
                                      </div>  
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                    <div class="hinh">
                        <img src="img/graduation.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
        <?php if((!empty($_POST['username'])) &&(!empty($_POST['password']))):?>
            <?php foreach ($accou as $Item):?>
                 <?php if($Item['username'] == $_POST['username'] && $Item['password'] == $_POST['password'])
                    {
                     $_SESSION['ab']= $_POST['username'];
                     $_SESSION['x'] = 1;
                     header('Location: index.php');
                    }
                    ?>
                <?php endforeach; ?>
                     <?php
                    if($Item['username'] == $_POST['username'] && $Item['password'] == $_POST['password'])
                    { }
                    else
                         echo " <h1 class = 'h1' > Tài khoản không chính xác!!!</h1>";?>
        <?php endif;?>
    </body>
</html>




    