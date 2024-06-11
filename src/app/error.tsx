'use client'

import React from 'react'
import ErrorBoundary from 'src/components/error/errorBoundary';


const Error = ({ error }: { error: Error }) => {
    return (
        <ErrorBoundary error={error} />
    )
}

export default Error