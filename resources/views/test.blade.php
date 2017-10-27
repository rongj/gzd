@extends('layouts.test')

@section('title', '测试')

@section('sidebar')
    <p>左侧</p>
@endsection


@section('content')
@if (count($records) === 1)
    我有一条记录！
@elseif (count($records) > 1)
    我有多条记录！
@else
    我没有任何记录！
@endif

{{$name}}

@endsection

