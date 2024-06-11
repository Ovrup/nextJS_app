'use client';
import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import './Pagination.scss'
import { BreedType } from '../../types';

type PaginationPropsType = {
    onPageChange: (num: number) => void;
    pageCount: number;
    selectedBreed: BreedType
}

const Pagination: React.FC<PaginationPropsType> = ({ onPageChange, pageCount, selectedBreed }) => {
    const [page, setPage] = useState<number>(0);

    function handlePageChange(num: number) {
        if (num < 0 || num > pageCount) {
            return;
        }
        setPage(num);
        onPageChange(num)
    }

    useEffect(() => {
        setPage(0)
    }, [selectedBreed])

    return (
        <div className="pagination-container">
            <Button onClick={() => handlePageChange(0)} type='primary' size='sm' disable={page === 0 ? true : false}>First</Button>
            <Button onClick={() => handlePageChange(page - 1)} type='primary' size='sm' disable={page === 0 ? true : false}>Previous</Button>
            <Button onClick={() => handlePageChange(page + 1)} type='primary' size='sm' disable={page === pageCount ? true : false}>Next</Button>
            <Button onClick={() => handlePageChange(pageCount)} type='primary' size='sm' disable={page === pageCount ? true : false}>Last</Button>
        </div>
    )
}

export default React.memo(Pagination);