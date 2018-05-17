<?php

namespace App;
use App\Model;

class Plate extends Model
{
    protected $guarded = [];  // 不可以注入的字段

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
