import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, onClick}) => {
    return (
        <button className={'button-' + type} onClick={onClick}>Test</button>
    );
}

export default Button;