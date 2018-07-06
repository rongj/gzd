<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Comment;

class PostController extends Controller
{
    // 文章列表
    public function index(Request $request)
    {
		// $app = app();
		// $log = $app->make('log');
		// \Log::info("post_index", ['data', 'this is post index3']);
        $page = request()->get('pageNum');
        $pageSize = request()->get('pageSize');

        $query = request()->get('query');

		$posts = Post::orderBy('created_at', 'desc')
			->when($query == 'category', function($q) {
				return $q->where('category_id', request()->get('queryid'));
			})
			->offset($pageSize*($page-1))
			->limit($pageSize)
			->get(['id', 'title', 'cover', 'summary', 'category_id', 'created_at']);

		foreach($posts as $post) {
			$id = $post->id;
			$post['username'] = Post::find($id)->user->name;
			$post['category_name'] = Post::find($id)->category->name;
			$comments = Post::find($id)->comments()->get(['id', 'content', 'user_id']);
			$tags = Post::find($id)->tags()->get(['tag_id', 'name', 'cover']);
			$post['comment_num'] = count($comments);
			if(count($comments) > 0){
				foreach($comments as $comment) {
					$comment['username'] = User::find($comment->user_id)->first()->name;
				}
			}
			// $post['comment_list'] = $comments;
			$post['tags'] = $tags;
		}
		
		$totalCount = count($posts);
		return jsonWrite(200, [
			'dataList' => $posts,
			'pageInfo' => [
				'totalCount' => $totalCount,
				'totalPage' => ceil($totalCount/$pageSize)
			]
		]);
    }

    // 文章详情
    public function show($id)
    {
		$post = Post::where('id', $id)->first();
		$post->category_id = (int)$post->category_id;
		$post->tags = Post::find($id)->tags()->get(['tag_id', 'name', 'cover']);
		$post->category_name = Post::find($id)->category->name;
		$comments = Post::find($id)->comments()->get(['id', 'content', 'user_id']);
		$post->comment_num = count($comments);
		return jsonWrite(200, $post);
    }

    // 修改
    public function update(Request $request, $id)
    {

    	$post = [
			'title' => request('title'),
			'content' => request('content'),
			'edit_content' => request('edit_content'),
			'category_id' => request('category_id'),
			'cover' => request('cover'),
		];

		$post['summary'] = substr_content(request('content'), 300);

		$tags = request('tags');
		$p = [];
		foreach ($tags as $tag) {
			array_push($p, ['tag_id' => $tag]);
		}

		Post::find($id)->tags()->where('post_id', $id)->sync($p);
		Post::find($id)->update($post);
		return jsonWrite(200, '修改成功');
    }

	// 新增
	public function create()
	{
		$post = [
			'title' => request('title'),
			'content' => request('content'),
			'edit_content' => request('edit_content'),
			'category_id' => request('category_id'),
			'cover' => request('cover'),
			'user_id' => \Auth::id()
		];

		$post['summary'] = substr_content(request('content'), 300);

		$tags = request('tags');
		$p = [];
		foreach ($tags as $tag) {
			array_push($p, ['tag_id' => $tag]);
		}

		$id = Post::create($post)->id;

		Post::find($id)->tags()->where('post_id', $id)->sync($p);
		return jsonWrite(200, [
			'id' => $id
		]);
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
