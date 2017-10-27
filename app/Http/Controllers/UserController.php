<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    // 个人中心页面
    public function index()
    {
        return view('user.index');
    }

    // 个人设置页面
    public function setting()
    {
        return view('user.setting');
    }

    // 个人设置行为
    public function settingStore()
    {
        return null;
    }
}
