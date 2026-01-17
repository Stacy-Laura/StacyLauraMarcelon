/*
    By Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \__)_____|\____)\__  (___/    \___/|_____)____/(___/|_|  \__)_____)
                         (____/                                              
                                             
    Creation date: 15 January 2026
    Last modification date: 17 January 2026
*/
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useOutletContext } from "react-router"; // Import nécessaire pour récupérer la langue

function Contact() {
    // Récupération de la langue depuis le contexte de App.tsx
    const { lang } = useOutletContext<{ lang: string }>();
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    // Dictionnaire de traductions (Anglais par défaut)
    const t = {
        en: {
            title: "Contact Me",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            sendingStatus: "Sending in progress...",
            success: "Message sent successfully! ✨",
            error: "An error occurred, please try again later."
        },
        fr: {
            title: "Me contacter",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer le message",
            sending: "Envoi...",
            sendingStatus: "Envoi en cours...",
            success: "Message envoyé avec succès ! ✨",
            error: "Une erreur est survenue, réessayez plus tard."
        }
    };

    // Sélection des textes selon la langue active
    const content = lang === "fr" ? t.fr : t.en;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);
        setStatusMessage(content.sendingStatus);

        emailjs.sendForm(
            'service_o21uzov', //
            'template_z58shdo', //
            form.current,
            'LXei9u65TQbO4eGJq' //
        )
            .then(() => {
                setStatusMessage(content.success);
                form.current?.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatusMessage(content.error);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <h1>{content.title}</h1>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>{content.name}</label>
                    <input type="text" name="from_name" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>{content.email}</label>
                    <input type="email" name="reply_to" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>{content.message}</label>
                    <textarea name="message" rows={5} required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>

                <button type="submit" disabled={isSending}>
                    {isSending ? content.sending : content.send}
                </button>

                {statusMessage && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{statusMessage}</p>}
            </form>
        </div>
    );
}

export default Contact;