<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Plate;

class CategoryController extends Controller
{
	public function index()
	{
		$categories = Category::orderBy('weight', 'desc')
			->orderBy('id')
			->get();
		return [
			'code' => 200,
			'data' => $categories,
		];
	}

    public function create()
    {
		$category = [
			'name' => request('name'),
			'cover' => request('cover'),
			'describe' => request('describe'),
			'weight' => request('weight'),
		];

		Category::create($category);
		return [
			'code' => 200,
			'msg' => '添加成功',
		];
    }

    public function update()
    {
    	$category = [
    		'name' => request('name'),
    		'cover' => request('cover'),
    		'describe' => request('describe'),
    		'weight' => request('weight'),
    	];
    	Category::where('id', request('id'))->update($category);
    	return [
    		'code' => 200,
    		'msg' => '更新成功',
    	];
    }

    public function destroy($id)
    {
        if (empty($id)) {
            return [
                'code' => 201,
                'msg' => 'id不能为空',
            ];
        }
        $result = Category::where('id', $id)->delete();
        $result2 = Plate::where('category_id', $id)->delete();
        if($result && $result2) {
            return [
                'code' => 200,
                'msg' => '删除成功',
            ];
        }
    }
}
