<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBalanceRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   public function up()
{
    Schema::create('balance_requests', function (Blueprint $table) {
        $table->id();
        $table->string('type'); // purchase or turnover
        $table->decimal('amount', 10, 2);
        $table->string('mode_of_payment');
        $table->string('transaction_no')->nullable();
        $table->string('payment_slip')->nullable();
        $table->string('status')->default('pending');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('balance_requests');
    }
}
