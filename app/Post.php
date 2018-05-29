<?php

namespace App;

use App\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
    // protected $guarded = [];  // 不可以注入的字段
    // protected $fillable = [];  // 可以注入的字段
    
    // 关联用户
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault([
            'name' => 'admin',
        ]);
    }

    // 关联评论
    public function comments()
    {
        return $this->hasMany('App\Comment', 'article_id');
    }

    // 关联标签
    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'post_tag', 'post_id', 'tag_id');
    }

    // 关联类别
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    // 获取评论用户
    public function comment_user()
    {
        return $this->hasManyThrough('App\Comment', 'App\User');
    }
}
