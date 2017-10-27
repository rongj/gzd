<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>网站标题-@yield('title')</title>
</head>
<body>
    @section('sidebar')
        这是主布局的侧边栏
    @show

    <div class="container">
        <h2>11111</h2>
        @yield('content')
    </div>
</body>
</html>