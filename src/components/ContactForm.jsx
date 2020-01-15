import React from 'react';

export default class ContactForm extends React.Component {
    state = {};

    submitForm = async event => {
        event.preventDefault();
    };

    render() {
        return (
            <form className="contact-form grid" onSubmit={this.submitForm}>
                <div className="contact-form__container">
                    <label htmlFor="name" className="contact-form__label">
                        Name
                    </label>

                    <input type="text" id="name" className="contact-form__input" />
                </div>

                <div className="contact-form__container">
                    <label htmlFor="email" className="contact-form__label">
                        E-mail address
                    </label>

                    <input type="email" id="email" className="contact-form__input" />
                </div>

                <div className="contact-form__container contact-form__container--textarea">
                    <label htmlFor="description" className="contact-form__label">
                        Details
                    </label>

                    <textarea className="contact-form__textarea" id="description" />
                </div>

                <button type="submit" className="contact-form__submit">
                    Send mail
                </button>
            </form>
        );
    }
}
