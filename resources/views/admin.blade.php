<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>后台管理框架</title>
        
        <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ mix('js/admin.js') }}"></script>
    </body>
</html>
