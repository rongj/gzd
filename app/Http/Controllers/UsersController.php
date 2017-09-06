<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function index()
    {	
		// $environment = App::environment();
		// $value = config('app.timezone');
		// dd($environment);
        $users = [
			'0' => [
				'firstname' => 'z',
				'lastname' => 'z'
			],
			'1' => [
				'firstname' => 'b',
				'lastname' => 'b'
			]
		];
		// return $users;
		// return view('admin.users', compact('users'));
		return view('admin.users', ['users' => $users, 'title' => '<h2>用户列表</h2>']);
    }

	public function create()
	{
		return view('admin.users_create');
	}

	public function add(Request $request)
	{
		// dd($request->all());
		User::create($request->all());
		return "success";
	}
}
