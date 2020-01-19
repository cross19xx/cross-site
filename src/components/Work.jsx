import React from 'react';
import PropTypes from 'prop-types';

export default function Work(props) {
    // Construct a linear gradient over any image included
    const backgroundImage = `url(${props.img})`;
    // const backgroundImage = `linear-gradient(135deg, rgba(), rgba(26, 87, 230, 0.5)), url(${props.img})`;

    return (
        <div className="work col" style={{ backgroundImage }}>
            <div className="work__inner">
                <p className="work__name">{props.name}</p>
                <p className="work__desc">{props.description}</p>

                <div className="work__links">
                    {props.links.map(link => (
                        <a
                            href={link.url}
                            key={link.url}
                            className="work__link"
                            target="_blank"
                            rel="noreferrer noopener">
                            <i className={`work__link-icon ${link.icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

Work.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            icon: PropTypes.string
        })
    )
};

Work.defaultProps = {
    links: []
};
