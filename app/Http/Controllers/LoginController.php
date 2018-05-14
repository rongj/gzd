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
			return [
				'code' => 200,
				'msg' => '登录成功',
				'data' => [
					// 'token' => $accessToken,
					'name' => \Auth::user()->name,
					'userid' => \Auth::id()
				] 
			];
		}
		
		return [
			'code' => 201,
			'msg' => '账号或密码错误'
		];
	}

	// 登出行为
	public function logout()
	{
		\Auth::logout();
		return [
			'code' => 200,
			'msg' => '登出成功'
		];
	}

	// 检测用户是否已登录
	public function checkLogin(Request $request)
	{
		if(\Auth::check()){
			return [
				'code' => 200,
				'data' => [
					'username' => \Auth::user()->name,
					'id' => \Auth::id()
				] 
			];
		}
		return [
			'code' => 201,
			'msg' => '请重新登录'
		]; 
	}
}
