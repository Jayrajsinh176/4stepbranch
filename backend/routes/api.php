<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\BalanceRequestController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\DistributorController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\HelpdeskController;

Route::post('/helpdesk', [HelpdeskController::class,'store']);
Route::get('/helpdesk/{user_id}', [HelpdeskController::class,'userHelpdesk']);
Route::post('/helpdesk/reply/{id}', [HelpdeskController::class,'reply']);

Route::get('/order-details/{id}', [OrderController::class, 'show']);
Route::get('/order-history', [OrderController::class, 'history']);
Route::post('/create-order',[OrderController::class,'store']);  
Route::get('/branch-order/{id}', [OrderController::class, 'getOrder']);

Route::get('/verify-distributor/{id}', [DistributorController::class, 'show']);

Route::get('/transactions', [BalanceRequestController::class, 'transactions']);
Route::get('/stock-report', [ProductController::class,'stockReport']);

Route::get('/products', [ProductController::class, 'index']);
Route::post('/product-request', [ProductController::class, 'submitRequest']);
Route::get('/product-requests', [ProductController::class, 'getRequests']);
Route::get('/categories', [ProductController::class, 'getCategories']);
Route::post('/product-request/approve/{id}', [ProductController::class, 'approveRequest']);

Route::post('/balance-request', [BalanceRequestController::class, 'store']);
Route::get('/balance-history', [BalanceRequestController::class, 'history']);
Route::post('/balance-request/approve/{id}', [BalanceRequestController::class, 'approveRequest']);

Route::post('/signup', [MemberController::class, 'store']);
Route::post('/login', [MemberController::class, 'login']);
Route::put('/update-profile/{id}', [MemberController::class, 'updateProfile']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});