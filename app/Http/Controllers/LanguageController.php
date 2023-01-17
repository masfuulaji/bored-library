<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Models\Language;

class LanguageController extends Controller
{
    public function index()
    {
        $language = Language::all();
        return response()->json(['success' => true, 'language' => $language]);
    }

    public function store(LanguageRequest $request)
    {
        $language = Language::create([
            'name' => $request['name'],
            'description' => $request['description'],
        ]);
        return response()->json(['success' => true, 'language' => $language]);
    }

    public function show($id)
    {
        $language = Language::find($id);
        if ($language) {
            return response()->json(['success' => true, 'language' => $language]);
        } else {
            return response()->json(['success' => false, 'message' => 'Language not found']);
        }
    }

    public function update($id, LanguageRequest $request)
    {
        $language = Language::find($id);
        if ($language) {
            $language->update([
                'name' => $request['name'],
                'description' => $request['description'],
            ]);
            return response()->json(['success' => true, 'language' => $language]);
        } else {
            return response()->json(['success' => false, 'message' => 'Language not found']);
        }
    }

    public function destroy($id)
    {
        $language = Language::find($id);
        if ($language) {
            $language->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false, 'message' => 'Category not found']);
        }
    }
}
