<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>
    <body>
        <h5>创建新用户</h5>
        <form action="/users/add" method="POST">
            {{ csrf_field() }}
            <input type="text" name="name">
            <input type="email" name="email">
            <input type="password" name="password">
            <input type="submit" vaule="Create">
        </form>
    </body>
</html>
