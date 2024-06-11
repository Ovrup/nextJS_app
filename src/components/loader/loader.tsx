'use client'

import React from 'react';
import styles from './loader.module.scss'
import Lottie from 'react-lottie';
import loader_animation from '../../animations/loader_animation.json'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader_animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className={styles['loader-container']}>
            <Lottie options={defaultOptions} width={'20%'} style={{ borderRadius: '2rem' }} />
        </div>
    )
}

export default Loader