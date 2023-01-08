<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $category = $this->Category::class->all();
        return response()->json([$category]);
    }

    public function store(){

    }

    public function update(){

    }
}
