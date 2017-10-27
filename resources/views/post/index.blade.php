
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="MESUY3topeHgvFqsy9EcM916UWQq6khiGHM91wHy">


    <title>laravel for blog</title>

    <!-- Bootstrap core CSS -->
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="css/blog.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/wangEditor.min.css">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>

    <![endif]-->
</head>

<body>

<div class="blog-masthead">
    <div class="container">
        <ul class="nav navbar-nav navbar-left">
            <li>
                <a class="blog-nav-item " href="/posts">首页</a>
            </li>
            <li>
                <a class="blog-nav-item" href="/post/create">写文章</a>
            </li>
            <li>
                <a class="blog-nav-item" href="/notices">通知</a>
            </li>
            <li>
                <input name="query" type="text" value="" class="form-control" style="margin-top:10px" placeholder="搜索词">
            </li>
            <li>
                <button class="btn btn-default" style="margin-top:10px" type="submit">Go!</button>
            </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <div>
                    <img src="" alt="" class="img-rounded" style="border-radius:500px; height: 30px">
                    <a href="#" class="blog-nav-item dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/user/5">我的主页</a></li>
                        <li><a href="/user/5/setting">个人设置</a></li>
                        <li><a href="/logout">登出</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="container">

    <div class="blog-header">
    </div>

    <div class="row">
        <div class="col-sm-8 blog-main">
        <div>
    <div id="carousel-example" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example" data-slide-to="1"></li>
            <li data-target="#carousel-example" data-slide-to="2"></li>
        </ol><!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div class="item active">
                <img src="http://ww1.sinaimg.cn/large/44287191gw1excbq6tb3rj21400migrz.jpg" alt="..." />
                <div class="carousel-caption">...</div>
            </div>
            <div class="item">
                <img src="http://ww3.sinaimg.cn/large/44287191gw1excbq5iwm6j21400min3o.jpg" alt="..." />
                <div class="carousel-caption">...</div>
            </div>
            <div class="item">
                <img src="http://ww2.sinaimg.cn/large/44287191gw1excbq4kx57j21400migs4.jpg" alt="..." />
                <div class="carousel-caption">...</div>
            </div>
        </div>
        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span></a>
        <a class="right carousel-control" href="#carousel-example" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
</div>        <div style="height: 20px;">
        </div>
        <div>
                        {{-- <div class="blog-post">
                <h2 class="blog-post-title"><a href="/posts/62" >你好你好</a></h2>
                <p class="blog-post-meta">May 14, 2017 by <a href="/user/5">Kassandra Ankunding2</a></p>

                <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好...
                <p class="blog-post-meta">赞 0  | 评论 0</p>
            </div> --}}

@foreach ($posts as $post) 
	<div class="blog-post">
		<h2 class="blog-post-title"><a href="post/{{$post->id}}">{{str_limit($post->title, '40')}}</a></h2>
        <p class="blog-post-meta">{{$post->created_at}} <a href="/user/5">{{$post->user->name}}</a></p>
		<p>{!!str_limit($post->content, '200')!!}</p>
	</div>
@endforeach

{{$posts->links()}}

        </div><!-- /.blog-main -->
    </div>

        <div id="sidebar" class="col-xs-12 col-sm-4 col-md-4 col-lg-4">


    <aside id="widget-categories" class="widget panel panel-default">
        <div class="panel-heading">
            专题
        </div>

        <ul class="category-root list-group">
                            <li class="list-group-item">
                    <a href="/topic/1">旅游
                    </a>
                </li>
                            <li class="list-group-item">
                    <a href="/topic/2">轻松
                    </a>
                </li>
                            <li class="list-group-item">
                    <a href="/topic/5">测试专题
                    </a>
                </li>
                    </ul>

    </aside>
</div>
</div>    </div><!-- /.row -->
</div><!-- /.container -->

<footer class="blog-footer">
    <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
        <a href="#">Back to top</a>
    </p>
</footer>
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/wangEditor.min.js"></script>
<script src="js/ylaravel.js"></script>

</body>
</html>

