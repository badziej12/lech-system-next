'use client'

import {ReactNode, useState} from "react";

export function ExpandScript({children}: Readonly<{children?: ReactNode}>) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleClass = () => setIsExpanded(!isExpanded);

    return (
        <div className={isExpanded ? 'active' : ''} onClick={toggleClass}>
            {children}
        </div>
    )
}

export default ExpandScript;