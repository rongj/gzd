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
   	Route::any('/file/upload', 'CategoryController@upload')->name('file.upload');
});



// Route::post('/add', 'PostController@add');