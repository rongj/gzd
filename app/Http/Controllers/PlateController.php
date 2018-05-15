<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plate;

class PlateController extends Controller
{
    public function index()
    {
        $plates = Plate::orderBy('weight', 'desc')->orderBy('id')->get();
        foreach ($plates as $item) {
            $item['category_name'] = $item->category->name ?: '';
        }
        return jsonWrite(200, $plates);
    }

    public function add()
    {
        $plate = [
            'name' => request('name'),
            'cover' => request('cover'),
            'describe' => request('describe'),
            'weight' => request('weight'),
            'category_id' => request('category_id'),
        ];

        Plate::create($plate);

        return jsonWrite(200, '添加成功');
    }

    public function update()
    {
        $plate = [
            'name' => request('name'),
            'cover' => request('cover'),
            'describe' => request('describe'),
            'weight' => request('weight'),
            'category_id' => request('category_id'),
        ];
        Plate::where('id', request('id'))->update($plate);

        return jsonWrite(200, '更新成功');
    }

    public function delete($id)
    {
        if (empty($id)) {
            return [
                'code' => 201,
                'msg' => 'id不能为空',
            ];
        }
        $result = Plate::where('id', $id)->delete();
        if($result) {
            return jsonWrite(200, '删除成功');
        }
    }

}
