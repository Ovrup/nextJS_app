import React from 'react';
import styles from './noDataFound.module.scss';
import Image from 'next/image';
import no_data_found from '../../../public/no_data_found.svg';

const NoDataFound = () => {
    return (
        <div className={styles['ndf-container']}>
            <Image className={styles['ndf-image']} src={no_data_found} alt='No Data Found' />
        </div>
    )
}

export default NoDataFound