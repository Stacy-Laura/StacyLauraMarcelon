import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSending(true);
        setStatusMessage("Envoi en cours...");

        emailjs.sendForm(
            'service_o21uzov',
            'template_z58shdo',
            form.current,
            'LXei9u65TQbO4eGJq'
        )

            .then(() => {
                setStatusMessage("Message envoyé avec succès ! ✨");
                form.current?.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatusMessage("Une erreur est survenue, réessayez plus tard.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <h1>Me contacter</h1>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nom</label>
                    <input type="text" name="from_name" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                    <input type="email" name="reply_to" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                    <textarea name="message" rows={5} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <button type="submit" disabled={isSending}>
                    {isSending ? "Envoi..." : "Envoyer le message"}
                </button>

                {statusMessage && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{statusMessage}</p>}
            </form>
        </div>
    );
}

export default Contact;