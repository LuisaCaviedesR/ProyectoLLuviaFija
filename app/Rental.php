<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'days', 'nights', 'price','quantity','datein','dateout','cabin_id','affiliate_id'
    ];
   
   public function cabins()
   {
       return $this->belongsTo('App\Cabin','cabin_id');
   }
   
   public function affiliates()
   {
       return $this->belongsTo('App\affiliate','affiliate_id');
   }
}
