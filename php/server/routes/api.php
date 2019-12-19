<?php

use Illuminate\Http\Request;
Use App\AboutUs;
Use App\Banner;
Use App\Basics;
Use App\Category;
Use App\Channel;
Use App\Contact;
Use App\Locator;
Use App\Pdf;
Use App\Product;
Use App\Tags;
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


header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Get Requests
Route::get('about/get', function() {
    return AboutUs::all();
});
Route::get('banners/get', function() {
    return Banner::all();
});
Route::get('categories/get', function() {
    return Category::all();
});
Route::get('channels/get', function() {
    return Channel::all();
});
Route::get('contacts/get', function() {
    return Contact::all();
});
Route::get('locators/get', function() {
    return Locator::all();
});
Route::get('pdf/get', function() {
    return Pdf::all();
});
Route::get('tags/get', function() {
    return Tags::all();
});
Route::get('basics/get', function() {
    return Basics::all();
});
Route::get('all/get', function() {
    return Category::with('products.tags')->get();
});
Route::get('unsign-products/get', function() {
    return Product::where('cat_id','unsign')->with('tags')->get();
});
Route::get('products/get', function() {
    return Product::all();
});
Route::get('products/get/{id}', function($id) {
    return Product::where('id', $id)->with('tags')->get();
});


//Post Requests

//Add
Route::post('product/add', 'ApiController@addProduct');
Route::post('basics/add', 'ApiController@addBasics');
Route::post('feedback/add', 'ApiController@addFeedback');
Route::post('tag/add', 'ApiController@addTag');
Route::post('about/add', 'ApiController@addAbout');
Route::post('category/add', 'ApiController@addCategory');
Route::post('pdf/add', 'ApiController@addPdf');
Route::post('banner/add', 'ApiController@addBanner');
Route::post('locator/add', 'ApiController@addLocator');
Route::post('channel/add', 'ApiController@addChannel');

//Update
Route::post('product/update', 'ApiController@updateProduct');
Route::post('pdf/update', 'ApiController@updatePdf');
Route::post('basics/update', 'ApiController@updateBasics');
Route::post('about/update', 'ApiController@updateAbout');

//Delete
Route::post('product/delete', 'ApiController@deleteProduct');
Route::post('tag/delete', 'ApiController@deleteTag');
Route::post('category/delete', 'ApiController@deleteCategory');
Route::post('feedback/delete', 'ApiController@deleteFeedback');
Route::post('banner/delete', 'ApiController@deleteBanner');
Route::post('channel/delete', 'ApiController@deleteChannel');
Route::post('locator/delete', 'ApiController@deleteLocator');
