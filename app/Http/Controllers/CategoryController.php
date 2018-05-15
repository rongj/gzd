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

		return jsonWrite(200, $categories);
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

		return jsonWrite(200, '添加成功');
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

		return jsonWrite(200, '更新成功');
    }

    public function destroy($id)
    {
        if (empty($id)) {
			return jsonWrite(201, 'id不能为空');
        }
        $result = Category::where('id', $id)->delete();
        $result2 = Plate::where('category_id', $id)->delete();
        if($result && $result2) {
			return jsonWrite(200, '删除成功');
        }
    }
}
