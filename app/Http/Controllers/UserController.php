<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    // 用户列表
    public function index()
    {
        $page = request()->get('pageNum');
        $pageSize = request()->get('pageSize');
    	$posts = User::orderBy('id')
			->offset($pageSize*($page-1))
			->limit($pageSize)
			->get();
		$totalCount = User::count();
        return jsonWrite(200, [
            'dataList' => $posts,
            'pageInfo' => [
                'totalCount' => $totalCount,
                'totalPage' => $totalCount 
            ]
        ]);
    }

    // 用户详情
    public function show()
    {
        $id = request('id') ?: \Auth::id();
        $user = User::where('id', $id)->get();
        return jsonWrite(200, $user[0]);
    }

    // 修改用户信息
    public function update(Request $request, $id)
    {
        return [
            'code' => 200,
            'data' => $id
        ];
    }

    // 删除用户
    public function destroy($id)
    {
        return [
            'code' => 200,
            'data' => $id
        ];
    }
}
