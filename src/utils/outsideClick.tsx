import React, { useEffect, useRef } from 'react'

type OutsideClickProps = {
    children: JSX.Element;
    onOutSideClick: () => void
}

const OutsideClick: React.FC<OutsideClickProps> = ({ children, onOutSideClick }) => {


    const dropdownRef = useRef<HTMLDivElement>(null)

    function handleOutsideClick(e: any) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            onOutSideClick()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);

        return () => {
            document.removeEventListener('click', handleOutsideClick, true)
        }
    })
    return (
        <div ref={dropdownRef}>
            {children}
        </div>
    )
}

export default OutsideClick