<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ref_id')->nullable();
            $table->string('ref_type')->nullable(); // balance_request / product_request
            $table->string('balance_type')->nullable(); // purchase / turnover
            $table->string('entry_type'); // credit / debit
            $table->decimal('amount', 10, 2);
            $table->string('detail');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};