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

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '^(?!admin|api).*');

// ^(?!/manage).*$
Route::get('/admin/{path?}', function (){
	return view('admin');
})->where('path', '.*');

/* api */
Route::group(['prefix' => 'api', 'middleware' => 'cors'], function() {
	// Route::group(['middleware' => 'auth:admin'], function(){
		Route::prefix('passport')->group(
			function($router) {
				$router->post('/register', 'RegisterController@register');
				$router->post('/login', 'LoginController@login');
				$router->get('/checkLogin', 'LoginController@checkLogin');
				$router->get('/logout', 'LoginController@logout');
			}
		);
		
		Route::prefix('category')->group(
			function($router) {
				$router->get('/list', 'CategoryController@index');
				$router->get('/show/{id}', 'CategoryController@show');
				$router->post('/create', 'CategoryController@create');
				$router->post('/update/{id}', 'CategoryController@update');
				$router->post('/destroy/{id}', 'CategoryController@destroy');
			}
		);

		Route::prefix('tag')->group(
			function($router) {
				$router->get('/list', 'TagController@index');
				$router->get('show/{id}', 'TagController@show');
				$router->post('/create', 'TagController@create');
				$router->post('/update/{id}', 'TagController@update')->where('id', '[0-9]+');
				$router->post('/destroy/{id}', 'TagController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('post')->group(
			function($router) {
				$router::get('/list', 'PostController@index');
				$router::get('/show/{id}', 'PostController@show')->where('id', '[0-9]+');
				$router::get('/read/{id}', 'PostController@read')->where('id', '[0-9]+');
				$router::any('/update/{id}', 'PostController@update')->where('id', '[0-9]+');
				$router::post('/create', 'PostController@create');
				$router::post('/destroy/{id}', 'PostController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('user')->group(
			function($router) {
				$router::get('/list', 'UserController@index');
				$router::get('/show', 'UserController@show');
				$router::post('/update/{id}', 'UserController@update')->where('id', '[0-9]+');
				$router::post('/destroy/{id}', 'UserController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('upload')->group(
			function($router) {
				$router::post('/img', 'UploadController@upload')->name('file.upload');
			}
		);

	// });
});