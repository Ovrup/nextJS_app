'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { BreedType, CatOrDogType } from '../../types';
import DropDown from '../dropDownComponent/dropDown';
import styles from './ImageGallery.module.scss'
import { getCatDogBreedsData } from '../../apis/method';
import Pagination from '../pagination/Pagination';
import Image from '../image/Image';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CAT, DOG } from '../../constants'
import NoDataFound from '../no-data-found/noDataFound';
import Modal from '../modal/modal';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogger } from 'src/context/logger-context';

const ImageGallery = ({ data }: { data: CatOrDogType[] }) => {

    const [breeds, setBreeds] = useState<BreedType[]>([]);
    const [breed, setBreed] = useLocalStorage('breed')
    const [selectedBreed, setSelectedBreed] = useState<BreedType>(breed ? JSON.parse(breed) : {
        id: "", name: ""
    });
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const router = useRouter();
    const pageCount = 100;

    const { logging } = useLogger()

    useEffect(() => {
        fetchCatDogBreed()
    }, []);


    async function fetchCatDogBreed() {
        try {
            const resposne = await getCatDogBreedsData(DOG);
            setBreeds(resposne);
            logging.info('Data fetched successfully');
        }
        catch {
            logging.error('Error in data fetching');
        }
    }

    const onPageChange = useCallback((num: number) => {
        router.push(`/cat-dog-image?type=${DOG}&breed_ids=${selectedBreed.id ? selectedBreed.id : ""}&page=${num}`)
    }, [selectedBreed])


    function onBreedSelect(breed: BreedType) {
        setBreed(JSON.stringify(breed));
        setSelectedBreed(breed);
        router.push(`/cat-dog-image?type=${DOG}&breed_ids=${breed.id}&page=0`)
    }

    function handleImageSlide(val: number) {
        let index = data.findIndex((ele) => ele.id === selectedImage.id);

        if (index === 0 && val === -1) {
            setSelectedImage(data[data.length - 1])
        }
        else if (index === (data.length - 1) && val === 1) {
            setSelectedImage(data[0])
        }
        else {
            setSelectedImage(data[index + val])
        }
    }



    return (
        <>
            <DropDown
                breeds={breeds}
                onSelect={onBreedSelect}
                selectedBreed={selectedBreed}
                setSelectedBreed={setSelectedBreed}
                search={true}
            />

            {data.length ? <>
                <div className={styles['image-gallery-container']}>
                    {data.map((cat: CatOrDogType) => {
                        return <div key={cat.id} onClick={() => setSelectedImage(cat)} style={{ cursor: 'pointer' }}>
                            <Image src={cat.url} data-testid='cat-image' />
                        </div>
                    })}
                </div>
                <Pagination onPageChange={onPageChange} pageCount={pageCount} selectedBreed={selectedBreed} />
            </> : <NoDataFound />
            }

            <Modal isOpen={selectedImage !== null} closeModal={() => setSelectedImage(null)}>
                <div className={styles["modal-content"]}>
                    <button onClick={() => handleImageSlide(-1)} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} size={'3x'} />
                    </button>

                    <section className={styles['modal-img-section']}>
                        <img src={selectedImage?.url} />
                    </section>

                    <section className={`${styles['modal-desc-section']} text-color`}>
                        <p className={styles['breed-name']}>{" "}<h1>{selectedImage?.details?.name}</h1></p>

                        <div className={styles['weight-height']}>
                            <div className={styles['flex-column']}>
                                <div className='heading'>Weight</div>
                                <div> {" "}{selectedImage?.details?.weight}{" "}lbs</div>
                            </div>

                            <div className={styles['flex-column']}>
                                <div className='heading'>Height</div>
                                <div>{" "}{selectedImage?.details?.height}{" "}meters</div>
                            </div>

                            <div className={styles['flex-column']}>
                                <div className='heading'>Life Span</div>
                                <div>{" "}{selectedImage?.details?.life_span}</div>
                            </div>

                            <div className={styles['flex-column']}>
                                <div className='heading'>Group</div>
                                <div>{" "}{selectedImage?.details?.group}</div>
                            </div>
                        </div>
                    </section>

                    <button onClick={() => handleImageSlide(1)} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faArrowCircleRight} size={'3x'} />
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default ImageGallery