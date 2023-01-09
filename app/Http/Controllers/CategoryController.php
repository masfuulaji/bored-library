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

    public function show($id)
    {
        $category = Category::find($id);
        if ($category) {
            return response()->json(['success' => true, 'category' => $category]);
        } else {
            return response()->json(['success' => false, 'message' => 'Category not found']);
        }
    }

    public function update($id, CategoryRequest $request)
    {
        $category = Category::find($id);
        if ($category) {
            $category->update([
                'name' => $request['name'],
                'description' => $request['description'],
            ]);
            return response()->json(['success' => true, 'category' => $category]);
        } else {
            return response()->json(['success' => false, 'message' => 'Category not found']);
        }
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false, 'message' => 'Category not found']);
        }
    }
}
