import React from 'react';
import PropTypes from 'prop-types';

export default function Work(props) {
    return (
        <div className="work col">
            <div className="work__front" style={{ backgroundImage: `url(${props.img})` }}>
                <p className="work__name">{props.name}</p>
            </div>

            <div className="work__back">
                <p className="work__description">{props.description}</p>
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
