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

$public_routes = [
    '/',
    '/event',
    '/about',
    '/terms',
    '/speaker',
    '/blog',
    '/conference',
    '/conference/rsvp',
    '/conference/{year}',
    '/conference/{year}/rsvp',
    '/speaker/n/{routename}',
    '/post/n/{routename}',
    '/event/n/{routename}',
    '/event/n/{routename}/rsvp',
    '/event/{id}',
];

$manage_routes = [
    'event',
    'post',
    'speaker',
    'agency'
];


foreach ($public_routes as $r){
    Route::get($r, function () {
        return view('layouts/app');
    });
}

//contact record
Route::post('/contact',"ContactrecordController@store");
Auth::routes();
Route::get('/home', function () {
    return redirect()->to('/manage/event');
});
Route::get('/manage', function () {
    return redirect()->to('/manage/event');
});

/* Generate Manage Routes */
function generate_manage_route($modelname){
    Route::get("/manage/$modelname", 'HomeController@manage');
    Route::get("/manage/$modelname/{id}", 'HomeController@manage');
    Route::get("/manage/$modelname/new", 'HomeController@manage');
}

foreach ($manage_routes as $r){
    generate_manage_route($r);
}
