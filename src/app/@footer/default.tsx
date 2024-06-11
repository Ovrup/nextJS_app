import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles["footer-container"]}>
            <p className={styles['footer-text']}>© 2024 Poppulo. All rights reserved.</p>
            <div className={styles["footer-icon-container"]}>
                <div className={styles['footer-brand-icon']}>
                    <a target="_blank" rel="noreferrer" className="" href="https://twitter.com/PoppuloSays">
                        <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                    </a>
                </div>
                <div className={styles['footer-brand-icon']}>
                    <a target="_blank" rel="noreferrer" className="" href="https://www.facebook.com/PoppuloSays">
                        <FontAwesomeIcon icon={faFacebook} size={'2x'} />
                    </a>
                </div>
                <div className={styles['footer-brand-icon']}>
                    <a target="_blank" rel="noreferrer" className="" href="https://linkedin.com/company/poppulo">
                        <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
                    </a>
                </div>
                <div className={styles['footer-brand-icon']}>
                    <a target="_blank" rel="noreferrer" className="" href="https://www.youtube.com/c/poppulo">
                        <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
