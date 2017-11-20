<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>首页</title>
        
        <link rel="stylesheet" href="{{ mix('css/home.css') }}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ mix('js/home.js') }}"></script>
    </body>
</html>
