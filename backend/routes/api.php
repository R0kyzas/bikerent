<?php

use App\Http\Controllers\BikeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('/bikes')->group(function(){
    Route::get('/', [BikeController::class, 'list']);

    Route::match(['get','post'], '/add', [BikeController::class, 'store']);
    Route::delete('/delete/{bike}', [BikeController::class, 'destroy']);
    Route::match(['get','post'], '/edit/{bike}', [BikeController::class, 'edit']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
