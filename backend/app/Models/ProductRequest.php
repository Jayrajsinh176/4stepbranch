<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductRequest extends Model
{
    protected $fillable = [
        'product_id',
        'quantity',
        'total_products',
        'total_amount',
        'total_pv',
        'status'
    ];
}