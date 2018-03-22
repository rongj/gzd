<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plate extends Model
{
    protected $guarded = [];  // 不可以注入的字段

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
