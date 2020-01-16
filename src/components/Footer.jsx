import React from 'react';

import Logo from '../img/logo_white.png';

const Footer = () => {
    const renderQuote = () => {
        const quotes = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus nulla sit amet augue gravida congue.',
            'Integer vestibulum ipsum vel dolor lacinia, eget elementum augue aliquet.',
            'Etiam rhoncus nibh vitae nisl pharetra, at cursus eros facilisis. Pellentesque sed augue orci.',
            'Fusce elementum laoreet est et viverra. Nullam dapibus est in lorem fringilla, ac maximus quam varius.'
        ];

        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const renderSocials = () => {
        const socials = [
            { name: 'Github', icon: 'ti-github', url: 'https://www.github.com/cross19xx' },
            {
                name: 'Facebook',
                icon: 'ti-facebook',
                url: 'https://www.facebook.com/profile.php?id=100009436144652'
            },
            {
                name: 'Stack Overflow',
                icon: 'ti-stack-overflow',
                url: 'https://stackoverflow.com/users/3651221/cr05s19xx'
            },
            {
                name: 'Instagram',
                icon: 'ti-instagram',
                url: 'https://www.instagram.com/kenneth_kwakyegyamfi/'
            },
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/kenneth-kwakye-gyamfi/'
            },
            { name: 'Twitter', icon: 'ti-twitter', url: 'https://twitter.com/cross19xx' }
        ];

        return socials.map(social => (
            <a
                target="_blank"
                href={social.url}
                key={social.icon}
                title={social.name}
                rel="noopener noreferrer"
                className="footer__social-btn">
                <i className={`${social.icon} footer__social-icon`} />
            </a>
        ));
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={Logo} alt="Kenneth Kwakye-Gyamfi Logo" className="footer__logo" />

            <p className="footer__quote">{renderQuote()}</p>

            <div className="footer__social">{renderSocials()}</div>

            <p className="footer__copyright">Handcrafted by yours truly 😎 &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;
