<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    // 文章列表
    public function index()
    {
		// $app = app();
		// $log = $app->make('log');
		// \Log::info("post_index", ['data', 'this is post index3']);
        $page = request()->get('pageNum');
        $pageSize = request()->get('pageSize');
    	$posts = Post::orderBy('id')
			->offset($pageSize*($page-1))
			->limit($pageSize)
			->get();
		$totalCount = Post::count();
		return jsonWrite(200, [
			'dataList' => $posts,
			'pageInfo' => [
				'totalCount' => $totalCount,
				'totalPage' => $totalCount 
			]
		]);
    }

    // 文章详情
    public function show($id)
    {
		$post = Post::where('id', $id)->get();
		return jsonWrite(200, [
			'code' => 200,
			'data' => $post[0]
		]);
    }

    // 修改
    public function update(Request $request, $id)
    {
    	$post = [
			'title' => request('title'),
			'content' => request('content'),
		];
		Post::where('id', $id)->update($post);
		return jsonWrite(200, '修改成功');
    }

	// 新增
	public function create()
	{
		$post = [
			'title' => request('title'),
			'content' => request('content'),
			'user_id' => \Auth::id()
		];
		Post::create($post);
		return jsonWrite(200, '添加成功');
	}

	// 删除
	public function destroy($id)
	{
		$post = Post::where('id', $id)->get();
		if($post[0]->user_id === \Auth::id()) {
			return jsonWrite(200, '删除成功');
		} else {
			return jsonWrite(201, '没有删除权限');
		}
	}
}
