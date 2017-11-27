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
    return view('layouts/app');
});
Route::get('/event', function () {
    return view('layouts/app');
});
Route::get('/about', function () {
    return view('layouts/app');
});
Route::get('/speaker', function () {
    return view('layouts/app');
});
Route::get('/blog', function () {
    return view('layouts/app');
});
Route::get('/speaker/n/{routename}', function () {
    return view('layouts/app');
});
Route::get('/post/n/{routename}', function () {
    return view('layouts/app');
});
Route::get('/event/n/{routename}', function () {
    return view('layouts/app');
});
Route::get('/event/{id}', function () {
    return view('layouts/app');
});

Auth::routes();

Route::get('/home', function () {
    return redirect()->to('/manage/event');
});
Route::get('/manage', function () {
    return redirect()->to('/manage/event');
});
Route::get('/manage/event', 'HomeController@manage');
Route::get('/manage/event/{id}', 'HomeController@manage');
Route::get('/manage/event/new', 'HomeController@manage');

Route::get('/manage/post', 'HomeController@manage');
Route::get('/manage/post/{id}', 'HomeController@manage');
Route::get('/manage/post/new', 'HomeController@manage');


Route::get('/manage/speaker', 'HomeController@manage');
Route::get('/manage/speaker/{id}', 'HomeController@manage');
Route::get('/manage/speaker/new', 'HomeController@manage');
