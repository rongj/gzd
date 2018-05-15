<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;

class LoginController extends Controller
{
	// 登录行为
	public function login()
	{
		// $validator = Validator::make(request()->all(), [
		// 	'name' => 'required|name',
		// 	'password' => 'required|min:5|max:10',
		// 	'remember' => '',
		// ]);

		// if($validator->fails()) {
		// 	return [
		// 		'code' => 201,
		// 		'msg' => $validator->errors()->all()[0]
		// 	];
		// }

		$user = request(['name', 'password']);
		$remember = boolval(request('remember'));

		if(\Auth::attempt($user, $remember)) {
			// $accessToken = \Auth::user()->createToken('user_token')->accessToken;

			return jsonWrite(200, [
				// 'token' => $accessToken,
				'name' => \Auth::user()->name,
				'userid' => \Auth::id()
			]);
		}
		
		return jsonWrite(201, '账号或密码错误');
	}

	// 登出行为
	public function logout()
	{
		\Auth::logout();
		return jsonWrite(200, '登出成功');
	}

	// 检测用户是否已登录
	public function checkLogin(Request $request)
	{
		if(\Auth::check()){
			return jsonWrite(200, [
				'username' => \Auth::user()->name,
				'id' => \Auth::id()
			]);
		}
		return jsonWrite(201, '请重新登录');
	}
}
