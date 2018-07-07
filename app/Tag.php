<?php

namespace App;

use App\Model;

class Tag extends Model
{
    protected $guarded = [];

    public function posts()
    {
        return $this->belongsToMany('App\Post');
    }
}
