<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use HasApiTokens, Notifiable;
    // protected $guarded = [];
    protected $fillable = ['name', 'email', 'password', 'role_id', 'role_name'];

    protected $hidden = ['password', 'remember_token'];

    public function phone ()
    {
        return $this->hasOne('App\Phone')->withDefault();
    }
}
