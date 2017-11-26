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

Route::post('upload',"ApiController@upload_image");
Route::get("/event/n/{routename}","EventController@getEventByRoutename");
Route::resource('event',"EventController");
Route::resource('program',"ProgramController");
Route::resource('speaker',"SpeakerController");
Route::resource('post',"PostController");