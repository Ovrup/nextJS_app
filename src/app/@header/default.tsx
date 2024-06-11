'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClick from '../../utils/outsideClick';
import { useTheme } from '../../context/theme-context';
import styles from './header.module.scss';
import { useLogger } from 'src/context/logger-context';

const Header = () => {
    const [show, setShow] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { logging } = useLogger()

    function handleThemeChange(val: string) {
        try {
            toggleTheme(val);
            logging.info(`${val} theme selected`)
        } catch {
            logging.error('Error while changing theme')
        }
    }
    return (
        <div className={styles['header-container']}>
            <Image className={styles['nav-logo']} src={logo} alt='Poppulo Logo' width={160} height={60} />

            <div className={styles['user-icon']}>
                <OutsideClick onOutSideClick={() => setShow(false)}>
                    <>
                        <FontAwesomeIcon icon={faUserCircle} onClick={() => setShow((prev) => !prev)} />
                        {show && <div className={styles['theme-container']}>
                            <span className='heading'>Theme</span>
                            <label style={{ marginLeft: '0.5rem' }} className={styles['theme-label']}>
                                <input type='radio' name='theme' checked={theme === 'light'} onChange={() => handleThemeChange('light')} />{" "}
                                <span className={styles['theme-text']}>Light</span>
                            </label>
                            <label style={{ marginLeft: '0.5rem' }} className={styles['theme-label']}>
                                <input type='radio' name='theme' checked={theme === 'dark'} onChange={() => handleThemeChange('dark')} />{" "}
                                <span className={styles['theme-text']}>Dark</span>
                            </label>
                        </div>}
                    </>
                </OutsideClick>
            </div>
        </div>
    )
}

export default Header
