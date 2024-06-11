'use client'

import { useEffect, useState } from 'react';

const useLocalStorage = (key: string): [value: any, setValue: (val: any) => void] => {

    function getInitialValue(key: string): any {
        const value = localStorage.getItem(key);
        if (value) return JSON.parse(value);

        return ''
    }

    const [value, setValue] = useState<() => string>(() => getInitialValue(key));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue]
}

export default useLocalStorage