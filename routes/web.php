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
})->where('path', '[^\/admin|^\/api].*');


Route::get('/admin/{path?}', function (){
	return view('admin');
})->where('path', '[\/\w\.-]*');

/* api */
Route::group(['prefix' => 'api'], function() {
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
				$router->get('/all', 'CategoryController@index');
				$router->post('/create', 'CategoryController@create');
				$router->post('/update/{id}', 'CategoryController@update');
				$router->post('/destroy/{id}', 'CategoryController@destroy');
			}
		);

		Route::prefix('plate')->group(
			function($router) {
				$router->get('/all', 'PlateController@index');
				$router->any('/add', 'PlateController@add');
				$router->any('/update', 'PlateController@update');
				$router->post('/delete/{id}', 'PlateController@delete');
			}
		);

		Route::prefix('tag')->group(
			function($router) {
				$router->get('/all', 'TagController@index');
				$router->post('/create', 'TagController@create');
				$router->post('/update/{id}', 'TagController@update')->where('id', '[0-9]+');
				$router->post('/destroy/{id}', 'TagController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('post')->group(
			function($router) {
				Route::get('/list', 'PostController@index');
				Route::get('/show/{id}', 'PostController@show')->where('id', '[0-9]+');
				Route::post('/update/{id}', 'PostController@update')->where('id', '[0-9]+');
				Route::post('/create', 'PostController@create');
				Route::post('/destroy/{id}', 'PostController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('user')->group(
			function($router) {
				Route::get('/list', 'UserController@index');
				Route::get('/show', 'UserController@show');
				Route::post('/update/{id}', 'UserController@update')->where('id', '[0-9]+');
				Route::post('/destroy/{id}', 'UserController@destroy')->where('id', '[0-9]+');
			}
		);

		Route::prefix('upload')->group(
			function($router) {
				Route::post('/file', 'UploadController@upload');
			}
		);

	// });
});