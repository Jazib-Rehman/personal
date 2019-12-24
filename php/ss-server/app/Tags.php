<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $fillable = ['name', 'pro_id', 'email', 'message'];

    public function user()
    {
        return $this->belongsTo(Product::class);
    }
}
