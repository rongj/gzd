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

Route::get('/user/{name?}', function($name = 'jhon') {
	// return 'hello'.$name;
	$route = Route::current();
	$name = Route::currentRouteName();
	$action = Route::currentRouteAction();
	dd($action);
})->name('user');

Route::get('userage/{age}', function($age) {
	return 'age:'.$age;
})->middleware('checkage');

Route::post('/users/add', 'UsersController@add');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
