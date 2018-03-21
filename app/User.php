<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
// use App\Model;
// use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use HasApiTokens, Notifiable;
    // protected $guarded = [];
    protected $fillable = ['name', 'email', 'password', 'role_id', 'role_name'];

    protected $hidden = ['password', 'remember_token'];

    public function post(){
        return $this->hasMany(Posts::class);
    }
}
