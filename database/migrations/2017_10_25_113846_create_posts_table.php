<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 100)->default("");
            $table->text('content');
            $table->text('cover')->nullable();
            $table->string('category_id');
            $table->text('edit_content')->nullable();
            $table->text('summary')->nullable();
            $table->integer('user_id')->default(0);
            $table->string('status')->default('active');
            $table->integer('read_num')->unsigned()->default(0);
            $table->integer('love_num')->unsigned()->default(0);
            $table->softDeletes();
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
        Schema::dropIfExists('posts');
    }
}
