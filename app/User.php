<?php

namespace App;

// use App\Model;
// use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // protected $guarded = [];
    protected $fillable = ['name', 'email', 'password'];
}
