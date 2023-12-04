<?php

namespace App\Models\Chat;

use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Eloquent\SoftDeletes;

class Participant extends Model
{
    use SoftDeletes;

    protected $collection = 'participants';
    protected $connection = 'mongodb';

    protected $fillable = ['thread_id', 'sender_id', 'receiver_id', 'message', 'read_at'];
}
