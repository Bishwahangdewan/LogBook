import React from 'react';

//import styles
import './custom-button.styles.scss';

const CustomButton = ({ children, primary }) => {
    return (
        <button className={` ${primary ? 'primary' : ''} custom-button-container`}>
            {children}
        </button>
    )
}

export default CustomButton;