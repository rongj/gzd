<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	// 登录行为
	public function login()
	{
		$validator = Validator::make(request()->all(), [
			'username' => 'required',
			'password' => 'required|min:5|max:10',
			'is_remember' => '',
		]);

		if($validator->fails()) {
			return [
				'code' => 201,
				'msg' => $validator->errors()->all()[0]
			];
		}

		$user = request(['username', 'password']);
		$is_remember = boolval(request('is_remember'));

		if(\Auth::attempt($user, $is_remember)) {
			return [
				'code' => 200,
				'msg' => '登录成功',
				'data' => [
					'username' => request('username'),
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
	public function checkLogined()
	{
		dd(\Auth::check());
		dd(\Auth::id());
	}
}
