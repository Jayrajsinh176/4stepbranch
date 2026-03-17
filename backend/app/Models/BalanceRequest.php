<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BalanceRequest extends Model
{
    use HasFactory; 

    protected $fillable = [
        'type',
        'amount',
        'mode_of_payment',
        'transaction_no',
        'payment_slip',
        'status'
    ];
}