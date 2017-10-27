<?php

namespace App;

use App\Model;

// use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // protected $guarded = [];  // 不可以注入的字段
    
    // protected $fillable = ['title', 'content'];  // 可以注入的字段

    // 关联用户
    public function user()
    {
        return $this->belongsTo('App\User');
        // return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
