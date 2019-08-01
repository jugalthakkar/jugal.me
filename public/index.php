<?php
require_once('includes/constants.php');
?><!doctype html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/semantic.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/scrollStyle.css">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">

    <meta property="og:url"                content="http://jugal.me/" />
    <meta property="og:type"               content="profile" />
    <meta property="og:title"              content="Jugal Thakkar's Home Page" />
    <meta property="og:description"        content="Jugal Thakkar is a C# professional, JavaScript expert and an Android fan boy. Creator of http://muresulttracker.tk &amp; http://tincheck.tk He forges user-friendly enterprise web applications and enjoys data crunching &amp; visualization. He is passionate about mobile and web technologies &amp; appreciate open source." />
    <meta property="fb:profile_id" content="jugal" />
    <meta property="og:image"              content="http://jugal.me/images/jugal_thakkar_facebook.png" />


    <script src="js/lib/modernizr.js"></script>
    <title>Jugal Thakkar's Home Page</title>
</head>
<?php
$animation='gallery';
if(isset($_GET['animation'])){
    $animation=$_GET['animation'];
}
?>
<body id="home" data-hijacking="on" data-animation="<?php echo $animation; ?>">

    <div id="reactRoot" class="reactRoot" />		
			<img class="loader" src="images/Material-Design-Preloader.gif" />			
    <?php if(DEBUG){ ?>
    <script data-main="js/main" src="js/lib/require.js"></script>
    <script src="js/build.php"></script>
    <?php }else{ ?>
    <script data-main="js/main.min" src="js/lib/require.js"></script>
    <script>
    	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    	ga('create', 'UA-30658442-1', 'auto');
    	ga('send', 'pageview');

    </script>
    <?php } ?>

</body>

</html>
