<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('member_id')->unique();
            $table->string('fullname');
            $table->string('branch_name');
            $table->string('branch_pan')->nullable();
            $table->date('dob');
            $table->string('gst_no');
            $table->string('email')->unique();
            $table->string('mobile_no');
            $table->string('password');
            $table->text('address');
            $table->string('pin_code');
            $table->string('state');
            $table->string('city');
            $table->string('district');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};