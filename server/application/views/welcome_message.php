
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>(Knitto)</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 62.5%;
      /*background-image: url("images/go404_1.pn") no-repeat center center fixed;*/
      background:  url(images/go404_1.png) no-repeat center top;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      }
    img#bg {
      width: 100%;
      height: 100%;
      z-index: 1;
      }
    div.dialog {
      position: absolute;
      top: 20px;
      width: 100%;
      text-align: center;
      z-index: 2;
      }
    #back {
      display: block;
      opacity: .2;
      -webkit-transition: .2s opacity ease;
      -o-transition: .2s opacity ease;
      transition: .2s opacity ease;
      }
    #back img {
      border: none;
      }
    a:hover#back {
      opacity: .3;
      }
    h1 {
      margin: 15px 0 0 0;
      padding: 0;
      font-size: 4.2em;
      color: #000;
      color: rgba(0,0,0,.8);
      line-height: 1.5em;
      letter-spacing: -.02em;
      }
    h2 {
      margin: 0;
      padding: 0;
      font-size: 2.6em;
      font-weight: normal;
      color: #666;
      color: rgba(0,0,0,.5);
      line-height: 1.1em;
      }
    p {
      font-size: 1.6em;
      color: rgba(0,0,0,.5);
        }
    p a {
        color: rgba(0,0,0,.7);
        }
      p a:hover {
        color: rgba(0,0,0,.9);
        }
  </style>
</head>

<body>
  <!-- This file lives in public/404.html -->
  <div class="dialog">
    <h1>Knitto Server</h1>
    <h2>Sorry, the page you were looking for doesn&#8217;t exist.</h2>
  </div>
</body>
</html>
