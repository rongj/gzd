<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\User;

class RegisterController extends Controller
{
	// 注册行为
	public function register()
	{
		$validator = Validator::make(request()->all(), [
			'username' => 'required|min:3|unique:users,username',
			'email' => 'required|unique:users,email|email',
			'role' => 'required',
			'password' => 'required|min:5|max:10|confirmed',
		]);

		if($validator->fails()) {
			return [
				'code' => 201,
				'msg' => $validator->errors()->all()[0]
			];
		}

		$username = request('username');
		$email = request('email');
		$role_id = request('role');
		$role_name = request('role') === '1' ? '管理员' : '普通用户';
		$password = bcrypt(request('password'));

		$user = compact('username', 'email', 'password', 'role_id', 'role_name');

		User::create($user);

		return [
			'code' => 200,
			'msg' => '添加成功',
			'data' => compact('username', 'email', 'role_name')
		];
	}
}
