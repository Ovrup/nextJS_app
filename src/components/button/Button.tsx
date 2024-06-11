import React from 'react'
import { useTheme } from '../../context/theme-context';

type ButtonPropType = {
    children: JSX.Element | string;
    onClick?: () => void;
    size: string;
    type: string;
    disable?: boolean;
    style?: Object
}

const Button: React.FC<ButtonPropType> = ({ children, onClick, size, type, disable, style }) => {

    const { theme } = useTheme()

    return (
        <button style={style} className={`btn ${theme === 'dark' ? 'btn-dark' : ""} ${size ? "btn-" + size : ""} ${type ? "btn-" + type : ""} ${disable ? "btn-disabled" : ""}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button