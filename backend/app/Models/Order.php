<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_no',
        'distributor_id',
        'order_date',
        'order_type',
        'remark'
    ];

    public function distributor()
    {
        return $this->belongsTo(Distributor::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}