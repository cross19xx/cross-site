import React from 'react';

// Change this if you want to update the form name in Netlify
const NETLIFY_FORM_NAME = 'contact';

export default function ContactForm() {
    return (
        <form
            method="post"
            data-netlify="true"
            name={NETLIFY_FORM_NAME}
            className="contact-form grid"
            data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />

            <div className="contact-form__container">
                <label htmlFor="name" className="contact-form__label">
                    Name
                </label>

                <input type="text" id="name" name="name" className="contact-form__input" />
            </div>

            <div className="contact-form__container">
                <label htmlFor="email" className="contact-form__label">
                    E-mail address
                </label>

                <input type="email" id="email" name="email" className="contact-form__input" />
            </div>

            <div className="contact-form__container contact-form__container--textarea">
                <label htmlFor="description" className="contact-form__label">
                    Details
                </label>

                <textarea id="description" name="description" className="contact-form__textarea" />
            </div>

            <button type="submit" className="contact-form__submit">
                Send mail
            </button>
        </form>
    );
}
