<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class CandidateRegistered extends Mailable
{
    use Queueable, SerializesModels;

    private mixed $candidate;

    /**
     * Create a new message instance.
     */
    public function __construct(mixed $candidate)
    {
        $this->candidate = $candidate;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('recursoshumanos@servisolutions.com', 'Recursos Humanos'),
            subject: 'Candidato Registrado',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.candidates.registered',
            with: [
                'firstName' => $this->candidate['firstName'],
                'lastName' => $this->candidate['lastName'],
                'phone' => $this->candidate['phone'],
                'position' => $this->candidate['position'],
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
