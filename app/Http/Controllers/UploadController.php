<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request) {
    	$file = $request->file('plate-cover')->store('upload');
        return jsonWrite(200, [
            'url' => '/'.$file
        ]);
    }
}
