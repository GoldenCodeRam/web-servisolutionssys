<?php

namespace App\Http\Controllers;

use App\Http\Requests\CandidateRegisterRequest;
use App\Mail\CandidateRegistered;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;

class CandidateController extends Controller
{
    /**
     * Update the user's profile information.
     */
    public function register(CandidateRegisterRequest $request): Response
    {
        Mail::to("sysfaca@gmail.com")->send(new CandidateRegistered([
            'firstName' => $request->get('firstName'),
            'lastName' => $request->get('lastName'),
            'phone' => $request->get('phone'),
            'position' => $request->get('position'),
        ]));
        return response("OK", 201);
    }
}
