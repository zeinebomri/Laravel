<?php

use App\Http\Controllers\InterestController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserInterestController;

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
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::resource('/users', UserController::class)->except(['create', 'edit']);


//resource() to create multiple routes
//Route::resource('/posts', PostController::class)->except(['create', 'edit']);
//Route::post("posts", [PostsController::class,'store']);

//Route::resource('/projects', ProjectController::class)->except(['create', 'edit']);

/*
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/users', UserController::class)->except(['create', 'edit']);
    Route::resource('/posts', PostController::class)->except(['create', 'edit']);
});*/

Route::post('/token/register', [TokenController::class, 'register']);
Route::post('/token/login', [TokenController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/users', UserController::class)->except(['create', 'edit']);
    Route::resource('/posts', PostController::class)->except(['create', 'edit']);
    Route::resource('users.interests', UserInterestController::class)->except(['create', 'edit','show','update']);
    Route::resource('/interests', InterestController::class)->except(['create', 'edit','update','destroy']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/token/logout', [TokenController::class, 'logout']);
});