<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BikeController extends Controller
{
    public function list() {
        $bikes = Bike::all();

        return response()->json([
            'status' => 200,
            'bikes' => $bikes,
        ]);
    }
    
    public function store (Request $request) {

        $request->validate([
            'title' => 'required',
            'IDN' => 'required',
            'address' => 'required',
            'city' => 'required',
        ]);
        
        Bike::create($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Bike Added Successfully',
        ]);
    }

    public function destroy(Bike $bike)
    {
        $bike->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Bike Deleted Successfully',
        ]);
    }

    public function edit(Bike $bike, Request $request)
    {
        $bike->update($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Bike Updated Successfully',
        ]);
    }
}
