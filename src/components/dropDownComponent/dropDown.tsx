'use client'

import React, { useState } from 'react';
import './dropDown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import OutsideClick from '../../utils/outsideClick';
import { BreedType } from '../../types';
import { useTheme } from '../../context/theme-context';
import { useLogger } from 'src/context/logger-context';

type DropdownPropstype = {
    onSelect: (breed: BreedType) => void,
    breeds: BreedType[],
    selectedBreed: BreedType,
    setSelectedBreed: React.Dispatch<React.SetStateAction<BreedType>>
    search?: boolean
}

const DropDown: React.FC<DropdownPropstype> = ({ onSelect, breeds, selectedBreed,
    setSelectedBreed, search = false }) => {

    const { logging } = useLogger()

    const [showList, setShowList] = useState<boolean>(false);
    const { theme } = useTheme();
    const [query, setQuery] = useState("")
    const filteredBreeds = breeds.filter((breed: BreedType) => breed.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    function handleDropDownItem(breed: BreedType) {
        try {
            setQuery("")
            setShowList((prev) => !prev);
            setSelectedBreed(breed);
            onSelect(breed);
            logging.info('Breed selected')
        } catch {
            logging.error('Error while selecting breed')
        }
    }

    return (
        <div className='dropdown-container'>
            <OutsideClick onOutSideClick={() => setShowList(false)}>
                <>
                    <Button size='lg'
                        style={{ backgroundColor: `${theme === 'dark' ? 'rgb(85,167,248)' : 'rgb(253,107,70)'}` }}
                        type='primary'
                        onClick={() => setShowList((prev) => !prev)}
                    >
                        <span id='breed-name' style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                            {selectedBreed.name ? selectedBreed.name : "Select Breed"}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                    </Button>

                    {showList && <div className='dropdown-list'>
                        {search && <div className='search-box'>
                            <input type='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        }
                        {filteredBreeds.map((breed: BreedType) => {
                            return <div data-testid='breed' key={breed.id} onClick={() => handleDropDownItem(breed)} className='dropdown-item'>{breed.name}</div>
                        })}
                    </div>}
                </>
            </OutsideClick>
        </div>
    )
}

export default DropDown