<?php
	$url_host = $_SERVER['HTTP_HOST'];

	$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

	$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

	preg_match_all($pattern_uri, __DIR__, $matches);

	$url_path = $url_host . $matches[1][0];

	$url_path = str_replace('\\', '/', $url_path);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
		<title>Blog | Academic</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"></link>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/swiper.min.css"/>
		<link rel="stylesheet" type="text/css" href="connection.css">
		<script src="js/script.js"></script>
		<script src="js/swiper.min.js"></script>
    	<script src="js/jquery.min.js"></script>
    	<script src="js/2.js"></script>
    </head>
    <body>
    	
    	<div id="all-world" class="blog-world">
    		<?php include './header.php' ?>
    		<?php include './module/2-content.php' ?>
    	</div>
    	

    </body>
</html>