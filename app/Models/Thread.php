<?php

namespace App\Models;


use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Eloquent\SoftDeletes;


class Thread extends Model
{
    use SoftDeletes;

    protected $collection = 'threads';
    protected $connection = 'mongodb';

    protected $fillable = ['title'];

    public $timestamps = false;

}
