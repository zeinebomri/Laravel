<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'summary',
        'ptype',
        'category',
        'totalFund',
        'achievedFund',
        'startDate',
        'owner',
    
    ];


    //a project belongs to a user
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
