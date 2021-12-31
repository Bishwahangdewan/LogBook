import React from 'react';

//import styles
import './card-button.styles.scss';

const CardButton = ({ children, primary, secondary }) => {
    return (
        <div className={`${primary ? 'primary' : ''} ${secondary ? 'secondary' : ''} card-button-container`}>
            <p>{children}</p>
        </div>
    )
}

export default CardButton;