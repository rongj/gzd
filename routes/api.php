<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});


// Route::name('admin.')->group(function() {

//     Route::prefix('category')->group(
//         function($router) {
//             $router->get('/add', 'CategoryController@add')->name('category.add');
//         }
//     );
// });



Route::name('admin.')->group(function() {
	Route::prefix('category')->group(
		function($router) {
			$router->get('/all', 'CategoryController@index')->name('category.index');
			$router->any('/add', 'CategoryController@add')->name('category.add');
			$router->any('/update', 'CategoryController@update')->name('category.update');
			$router->post('/delete/{id}', 'CategoryController@add')->name('category.add');
		}
	);

	Route::prefix('post')->group(
		function($router) {
			Route::get('/list', 'PostController@index');
			Route::get('/create', 'PostController@create');
			Route::post('/create', 'PostController@store');
			Route::get('/{post}', 'PostController@detail');
			Route::get('/create', 'PostController@create');
			Route::get('/{post}/edit', 'PostController@edit');
			Route::put('/{post}', 'PostController@update');
			Route::get('/{post}/delete', 'PostController@delete');
		}
	);


	Route::post('/register', 'RegisterController@register');
	Route::post('/login', 'LoginController@login');
	Route::get('/checkLogined', 'LoginController@checkLogined');
	Route::get('/logout', 'LoginController@logout');


	Route::any('/file/upload', 'CategoryController@upload')->name('file.upload');
});
