<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Basics extends Model
{
    protected $fillable = ['logo', 'site_header', 'categories', 'channels', 'locators', 'facebook', 'twitter', 'instagram', 'youtube'];
}
