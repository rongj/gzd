<?php

namespace App;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    protected $guarded = ['created_at', 'deleted_at'];  // 不可以注入的字段
}
