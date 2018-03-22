<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;

class LoginController extends Controller
{
	// 登录行为
	public function login()
	{
		$validator = Validator::make(request()->all(), [
			'email' => 'required|email',
			'password' => 'required|min:5|max:10',
			'remember' => '',
		]);

		if($validator->fails()) {
			return [
				'code' => 201,
				'msg' => $validator->errors()->all()[0]
			];
		}

		$user = request(['email', 'password']);
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
	public function checkLogined(Request $request)
	{
		if(\Auth::check()){
			return [
				'code' => 200,
				'data' => [
					'name' => \Auth::user()->name,
					'userid' => \Auth::id()
				] 
			];
		}
		return [
			'code' => 201,
			'msg' => '请重新登录'
		]; 
	}
}
