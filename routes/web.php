<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin');
});


Route::group(['prefix' => 'admin'], function () {
	Route::get('/{path?}', function (){
		return view('admin');
	})->where('path', '[\/\w\.-]*');
});

Route::get('/users', 'UsersController@index')->name('users');

Route::get('/users/create', 'UsersController@create');

// Route::get('/user/{name?}', function($name = 'jhon') {
// 	echo url()->previous();
// 	// return 'hello'.$name;
// 	$route = Route::current();
// 	$name = Route::currentRouteName();
// 	$action = Route::currentRouteAction();
// 	dd($action);
// })->name('user');

Route::get('userage/{age}', function($age) {
	return 'age:'.$age;
})->middleware('checkage');

Route::post('/users/add', 'UsersController@add');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('test', function () {
	return view('test', [ 'name' => 'Samantha', 'records' => 0 , 'data' => array(
		'a' => 1,
		'b' => 2
	)]);
});

// 文章
Route::get('/post/create', 'PostController@create');
Route::post('/post/create', 'PostController@store');
Route::get('/posts', 'PostController@index');

Route::group([ 'prefix' => 'post'], function () {
	Route::get('/{post}', 'PostController@detail');
	Route::get('/post/create', 'PostController@create');
	Route::get('/{post}/edit', 'PostController@edit');
	Route::put('/{post}', 'PostController@update');
	Route::get('/{post}/delete', 'PostController@delete');
});

/* 用户模块 */
// 注册页面
Route::get('/register', 'RegisterController@index');
// 注册行为
Route::post('/register', 'RegisterController@register');
// 登录页面
Route::get('/login', 'LoginController@index');
// 登录行为
Route::post('/login', 'LoginController@login');
// 登出行为
Route::get('/logout', 'LoginController@logout');
// 个人页面置
Route::get('/user/my', 'UserController@index');
// 个人设置
Route::get('/user/setting', 'UserController@setting');
// 个人设置操作
Route::post('/user/setting', 'UserController@settingStore');