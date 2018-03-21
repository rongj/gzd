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
			'name' => 'required|min:3|unique:users,name',
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

		$name = request('name');
		$email = request('email');
		$role_id = request('role');
		$role_name = request('role') === '1' ? '管理员' : '普通用户';
		$password = bcrypt(request('password'));


		$input = compact('name', 'email', 'password', 'role_id', 'role_name');

		$user = User::create($input);

		// $accessToken = $user->createToken('user_token')->accessToken;

		if($user) {
			return [
				'code' => 200,
				'msg' => '添加成功',
				'data' => compact('name', 'email', 'role_name', 'accessToken')
			];
		}
		

	}
}
