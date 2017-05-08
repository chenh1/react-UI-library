import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({}) => {
    return (
        <span className={styles['input-one']}>
            <input type="text" required="required"/>
            <label>Placeholder</label>
        </span>
    );
};

export default Input;