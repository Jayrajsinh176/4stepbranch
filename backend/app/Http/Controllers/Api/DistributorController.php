<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Distributor;

class DistributorController extends Controller
{

    // Get distributor by distributor_id
    public function show($id)
    {

        $distributor = Distributor::where('distributor_id', $id)->first();

        if (!$distributor) {

            return response()->json([
                'success' => false,
                'message' => 'Distributor not found'
            ], 404);

        }

        return response()->json([
            'success' => true,
            'data' => [
                'distributor_id' => $distributor->distributor_id,
                'name' => $distributor->name,
                'mobile' => $distributor->mobile
            ]
        ]);

    }

}