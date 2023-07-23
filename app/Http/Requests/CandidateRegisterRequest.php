<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CandidateRegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => ['string', 'max:255', 'required'],
            'lastName' => ['string', 'max:255', 'required'],
            'phone' => ['string', 'max:255', 'required'],
            'email' => ['email'],
            'position' => ['string', 'required'],
        ];
    }
}
