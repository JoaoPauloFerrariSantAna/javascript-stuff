<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/hello", function() {
    return "hello world from the server";
});