import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({type, onClick, text}) => {
    return (
        <button className={styles['theme-' + type]} onClick={onClick}>{text}</button>
    );
};

export default Button;