<?php

require 'vendor/autoload.php';

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RandomController extends Controller
{

	public function getRandomFromArray() {
		$dir = "img/";
		$images = glob($dir . '*.{jpg}', GLOB_BRACE);
		$num = array_rand($images);
		$randomImage = $images[$num];

		return view('welcome', compact('randomImage'));
	}
	
}
