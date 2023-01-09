<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $category = Category::all();
        return response()->json(['success' => true, 'category' => $category]);
    }

    public function store(CategoryRequest $request){
        $category = Category::create([
            'name' => $request['name'],
            'description' => $request['description'],
        ]);
        return response()->json(['success' => true, 'category' => $category]);
    }

    public function update($id, CategoryRequest $request){
        $category = Category::where('id',$id)->first()->get();
        $category->update([
            'name'=>$request['name'],
            'description'=>$request['description'],
        ]);
        return response()->json(['success' => true, 'category' => $category]);
    }
}
