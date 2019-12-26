<?php 
session_start();
    if(empty($_SESSION['email'])){
    $_SESSION['username']='Đăng nhập';
    } 
?>

<?php include './header.php';?>

<div class="page-blog">
  <div class="site-inner">
    <section id="top-bar">
      <div class="container topbar-dropdown">
        <div class="pull-left">
          <ul class="address-block">
            <li>
              <i class="fa fa-phone"></i>
              <a href="tel:+84-396093624" title="396093624">+84-396093624</a>
            </li>
            <li class="address">
              <i class="fa fa-map-marker"></i> Saigon, Vietnam
            </li>
            <li>
              <i class="fa fa-envelope"></i> nangpham268@gmail.com
            </li>
          </ul>
        </div> 
        <div class="pull-right">                   
          <ul class="menu-login">
            <?php if(!empty($_SESSION['email']) == 1): ?>
            
            <li class="menu-dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="color: red;"><?php echo $_SESSION['email']; ?>
             <i class="fas fa-sort-down"></i></a>
            <ul class="sub-menu" style="min-width: 135px; font-size: 15px;">
             <li>
                    <a href="logout.php">
                    <i class="fas fa-user"></i> Đăng xuất </a>
                  </li>
            </ul>
          </li>
            <?php else :?>
              <li id="signin"> 
                <a href="login.php">Đăng nhập</a>
              </li>
              <li id="signup">
                <a href="signup.php">Đăng ký</a>
              </li>
            <?php  endif ;?>
          </ul>
        </div> 
      </div>
    </section>
  </div>
  <header class="site-header">
    <div class="container header-container">
      <div class="academic-left">
        <div class="logo">
          <a href="index.php">
            <img src="./img/header-logo.png" alt="" class="img-responsive">
          </a>
        </div>
        <div id="site-header">
          <p class="site-title">
            <a href="index.php">academic</a>
          </p>
          <p class="site-des">CLEAN EDUCATION VN</p>
        </div>
      </div>
      <nav id="site-navigation" class="main-navigation">
        <ul id="primary-menu" class="menu">
          <li><a href="index.php" class="menu1">TRANG CHỦ</a></li>
          <li><a href="blog.php" class="menu1">BLOG</a></li>
          <li class="menu-dropdown">
            <a href="huongdanhoc.php" class="dropdown-toggle" data-toggle="dropdown">HƯỚNG DẪN HỌC
             <i class="fas fa-angle-down"></i></a>
            <ul class="sub-menu">
              <li><a href="#">Tìm hiểu HTML</a></li>
              <li><a href="#">Tìm hiểu AngularJS</a></li>
              <li><a href="#">Tìm hiểu AJAX</a></li>
            </ul>
          </li>
          <li class="menu-dropdown">
            <a href="khoahoc.php" class="dropdown-toggle" data-toggle="dropdown">KHOÁ HỌC
            <i class="fas fa-angle-down"></i> </a>
            <ul class="sub-menu">
              <li><a href="#">Nhập môn lập trình</a></li>
              <li><a href="#">Thiết kế web</a></li>
              <li><a href="#">Khoá học SEO</a></li>
            </ul>
          </li>
          <li><a href="contact.php" class="menu1">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </div>
  </header>
</div>
<div class="left-right-button">
  <a id="left-button" class="menu-button right" href="#left-top" onclick="myFunction(this)">
    <div class="container">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    </div>
  </a>
  <a id="right-button" class="menu-button left" href="#" onclick="discontact()">
    <i class="fas fa-angle-left"></i>
  </a>
</div>
<nav id="left-top" class="mobile-menu">
  <div class="entry-left-top">
    <div class="top-header">   <!--  HEADER-MOBILE-->
      <div class="top-header-logo">
        <a href="#">
          <img src="img/header-logo.png">
        </a>
      </div>
      <div class="top-header-text">
        <a href="#">Academic</a>
        <p>CLEAN EDUCATION VN</p>
      </div>
    </div>
    <ul id="left-id-menu" class="left-class-menu">
        <li>
          <a href="index.php">TRANG CHỦ</a>
        </li>
        <li>
          <a href="blog.php">BLOG</a>
        </li>
        <li>
          <div class="border-top">
            <a href="huongdanhoc.php">HƯỚNG DẪN HỌC</a></div>
          <ul>
            <li><a href="#">Tìm hiểu HTML</a></li>
            <li><a href="#">Tìm hiểu AngularJS</a></li>
            <li><a href="#">Tìm hiểu AJAX</a></li>
          </ul>
        </li>
        <li>
            <div class="border-top">
              <a href="khoahoc.php">KHOÁ HỌC</a>
            </div>
          <ul>
            <li><a href="#">Nhập môn lập trình</a></li>
            <li><a href="#">Thiết kế web</a></li>
            <li><a href="#">Khoá học SEO</a></li>
          </ul>
        </li>
        <li>
          <a href="contact.php">LIÊN HỆ</a>
        </li>
    </ul>
  </div>
</nav>
