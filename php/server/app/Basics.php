<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Basics extends Model
{
    protected $fillable = ['logo','steckers', 'homeImage','findUsImage','contactUsImage','ourFoodImage', 'site_header', 'categories', 'channels', 'locators', 'facebook', 'twitter', 'instagram', 'youtube'];
}
