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
    <ul>
        {!! $title !!}
        @foreach($users as $user)
            <li>{{ $user['firstname'] }} {{ $user['lastname'] }}</li>
        @endforeach
        <a href="./users/create">添加</a>
    </ul>
    </body>
</html>
