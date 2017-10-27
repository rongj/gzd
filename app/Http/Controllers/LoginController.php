<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    // 登录页面
    public function index()
    {
        return view('login.index');
    }

    // 登录行为
    public function login()
    {
        $this->validate(request(), [
            'email' => 'required|min:3|email',
            'password' => 'required|min:5|max:10',
            'is_remember' => 'integer',
        ]);

        $user = request(['email', 'password']);
        $is_remember = boolval(request('is_remember'));
        if(\Auth::attempt($user, $is_remember)) {
            return redirect('/post');
        }
        
        return \Redirect::back()->withErrors('账号或密码错误');
    }

    // 登出行为
    public function logout()
    {
        \Auth::logout();
        return redirect('/post');
    }
}
