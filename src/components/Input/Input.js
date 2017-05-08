import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({type, label}) => {
    return (
        <span className={styles['input-' + type]}>
            <input type="text" required="required"/>
            <label>{label}</label>
        </span>
    );
};

export default Input;