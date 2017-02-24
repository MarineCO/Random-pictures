<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class RandomController extends Controller {

	public function getRandomFromArray() {
		// $dir = "img/";
		// $images = glob($dir . '*.{jpg}', GLOB_BRACE);
		// $num = array_rand($images);
		// $randomImage = $images[$num];
		// return view('welcome', compact('randomImage'));
		return view('welcome');
	}

	public function resize($id, $width, $height) {
		$image = Image::make(public_path() . '/img/img-' . $id . '.jpg')->resize($width, $height);
		return $image->response('jpg');
	}
	
}
