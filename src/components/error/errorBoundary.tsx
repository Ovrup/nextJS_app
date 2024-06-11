'use client'

import React from 'react'
import { useLogger } from 'src/context/logger-context'

const ErrorBoundary = ({ error }: { error: Error }) => {
    const { logging } = useLogger();
    logging.error(error.message)
    return (
        <div>{error.message}</div>
    )
}

export default ErrorBoundary