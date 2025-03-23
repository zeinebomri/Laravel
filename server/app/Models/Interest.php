<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'tag',
        'used_times'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}