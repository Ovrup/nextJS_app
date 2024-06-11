import React, { useState, useRef, useEffect } from 'react';
import './Image.scss'

type ImageProps = {
    src: string,
}

const Image: React.FC<ImageProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current?.complete) {
            setIsLoaded(true)
        }
        else {
            imageRef.current?.addEventListener('load', () => setIsLoaded(true))
        }
    })
    return (
        <div className={`image-container ${isLoaded ? "loaded" : ""}`}>
            <img ref={imageRef} {...props} />
        </div>
    )
}

export default Image