<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    // 文章列表
    function index()
    {
		// $app = app();
		// $log = $app->make('log');
		// \Log::info("post_index", ['data', 'this is post index3']);
        $page = request()->get('page');
        $pageSize = request()->get('pageSize');
    	$posts = Post::orderBy('created_at', 'desc')->paginate($pageSize);
        return [
            'code' => 200,
            'data' => $posts,
        ];
    }

    // 文章详情
    function detail(Post $post)
    {
    	return view('post/detail', compact('post'));
    }

    // 发布
    function create()
    {
    	return view('post/create');
    }

    // 发布
    function store()
    {
    	// dd(\Request::all());
    	// dd(request()->all());
    	// dd(request()->get('title'));

    	// $post = new Post();
		// $post->title = request('title');
		// $post->content = request('content');
		// $post->save();

		// $params = [
		// 	'title' => request('title'),
		// 	'content' => request('content')
		// ];
		// Post::create($params);

		// 验证
		$this->validate(request(), [
			'title' => 'required|string|max:100|min:5',
			'content' => 'required|string|min:10',
		]);

		$user_id = \Auth::id();
		$params = array_merge(request(['title', 'content']), compact('user_id'));

		Post::create($params);
		return redirect('/posts');
    }

    // 编辑
    function edit(Post $post)
    {
		return view('post/edit', compact('post'));
    }

    // 编辑
    function update(Post $post)
    {
    	// 验证
    	$this->validate(request(), [
    		'title' => 'required|string|max:100|min:5',
    		'content' => 'required|string|min:10',
    	]);

		// 权限验证
		$this->authorize('update', $post);

		$post->title = request('title');
		$post->content = request('content');
		// dd($post->id);
		$post->save();

    	return redirect("/post/{$post->id}");
    }

    // 编辑
    function delete(Post $post)
    {
		// 权限验证
		$this->authorize('delete', $post);

    	$post->delete();
		return redirect('/posts');
    }
}
