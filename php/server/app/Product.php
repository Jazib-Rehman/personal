<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'cat_id', 'description', 'nutrition', 'price', 'image'];

    public function user()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags(){
        return $this->hasMany('App\Tags', 'pro_id', 'id');
    }
}
